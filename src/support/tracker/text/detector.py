import os
import sys

sys.path.insert(0, os.getcwd())
sys.path.insert(0, os.path.dirname(os.getcwd()))

import time
from collections import OrderedDict

import cv2
import numpy as np
import torch
from craft_detector import craft_utils, file_utils, imgproc
from craft_detector.craft import CRAFT
from craft_detector.refinenet import RefineNet
from PIL import Image
from tqdm import tqdm

from src.app import config
from src.utils import cbfile


class CraftDetector:

    def __init__(
        self,
        trained_model="craft_mlt_25k.pth",  # str, 主CRAFT模型权重路径
        refiner_model="craft_refiner_CTW1500.pth",  # str, RefineNet权重路径
        canvas_size=1280,  # int, 推理时图像的最大边长（长边缩放到此尺寸），推荐范围 512~2048，越大可检测更小文字，但显存和计算量增加
        mag_ratio=1.5,  # float, 图像放大倍数，用于提高小文字检测精度，推荐 1.0~2.0，值越大对小文字越敏感
        text_threshold=0.7,  # float, 文字置信度阈值，推荐 0.5~0.9，值越高检测越严格，低置信度文字会被丢弃
        link_threshold=0.4,  # float, 连接置信度阈值，推荐 0.3~0.7，用于控制相邻文字是否合并为一个区域
        low_text=0.4,  # float, 文字低置信度阈值，推荐 0.3~0.5，用于保留一些低置信度文字防止过多文字被丢弃
        poly=True,  # bool, 是否输出多边形文字框
        refine=True,  # bool, 是否使用 RefineNet 优化文字连接
        use_cuda=True,  # bool, 是否使用GPU
        show_time=False,  # bool, 是否打印推理时间
    ):
        self.canvas_size = canvas_size
        self.mag_ratio = mag_ratio
        self.text_threshold = text_threshold
        self.link_threshold = link_threshold
        self.low_text = low_text
        self.poly = poly
        self.refine = refine
        self.show_time = show_time

        # 获取可用 GPU
        self.device = "cuda" if torch.cuda.is_available() else "cpu"

        # 下载模型
        checkpoint_dir = os.path.join(config.get_models_torch_dir(), "hub/checkpoints")
        self.trained_checkpoint = cbfile.http_download(f"https://huggingface.co/Manbehindthemadness/craft_mlt_25k/resolve/main/{trained_model}", checkpoint_dir)  # str, 主CRAFT模型权重路径
        self.refiner_checkpoint = cbfile.http_download(f"https://huggingface.co/Manbehindthemadness/craft_mlt_25k/resolve/main/{refiner_model}", checkpoint_dir)  # str, RefineNet权重路径

        # 初始化 CRAFT 模型
        self.net = CRAFT()
        self.net.load_state_dict(self._load_state(self.trained_checkpoint))
        self.net.to(self.device)
        self.net.eval()

        # 初始化 RefineNet
        self.refine_net = None
        if self.refine:
            self.refine_net = RefineNet()
            self.refine_net.load_state_dict(self._load_state(self.refiner_checkpoint))
            self.refine_net.to(self.device)
            self.refine_net.eval()
            self.poly = True  # Refiner 強制需要 poly=True

    @staticmethod
    def _save(input_image, output_image, output_boxes, savetxt: bool = False, saveimage: bool = True, savemask: bool = True, output="./result/"):
        filename, file_ext = os.path.splitext(os.path.basename(input_image))
        if savetxt:
            res_txt_file = os.path.join(output, "txt", f"{filename}.txt")
            os.makedirs(os.path.dirname(res_txt_file), exist_ok=True)
        if saveimage:
            res_img_file = os.path.join(output, "frame_painted", f"{filename}.{file_ext}")
            os.makedirs(os.path.dirname(res_img_file), exist_ok=True)
        if savemask:
            res_mask_file = os.path.join(output, "mask", f"{filename}.{file_ext}")
            os.makedirs(os.path.dirname(res_mask_file), exist_ok=True)
        image = np.array(output_image)  # 原图（用于绘制红框）
        h, w = image.shape[:2]

        # ----------- 新增：创建遮罩图(黑底) -----------
        mask = np.zeros((h, w), dtype=np.uint8)  # 黑色背景

        # Save text file & draw results
        if savetxt:
            f = open(res_txt_file, "w", encoding="utf-8")

        for box in output_boxes:
            pts = np.array(box).astype(np.int32)
            # ----------- 新增：box区域填白色 -----------
            cv2.fillPoly(mask, [pts], 255)
            # ----------- 原来的：文字框绘制在图像上 -----------
            cv2.polylines(image, [pts.reshape((-1, 1, 2))], True, (0, 0, 255), 2)
            if savetxt:
                flat = pts.reshape(-1)
                f.write(",".join([str(p) for p in flat]) + "\n")

        if savetxt:
            f.close()

        # ----------- 保存结果图像和 mask 图 -----------
        if saveimage:
            cv2.imwrite(res_img_file, image)
        if savemask:
            cv2.imwrite(res_mask_file, mask)

    def set_parameters(self, canvas_size: int | None = None, mag_ratio: float | None = None, text_threshold: float | None = None, link_threshold: float | None = None, low_text: float | None = None):
        if canvas_size is not None:
            self.canvas_size = canvas_size

        if mag_ratio is not None:
            self.mag_ratio = mag_ratio

        if text_threshold is not None:
            self.text_threshold = text_threshold

        if link_threshold is not None:
            self.link_threshold = link_threshold

        if low_text is not None:
            self.low_text = low_text

    @staticmethod
    def _load_state(path):
        """移除 DataParallel 的 module. 前綴"""
        state_dict = torch.load(path, map_location="cpu")
        new_dict = OrderedDict()
        for k, v in state_dict.items():
            new_k = k.replace("module.", "") if k.startswith("module.") else k
            new_dict[new_k] = v
        return new_dict

    @staticmethod
    def _ensure_dir(path):
        os.makedirs(os.path.dirname(path), exist_ok=True)

    @torch.no_grad()
    def _preprocess(self, image):
        """调整图像尺寸并标准化，返回 tensor 和比例"""
        img_resized, target_ratio = imgproc.resize_aspect_ratio(image, self.canvas_size, interpolation=cv2.INTER_LINEAR, mag_ratio=self.mag_ratio)
        ratio_h = ratio_w = 1 / target_ratio
        x = imgproc.normalizeMeanVariance(img_resized)
        x = torch.from_numpy(x).permute(2, 0, 1).unsqueeze(0).to(self.device)
        return x, ratio_w, ratio_h

    def detect_frame(self, frame: np.ndarray, return_type="pil"):
        """
        输入一帧 (RGB numpy array)，返回绘制红框后的图像

        Args:
            frame (np.ndarray): RGB 格式图像 (get_frame 返回的)
            return_type (str): "pil" 或 "numpy"

        Returns:
            PIL.Image 或 numpy.ndarray
        """

        # 输入是 RGB，需要转 BGR 才能给 CRAFT & cv2 用
        bgr_image = frame[:, :, ::-1]

        # 用 CRAFT 检测
        _, polys, _ = self.detect_image(bgr_image)

        # 绘制红框（在 BGR 图像上）
        draw_img = bgr_image.copy()
        for poly in polys:
            pts = np.array(poly).reshape((-1, 1, 2)).astype(np.int32)
            cv2.polylines(draw_img, [pts], True, color=(0, 0, 255), thickness=2)

        # 输出转换
        if return_type == "pil":
            # 转回 RGB 再给 PIL
            return Image.fromarray(draw_img[:, :, ::-1])
        else:
            # 返回 numpy，依然是 BGR
            return draw_img

    @torch.no_grad()
    def detect_image(self, image):
        """
        image: BGR numpy array
        """
        t0 = time.time()

        x, rw, rh = self._preprocess(image)
        y, feature = self.net(x)

        score_text = y[0, :, :, 0].cpu().numpy()
        score_link = y[0, :, :, 1].cpu().numpy()

        if self.refine_net is not None:
            y_ref = self.refine_net(y, feature)
            score_link = y_ref[0, :, :, 0].cpu().numpy()

        # 取得 box & poly
        boxes, polys, _ = craft_utils.getDetBoxes(textmap=score_text, linkmap=score_link, text_threshold=self.text_threshold, link_threshold=self.link_threshold, low_text=self.low_text, poly=self.poly)

        boxes = craft_utils.adjustResultCoordinates(boxes, rw, rh)
        polys = craft_utils.adjustResultCoordinates(polys, rw, rh)

        for i in range(len(polys)):
            if polys[i] is None:
                polys[i] = boxes[i]

        heatmap = imgproc.cvt2HeatmapImg(np.hstack((score_text, score_link)))

        if self.show_time:
            print(f"Processing time: {time.time() - t0:.3f}s")

        return boxes, polys, heatmap

    @torch.no_grad()
    def detect_folder(self, folder_path, savetxt: bool = False, saveimage: bool = True, savemask: bool = True, output_dir="./result"):
        """检测文件夹中所有图像并按 GPU 自动分配批处理"""
        image_list, _, _ = file_utils.get_files(folder_path)
        os.makedirs(output_dir, exist_ok=True)

        # tqdm 显示总进度
        pbar = tqdm(total=len(image_list), desc="Processing", dynamic_ncols=True)

        # 每个 GPU 异步处理对应的批次
        for img_path in image_list:
            image = imgproc.loadImage(img_path)
            _, polys, _ = self.detect_image(image)

            self._save(img_path, image[:, :, ::-1], polys, savetxt, saveimage, savemask, output_dir)
            pbar.update(1)

        pbar.close()

    @torch.no_grad()
    def clear_memory(self):
        torch.cuda.empty_cache()


if __name__ == "__main__":
    detector = CraftDetector(
        use_cuda=True,
        canvas_size=1280,
        poly=True,
        refine=True,
    )

    # 单张图片
    # image = cv2.imread("frames/test1.jpg")
    # boxes, polys, heatmap = detector.detect_image(image)

    # 批量处理文件夹
    detector.detect_folder("C:/Users/xiesx/Desktop/frames", output_dir="result/test/")
