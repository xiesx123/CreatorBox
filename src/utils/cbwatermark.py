# coding=utf-8
import os
import sys

sys.path.insert(0, os.getcwd())
sys.path.insert(0, os.path.dirname(os.getcwd()))

from loguru import logger
from PIL import Image, ImageDraw, ImageFont


# 将十六进制颜色代码转换为 RGBA
def hex_to_rgb(hex_color, alpha=255):
    """
    将十六进制颜色代码转换为 RGB 或 RGBA 格式。

    参数:
        hex_color (str): 十六进制颜色代码，如 "FFFFFF" 或 "#FFFFFF"。
        alpha (int): 透明度，范围为 0（完全透明）到 255（完全不透明）。

    返回:
        tuple: RGB 或 RGBA 格式的颜色值。
    """
    hex_color = hex_color.lstrip("#")  # 去掉 "#" 前缀
    if len(hex_color) == 6:
        r = int(hex_color[0:2], 16)
        g = int(hex_color[2:4], 16)
        b = int(hex_color[4:6], 16)
        return (r, g, b, alpha)  # 返回 RGBA
    else:
        raise ValueError("十六进制颜色代码必须为 6 位，例如 'FFFFFF' 或 '#FFFFFF'。")


# 生成透明背景的水印图像并保存为 PNG 文件
def create_watermark(
    width=300,
    height=120,
    text="CreatorBox",
    text_color="FFFFFF",
    alpha=128,
    font_size=50,
    font_path="arial.ttf",
    output_path="watermark.png",
):
    """
    生成透明背景的水印图像并保存为 PNG 文件。

    参数:
        width (int): 图像宽度。
        height (int): 图像高度。
        text (str): 水印文本。
        text_color (str): 文本颜色，格式为十六进制代码（如 "FFFFFF" 或 "#FFFFFF"），默认为白色。
        alpha (int): 文本透明度，范围为 0（完全透明）到 255（完全不透明），默认为 128。
        font_size (int): 字体大小，默认为 50。
        font_path (str): 字体文件路径，默认为 "arial.ttf"。
        output_path (str): 输出文件路径，默认为 "watermark.png"。
    """
    # 创建透明背景图像
    watermark = Image.new("RGBA", (width, height), (255, 255, 255, 0))
    draw = ImageDraw.Draw(watermark)

    # 加载字体
    try:
        font = ImageFont.truetype(font_path, font_size)
    except IOError:
        logger.error("Font file '{}' not found. Please provide a valid font file path.", font_path)

    # 将十六进制颜色代码转换为 RGBA
    try:
        rgba_color = hex_to_rgb(text_color, alpha)
    except ValueError as e:
        logger.error("Invalid color value: {}", e)

    # 计算文本大小
    text_bbox = font.getbbox(text)  # 获取文本的边界框
    text_width = text_bbox[2] - text_bbox[0]  # 计算文本宽度
    text_height = text_bbox[3] - text_bbox[1]  # 计算文本高度

    # 计算文本位置（居中）
    position = ((width - text_width) // 2, (height - text_height) // 2)

    # 添加水印文本
    draw.text(position, text, font=font, fill=rgba_color)

    # 保存为透明 PNG 图像
    watermark.save(output_path)
    logger.info("Watermark saved to: {}", output_path)
    return output_path


# 示例调用
if __name__ == "__main__":
    path = create_watermark(
        width=300,
        height=120,
        text="CreatorBox",
        text_color="FFFFFF",  # 十六进制颜色代码
        alpha=128,  # 透明度
        font_size=50,
        font_path="arial.ttf",  # 确保字体文件存在
        output_path="static/images/watermark.png",
    )
    logger.info("{}", path)
