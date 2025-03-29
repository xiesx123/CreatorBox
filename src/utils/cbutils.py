# coding=utf-8
import os
import sys

sys.path.insert(0, os.getcwd())
sys.path.insert(0, os.path.dirname(os.getcwd()))

import hashlib
import json
import locale
import re
import shutil
import socket
import tempfile
import uuid
from collections import defaultdict
from datetime import datetime, timedelta
from pathlib import Path

import cv2
import ffmpeg
import language_tags
import librosa
import numpy as np
import psutil
import requests
import torch
from langdetect import detect
from loguru import logger
from playsound import playsound
from pydub import AudioSegment

from src.app import constant
from src.app.annotation import Window, system

# =================================================================================================== System


def is_debug():
    debug = False
    for arg in sys.argv:
        if arg == "--reload":
            try:
                debug = True
            except ValueError:
                debug = False
    return debug


def is_china():
    try:
        # 获取用户的 IP 地址和位置
        response = requests.get("http://ipinfo.io/json")
        data = response.json()
        # 判断是否在中国
        if data.get("country") == "CN":
            return True
        else:
            return False
    except requests.exceptions.RequestException:
        return False


def env(key):
    val = os.getenv(key, None)
    if val == None:
        logger.warning("environment variable  '{}' not found", key)
    return val


def get_port():
    port = 8000
    for i, arg in enumerate(sys.argv):
        if arg == "--port":
            try:
                port = int(sys.argv[i + 1])
            except ValueError:
                logger.error("Port number must be an integer, using default port.")
    return port


def get_locale():
    try:
        # 1. 优先用 getdefaultlocale，更标准，兼容性好
        lang, _ = locale.getdefaultlocale()

        # 2. 再尝试 getlocale（处理某些环境）
        if not lang:
            lang, _ = locale.getlocale()

        # 3. 如果还没有，尝试 setlocale
        if not lang:
            locale.setlocale(locale.LC_ALL, "")
            lang, _ = locale.getlocale()

        # 4. lang 是 None，直接返回默认
        if not lang:
            return "zh-CN"

        # 5. 有些奇怪的语言描述（Windows 特有），过滤掉
        # 只接受 zh_CN、en_US 这种格式
        if not re.match(r"^[a-zA-Z]{2,3}_[a-zA-Z]{2,3}$", lang):
            return "zh-CN"

        # 6. 转换格式 zh_CN -> zh-CN，规范大小写
        parts = lang.split("_")
        language_territory = f"{parts[0].lower()}-{parts[1].upper()}"

        return language_territory

    except Exception as e:
        print(f"[get_locale] Error: {e}")
        return "zh-CN"


def get_internal_ip():
    try:
        # 创建一个UDP套接字
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        # 连接到一个公共的DNS服务器地址
        s.connect(("8.8.8.8", 80))
        # 获取本地IP地址
        internal_ip = s.getsockname()[0]
        # 关闭套接字
        s.close()
        return internal_ip
    except Exception as e:
        logger.error(f"get internal ip error: {e}")
        return "127.0.0.1"


def get_external_ip():
    try:
        # 备用1 https://ipinfo.io/json
        # 备用2 https://whois.pconline.com.cn/ipJson.jsp?json=true
        response = requests.get("https://ipinfo.io/json")
        if response.status_code == 200:
            data = response.json()
            return data["ip"]
        else:
            logger(f"request error: {response.status_code}")
            return None
    except Exception as e:
        logger.error(f"get external ip error: {e}")
        return None


# cuda 是否可用
def device():
    # logger.info(f"当前 PyTorch 使用的线程数：{torch.get_num_threads()}")
    return "cuda" if torch.cuda.is_available() else "cpu"


# =================================================================================================== File


# 读取文件
def read_file(path):
    with open(path, "r", encoding="utf-8") as file:
        return file.read()


# 写入文件
def write_file(path, data):
    with open(path, "w", encoding="utf-8") as json_file:
        json_file.write(data)
    return path


# 拷贝文件
def copy_file(source_file, target):
    # 获取源文件的文件名
    file_name = os.path.basename(source_file)
    if os.path.isdir(target):
        # 如果 target 是目录，拼接完整的目标文件路径
        target_file = os.path.join(target, file_name)
    else:
        target_file = target
    # 获取目标文件所在的目录
    target_dir = os.path.dirname(target_file)
    try:
        # 创建目标文件所在的目录
        os.makedirs(target_dir, exist_ok=True)
        # 拷贝源文件到目标文件
        shutil.copy2(source_file, target_file)
        # 将目标文件路径转换为绝对路径
        absolute_target_file = target_file
        logger.debug(f"The file {source_file} has been successfully copied to: {absolute_target_file}")
        return absolute_target_file
    except FileNotFoundError:
        logger.error(f"The source file {source_file} was not found.")
    except PermissionError:
        logger.error(f"You do not have sufficient permissions to copy the file to {target_file}.")
    except Exception as e:
        logger.error(f"An unknown error occurred while copying the file: {e}")
    return None


# 拷贝文件夹
def copy_folder(source_folder, target_folder):
    shutil.copytree(source_folder, target_folder, dirs_exist_ok=True)


# 写入特征向量
def write_vector_to_file(path, data):
    logger.info(f"Extracted {len(data)} feature vectors")
    logger.info(f"Extracted feature vectors: {data[:3]}...")  # Output the first 3 elements
    # 获取所在文件夹路径
    folder_path = os.path.dirname(path)
    # 根据路径生成输出的文件名,去掉扩展名
    base_name = os.path.splitext(os.path.basename(path))[0]
    # 生成新的.npy文件名
    output_filename = f"{base_name}.npy"
    # 确保文件保存到同一文件夹
    output_file_path = os.path.join(folder_path, output_filename)
    np.save(output_file_path, data)
    logger.info(f"Feature vectors have been saved to: {output_file_path}")
    return output_file_path


# 安全删除文件夹
def safe_delete_folder(path):
    if not path:
        logger.error("Invalid path: None or empty string")
        return

    # 确保路径是绝对路径
    path = os.path.abspath(path)

    # 判断路径是文件还是文件夹
    if os.path.isfile(path):
        folder_path = os.path.dirname(path)
    elif os.path.isdir(path):
        folder_path = path
    else:
        logger.warning("Path does not exist: {}", path)
        return

    # 防止删除系统根目录
    if folder_path in ["/", "C:\\", "C:/", os.path.expanduser("~")]:  # 避免误删用户主目录
        logger.error("Unsafe delete attempt blocked: {}", folder_path)
        return

    # 确保目录存在后再删除
    if os.path.exists(folder_path):
        try:
            shutil.rmtree(folder_path)
            logger.debug("Successfully deleted folder: {}", folder_path)
        except Exception as e:
            logger.error("Failed to delete folder: {}, error: {}", folder_path, e)
    else:
        logger.warning("Folder already deleted or does not exist: {}", folder_path)


# 安全删除
def safe_delete(file_path):
    try:
        if os.path.exists(file_path):
            os.remove(file_path)
            logger.debug(f"Successfully deleted file: {file_path}")
        else:
            logger.warning(f"File does not exist, skipping deletion: {file_path}")
    except Exception as e:
        logger.error(f"Failed to delete file: {file_path}, error: {e}")


# 临时目录
def tempdir(debug: bool = False):
    # 默认目录
    temp_dir_path = constant.DIR_TEMP
    # 调试模式
    if debug:
        temp_dir = tempfile.gettempdir()
        temp_dir_path = os.path.join(temp_dir, "CreatorBox")
    # 创建目录
    os.makedirs(temp_dir_path, exist_ok=True)
    return temp_dir_path


# 临时mp4文件
def temp_video_mp4():
    return os.path.join(tempfile.gettempdir(), next(tempfile._get_candidate_names()) + "_video.mp4")


# 零时文件处理目录
def temp_process_path(file_path, rebuild: bool = False):
    # 获取视频名称
    file_name = os.path.splitext(os.path.basename(file_path))[0]
    # 生成视频uid
    # file_uuid = str_to_md5_short(file_name)
    file_uuid = file_name
    # 创建零时目录（临时文件目录 + 获取视频名称）
    temp_path = constant.DIR_TEMP_.format(file_name)
    # 重新构建
    if rebuild:
        safe_delete_folder(temp_path)
    # 新建文件夹
    os.makedirs(temp_path, exist_ok=True)
    # 拷贝源文件
    temp_file_path = as_posix(os.path.join(temp_path, os.path.basename(file_path)))
    if os.path.exists(temp_file_path):
        logger.info("File already exists. {}", temp_file_path)
        return file_name, temp_file_path
    copy_file(file_path, temp_file_path)
    logger.info("{} -> {} file has been copied to: {}", file_uuid, file_name, temp_file_path)
    return file_name, temp_file_path


# 临时mp3文件
def temp_audio_mp4():
    return os.path.join(tempfile.gettempdir(), next(tempfile._get_candidate_names()) + "_audio.mp4")


# 文件已经超过 {n_seconds} 秒没有更新
def is_file_outdated(file_path, n_seconds):
    if not os.path.exists(file_path):
        logger.error("file not found: {}", file_path)
        return True
    # 获取文件最后修改时间（时间戳）
    last_modified_timestamp = os.path.getmtime(file_path)
    # 转换为 datetime 对象
    last_modified_time = datetime.fromtimestamp(last_modified_timestamp)
    now = datetime.now()
    # 计算时间差
    delta = now - last_modified_time
    # 返回是否超过 N 秒没有更新
    if delta.total_seconds() > n_seconds:
        logger.warning("file has not been updated for {} seconds.", n_seconds)
        return True
    else:
        logger.info("file has been updated within {} seconds.", n_seconds)
        return False


# 获取文件对于某个路径的相对位置
def get_relative_path(file_path: str, base_dir_name: str = "webapp") -> Path:
    """
    从 file_path 中提取相对于 base_dir_name 的相对路径。
    支持多种路径格式，如 /webapp/a/b/c、/a/b/c、D://d/webapp/a/b/c。
    """
    # 将路径转换为 Path 对象
    path = Path(file_path)

    # 遍历路径的每一部分，找到 base_dir_name 的位置
    parts = list(path.parts)
    try:
        # 找到 base_dir_name 的索引
        base_index = parts.index(base_dir_name)
        # 提取 base_dir_name 之后的部分
        relative_parts = parts[base_index + 1 :]
        # 拼接成相对路径
        return Path(*relative_parts)
    except ValueError:
        # 如果 base_dir_name 不在路径中，直接返回原始路径
        return path


# 获取指定文件夹下所有文件
def file_to_json(folder_path):
    #  返回结果
    result = {}

    # 遍历当前目录
    for entry in os.listdir(folder_path):
        full_path = os.path.join(folder_path, entry)

        if os.path.isfile(full_path):
            key = os.path.splitext(entry)[0]
            result[key] = full_path

    # 生成 JSON
    return result


# 统一转换为/
def as_posix(path):
    return Path(path).as_posix()


# =================================================================================================== Json


# 是否是json格式
def is_json(data):
    try:
        json.loads(data)  # 尝试将字符串解析为 JSON
        return True
    except ValueError:
        return False


# 加载json
def load_json(data):
    try:
        return json.loads(data)
    except ValueError:
        return None


# 加载json文件
def load_json_file(json_path):
    try:
        with open(json_path, "r", encoding="utf-8") as file:
            return json.load(file)
    except ValueError:
        return None


# 格式化json
def to_json(data):
    return json.dumps(data, separators=(",", ":"))


def to_json_pretty(data, indent=4, sort_keys=False):
    return json.dumps(data, ensure_ascii=False, indent=indent, sort_keys=sort_keys)


# =================================================================================================== Md5


def str_uuid():
    return str(uuid.uuid4()).replace("-", "")


def str_to_md5(str):
    # 创建一个md5对象
    md5_hash = hashlib.md5()
    # 更新md5对象内容
    md5_hash.update(str.encode("utf-8"))
    # 获取MD5的十六进制表示
    return md5_hash.hexdigest()


def str_to_md5_short(str, num: int = 8):
    return str_to_md5(str)[:num]


# 计算文件的 MD5 哈希值
def file_to_md5(file):
    # 创建一个md5对象
    md5_hash = hashlib.md5()
    for chunk in iter(lambda: file.read(4096), b""):
        md5_hash.update(chunk)
    # 获取MD5的十六进制表示
    return md5_hash.hexdigest()


# =================================================================================================== Time


# 格式化为 HH:MM:SS,SSS
def format_timedelta_to_srttime(timedelta_obj: timedelta = None):
    total_seconds = timedelta_obj.total_seconds()
    hours, rem = divmod(total_seconds, 3600)
    minutes, seconds = divmod(rem, 60)
    milliseconds = int(round((seconds - int(seconds)) * 1000))
    return f"{int(hours):02}:{int(minutes):02}:{int(seconds):02},{milliseconds:03}"


def format_ss_to_srttime(seconds):
    timedelta_obj = timedelta(seconds=seconds)
    return format_timedelta_to_srttime(timedelta_obj)


# SRT时间格式转换为秒数
def time_to_ss(time_str):
    # time_str 格式为 "00:00:00,133"
    time_parts = time_str.split(",")
    seconds_parts = time_parts[0].split(":")
    hours = int(seconds_parts[0])
    minutes = int(seconds_parts[1])
    seconds = int(seconds_parts[2])
    milliseconds = int(time_parts[1])
    return hours * 3600 + minutes * 60 + seconds + milliseconds / 1000


# SRT时间格式转换为秒数
def time_to_mss(time_str):
    h, m, s = time_str.split(":")
    seconds, ms = s.split(",")
    return int(h) * 3600000 + int(m) * 60000 + int(seconds) * 1000 + int(ms)


# =================================================================================================== Ffmpeg


# 加载音频文件
def load_audio(path, sr=None):
    try:
        y, sr = librosa.load(path, sr=sr)
        return y, sr
    except Exception as e:
        logger.error(f"Failed to load audio file: {e}")
        return None, None


# 加载音频文件
def from_audio(path):
    try:
        return AudioSegment.from_wav(path)
    except Exception as e:
        logger.error(f"Failed to load audio file: {e}")
        return None, None


# 写入音频文件
def write_audio(audio_list, path):
    combined = AudioSegment.empty()
    for audio in audio_list:
        combined += audio
    combined.export(path, format="wav")
    return path


# 切分音频文件
def cut_audio(audio, start, end, path):
    audio[start:end].export(path, format="wav")
    return path


# 是否音频
def is_audio(file_path):
    try:
        probe = ffmpeg.probe(file_path)
        streams = probe.get("streams", [])
        # has_video_stream = any(stream["codec_type"] == "video" for stream in streams)
        has_audio_stream = any(stream["codec_type"] == "audio" for stream in streams)
        if has_audio_stream:
            return True
        else:
            return False
    except ffmpeg.Error:
        return False


# 获取视频分辨率
def get_video_resolution(file_path):
    cap = cv2.VideoCapture(file_path)
    if not cap.isOpened():
        logger.error("open video error")
        return
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    cap.release()
    logger.info(f"Video Resolution: {width}x{height}")
    return width, height


# # 获取视缩略图
def get_video_thumbnail(video_path, thumbnail_path, time_sec=0, size=None):
    # 检查
    if not os.path.exists(video_path):
        logger.error("Video file does not exist: {}", video_path)
        return False

    # 打开
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        logger.error("Cannot open video file: {}", video_path)
        return False

    # 帧率
    fps = cap.get(cv2.CAP_PROP_FPS)
    # 总帧数
    total_frames = cap.get(cv2.CAP_PROP_FRAME_COUNT)
    duration = total_frames / fps if fps else 0

    logger.info("Video Duration: {:.2f} seconds, frame rate: {:.2f}, total frames: {}", duration, fps, int(total_frames))

    #  计算目标帧位置
    target_frame = int(time_sec * fps)
    if target_frame >= total_frames:
        logger.warning("Specified time exceeds video length, automatically capturing the last frame")
        target_frame = int(total_frames) - 1

    # 定位到目标帧
    cap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)

    success, frame = cap.read()
    if not success:
        logger.error("Cannot read frame at {} seconds", time_sec)
        cap.release()
        return False

    # 如果指定了缩略图大小，则调整尺寸
    if size:
        frame = cv2.resize(frame, size, interpolation=cv2.INTER_AREA)

    # 保存
    cv2.imwrite(thumbnail_path, frame)
    logger.info("Video Thumbnail saved: {}", thumbnail_path)

    cap.release()
    return thumbnail_path


# 播放声音
@system(Window)
def play_notification():
    sound_path = os.path.abspath("static/sound/notification.mp3")
    sound_path = sound_path.replace("\\", "/")  # 将反斜杠替换为正斜杠
    playsound(sound_path)


# 删除 ffmpeg 进程
def terminate_ffmpeg_process():
    for proc in psutil.process_iter(attrs=["pid", "name"]):
        if "ffmpeg" in proc.info["name"]:
            proc.terminate()


# =================================================================================================== 其他


# HEX 转 RGB
def hex_to_rgb(hex_color):
    # 去掉 "#" 符号
    hex_color = hex_color.lstrip("#")
    # 每两个字符转换成十进制数
    r = int(hex_color[0:2], 16)
    g = int(hex_color[2:4], 16)
    b = int(hex_color[4:6], 16)
    return (r, g, b)


# RGB 转 HEX
def rgb_to_hex(rgb_color):
    # 每个颜色值转换为两位的16进制，前面补零
    return "#{:02x}{:02x}{:02x}".format(rgb_color[0], rgb_color[1], rgb_color[2])


# 自动判断是否需要空格
def smart_join(text_list):
    if not text_list:
        return ""
    language = detect("".join(text_list))  # 识别语言
    if language in ["zh-cn", "zh-tw", "ja", "ko"]:  # 中文（简体）、中文（繁体）、日文、韩文不加空格
        return "".join(text_list)
    else:
        return " ".join(text_list)  # 其他语言加空格


# 语言标签解析
def parse_locale(locale):
    # 取前4位
    locale = locale[:5]
    # 解析语言标签
    target_tag = language_tags.tags.tag(locale)
    # 检查语言标签是否合法
    if not target_tag.valid:
        logger.error(f"Invalid language target tag: {locale}")
        raise ValueError(f"Invalid language tag: {locale}")
    # 获取语言代码
    language = target_tag.language.format
    region = target_tag.region.format
    return language, region


# 获取指定数组某个字段的对象
def get_list_item_by_field(list, field, value):
    for item in list:
        if item.get(field) == value:
            return item
    return None


# 过滤指定数组某个字段的对象
def find_closest_duration(data, target_duration: int = 5):
    """
    找出与目标时长（target_duration）最接近的片段

    :param data: 包含所有片段信息的列表
    :param target_duration: 目标时长，寻找与该时长最接近的片段
    :return: 与目标时长最接近的片段
    """
    closest_idx = None
    closest_segment = None
    closest_diff = float("inf")  # 初始差值设置为无穷大

    for idx, segment in enumerate(data):
        # 计算与目标时长的差值
        diff = abs(float(segment["duration"]) - target_duration)

        # 如果当前片段与目标时长的差值更小，更新 closest_segment
        if diff < closest_diff:
            closest_diff = diff
            closest_idx = idx
            closest_segment = segment

    return closest_idx, closest_segment


def find_closest_duration_per_speaker(data, target_duration: int = 5):
    """
    按照说话者（speaker）分组，并在每个分组内找到与目标时长最接近的片段

    :param data: 包含所有片段信息的列表
    :param target_duration: 目标时长，寻找与该时长最接近的片段
    :return: 一个字典，键为 speaker，值为该说话者分组中与目标时长最接近的片段
    """
    # 使用 defaultdict 存储按 speaker 分组的片段
    speaker_groups = defaultdict(list)

    # 按照 speaker 分组
    for segment in data:
        speaker_groups[segment["speaker"]].append(segment)

    closest_segments = {}

    # 对每个说话者分组，找出与目标时长最接近的片段
    for speaker, segments in speaker_groups.items():
        closest_segment = None
        closest_diff = float("inf")  # 初始差值设置为无穷大
        for segment in segments:
            # 计算与目标时长的差值
            diff = abs(float(segment["duration"]) - target_duration)

            # 如果当前片段与目标时长的差值更小，更新 closest_segment
            if diff < closest_diff:
                closest_diff = diff
                closest_segment = segment

        # 将每个说话者分组中最接近的片段加入到结果字典
        closest_segments[speaker] = closest_segment

    return closest_segments


# 判断是网络地址
def is_http(url):
    return url.startswith("http://") or url.startswith("https://")


# ===================================================================================================


def calculate_speed_and_gap(source_wps, target_wps):
    # 预定义加速因子范围
    MAX_SPEED_UP = 1.2
    MIN_SPEED_UP = 1.05
    # 最小间隔时间，单位秒。低于这个间隔时间就认为音频重叠了
    MIN_GAP_DURATION = 0.1

    # 计算 MIN_SPEED_UP（确保不会低于设定最小值）
    min_speed_up = min(max(target_wps / source_wps, MIN_SPEED_UP), MIN_SPEED_UP)

    # 计算 MAX_SPEED_UP，确保不会小于 MIN_SPEED_UP + 0.01
    max_speed_up = max(min((source_wps / target_wps) * MAX_SPEED_UP, MAX_SPEED_UP), max(target_wps / source_wps, MIN_SPEED_UP) + 0.01)

    logger.info("{} -> {}, {} - {}", source_wps, target_wps, min_speed_up, max_speed_up)
    return min_speed_up, max_speed_up, MIN_GAP_DURATION


if __name__ == "__main__":
    # print(env("HUGGINGFACEHUB_API_TOKEN"))
    # print(language("en-US-AvaMultilingualNeural"))
    # tempdir(True)
    # tempdir(False)
    # print(get_relative_path("temp\098f6bcd4621d373cade4e832627b4f6\test_zh_CN.mp4", "webapp"))
    # print(get_relative_path("webapp/temp\098f6bcd4621d373cade4e832627b4f6\test_zh_CN.mp4", "webapp"))
    # print(get_relative_path("D:\Projects\fast\fast-creator\creator-server\webapp\temp\098f6bcd4621d373cade4e832627b4f6\test_zh_CN.mp4", "webapp"))

    # print(file_to_json("webapp/temp/098f6bcd4621d373cade4e832627b4f6/zh-CN"))
    # print(str_uuid())
    # print(get_internal_ip())
    # print(get_external_ip())
    # calculate_speed_and_gap(3.8805648377708315, 8.7851676188423)
    # terminate_ffmpeg_process()
    play_notification()
    # print(smart_join(["而", "天", "腦", "降", "落", "的時候"]))

    print(find_closest_duration(load_json_file("webapp\\temp\\test7\\json\\test7_speaker.json"), 3))

    print(find_closest_duration_per_speaker(load_json_file("webapp\\temp\\test7\\json\\test7_speaker.json"), 5))
