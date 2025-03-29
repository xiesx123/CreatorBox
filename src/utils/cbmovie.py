# coding=utf-8
import os
import sys

sys.path.insert(0, os.getcwd())
sys.path.insert(0, os.path.dirname(os.getcwd()))

from loguru import logger
from moviepy.editor import (
    AudioFileClip,
    CompositeAudioClip,
    CompositeVideoClip,
    ImageClip,
    VideoFileClip,
    concatenate_videoclips,
)
from moviepy.video.fx.all import speedx

from src.app import constant, webio
from src.utils import cbutils, cbwatermark


# 压缩视频
def compress_video(
    video_path,
    resolution=None,
    bitrate=None,
    fps=None,
    no_audio=None,
    prefix="compress",
):
    # 输出到文件
    video_file_name = os.path.splitext(os.path.basename(video_path))[0]
    video_file_name_suffix = os.path.splitext(video_path)[1]
    video_compress_path = os.path.join(os.path.dirname(video_path), video_file_name + prefix + video_file_name_suffix)
    logger.info(f"Compressing video saved to: {video_compress_path}")
    try:
        # 载入视频文件
        clip = VideoFileClip(video_path)
        # 调整分辨率
        if resolution:
            clip = clip.resize(resolution)
        # 设置帧率，使用输入视频的帧率作为默认值
        if fps:
            clip = clip.set_fps(fps)
        else:
            fps = clip.fps
        # 去除音频
        if no_audio:
            clip = clip.without_audio()
        # 设置比特率
        clip.write_videofile(
            video_compress_path,
            codec="libx264",
            audio_codec="aac",
            bitrate=bitrate,
            temp_audiofile=cbutils.temp_audio_mp4(),
        )
        return video_compress_path
    except Exception as e:
        logger.error(f"Error processing video: {e}")
        return None


# 合并视频（视频）
def merge_videos(
    video_json_path,
    video_volume,
    prefix="0",
):
    # 输出到文件
    video_file_name = os.path.splitext(os.path.basename(video_json_path))[0]
    new_video_path = os.path.join(os.path.dirname(video_json_path), video_file_name + prefix + ".mp4")

    # 读取输入的 JSON 文件
    input_video_files = cbutils.load_json_file(video_json_path)
    logger.info(f"Loaded video json data from: {video_json_path}")
    clips = []
    max_width, max_height = 0, 0

    # 处理视频文件
    for file in input_video_files:
        if not os.path.isfile(file):
            logger.error(f"Error: File {file} does not exist.")
            continue
        try:
            clip = VideoFileClip(file)
            clips.append(clip)
            max_width = max(max_width, clip.size[0])
            max_height = max(max_height, clip.size[1])
            logger.info(f"Loaded {file} with size {clip.size}")
        except Exception as e:
            logger.error(f"Error: Failed to load {file}. Error: {e}")
            continue

    if not clips:
        logger.warning("No valid video files to merge.")
        return None

    # 将所有视频调整到统一的最大尺寸
    clips = [clip.resize(newsize=(max_width, max_height)) for clip in clips]

    # 合并视频
    merged_video = concatenate_videoclips(clips, method="compose")
    video_duration = merged_video.duration
    # 设置音量
    merged_video = merged_video.set_audio(merged_video.audio.volumex(video_volume))
    # 写入文件
    merged_video.write_videofile(new_video_path, codec="libx264", audio_codec="aac", temp_audiofile=cbutils.temp_audio_mp4())
    logger.info("Merged video saved to {} , {} seconds", new_video_path, video_duration)
    return new_video_path


# 合并视频（视频、音频、字幕）
def merge_video_audio_srt(
    video_path,
    video_volume: float = 0.5,
    voice_path: str = None,
    voice_volume: float = 1.0,
    background_path: str = None,
    background_volume: float = 0.8,
    srt_path: str = None,
    suffix: str = "",
):

    # 主文件名
    master = constant.get_master_name(video_path)
    # 视频后缀
    video_file_suffix = os.path.splitext(video_path)[1]
    # 输出文件
    video_file_path = constant.dubbing_video(master, suffix, video_file_suffix)
    # 默认速度
    video_speed = 1.0

    # 默认音轨
    audio = []

    # 加载原视频
    video = VideoFileClip(video_path)

    # 如果存在则加载"视频音轨"
    if video_volume > 0:
        audio.append(video.audio)

    # 如果存在则加载"人声音轨"
    if voice_path:
        audio_vocals = AudioFileClip(voice_path)
        audio_vocals = audio_vocals.volumex(voice_volume)
        audio.append(audio_vocals)
        # 设置视频的时速
        if audio_vocals.duration > 0:
            video_speed = video.duration / audio_vocals.duration
            video = video.fx(speedx, video_speed)

    # 如果存在则加载"背景音轨"
    if background_path:
        audio_no_vocals = AudioFileClip(background_path)
        audio_no_vocals = audio_no_vocals.volumex(background_volume)
        audio.append(audio_no_vocals)

    # 设置视频的音频
    if len(audio) > 0:
        video = video.set_audio(CompositeAudioClip(audio))

    # 加载字幕（如果提供了字幕路径）
    # if srt_path:
    # subtitles = SubtitlesClip(srt_path, encoding='utf-8')
    # subtitles = subtitles.on_color(color=(0, 0, 0), col_opacity=0)              # 设置字体、大小、颜色等| 背景透明度等
    # subtitles = subtitles.set_position('bottom').set_duration(video.duration)

    # 添加图像水印
    path = cbwatermark.create_watermark(font_path="static/font/Roboto-VariableFont_wdth,wght.ttf", output_path="static/images/watermark.png")
    watermark_image = ImageClip(path)  # 加载水印图像
    watermark_image = watermark_image.set_duration(video.duration)  # 设置水印持续时间
    watermark_image = watermark_image.resize(height=50)  # 调整水印大小
    watermark_image = watermark_image.set_position(("right", "bottom"))  # 设置水印位置

    # 合成视频 = 视频 + 水印
    final_video = CompositeVideoClip([video, watermark_image])
    # 输出视频
    final_video.write_videofile(video_file_path, codec="libx264", audio_codec="aac", temp_audiofile=cbutils.temp_audio_mp4())
    # 释放资源
    video.close()
    for audio_clip in audio:
        audio_clip.close()
    watermark_image.close()
    # 删除多余进程
    cbutils.terminate_ffmpeg_process()
    logger.info(f"Merge video saved to: {video_file_path}")
    # 播放声音
    # cbutils.play_notification()
    # 事件通知
    webio.run_coroutine_threadsafe_send_message("video", video_file_path)
    return video_file_path


# ======================================================

if __name__ == "__main__":
    compress_video("test.mp4")
    # merge_videos('test.json',1.0)
    # merge_video_audio_srt("C:/Users/Xiesx/Desktop/test/test.mp4")
