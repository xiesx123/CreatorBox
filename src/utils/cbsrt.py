# coding=utf-8
import os
import sys

sys.path.insert(0, os.getcwd())
sys.path.insert(0, os.path.dirname(os.getcwd()))

import traceback
from datetime import timedelta

import srt
from fastapi import APIRouter
from loguru import logger

from src.app import constant
from src.router.exception import CreatorException
from src.router.request import RequestSrt
from src.router.response import ResponseModel
from src.utils import cbutils

# 创建APIRouter实例
router = APIRouter()


# 加载字幕
def load_srt(srt_path):
    segments_list = []
    if srt_path is not None:
        # 有字幕文件
        srt_data = cbutils.read_file(srt_path)
        subtitles = srt.parse(srt_data)
        for subtitle in subtitles:
            segments_list.append(
                {
                    "start": cbutils.format_timedelta_to_srttime(subtitle.start),
                    "end": cbutils.format_timedelta_to_srttime(subtitle.end),
                    "duration": round(subtitle.end.total_seconds() - subtitle.start.total_seconds(), 3),
                    "text": subtitle.content,  # 原始文本
                }
            )
    logger.info(f"Segments info total segments: {len(segments_list)}")
    return segments_list


# 生成字幕
def generate_srt(json_path, field="text", suffix: str = ""):
    # 主文件名
    master = constant.get_master_name(json_path)
    # 输出文件
    srt_path = constant.dubbing_srt(master, suffix)
    # 读取 JSON 文件
    json_list = cbutils.load_json_file(json_path)
    # 创建 SRT 字幕列表
    subtitles = []
    # 遍历每个字幕段，生成 SRT 字幕格式
    for idx, item in enumerate(json_list):
        subtitle = srt.Subtitle(
            index=idx + 1,
            start=timedelta(milliseconds=item["start"]),
            end=timedelta(milliseconds=item["end"]),
            content=item.get(field, ""),
        )
        subtitles.append(subtitle)
    # 将字幕列表写入 SRT 文件
    cbutils.write_file(srt_path, srt.compose(subtitles) + "\n")
    logger.info("SRT file and saved to: {}", srt_path)
    return srt_path


# ====================================================== api ======================================================


@router.post("/generate", response_model=ResponseModel)
def generate_api(req: RequestSrt):
    try:
        result = generate_srt(req.file, req.field, req.prefix)
        return ResponseModel.success(data={"path": result})
    except Exception as e:
        traceback.print_exc()
        logger.error(f"Error: {str(e)}")
        raise CreatorException(message=str(e))
