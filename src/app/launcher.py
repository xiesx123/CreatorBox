import os
import sys

sys.path.insert(0, os.getcwd())

from src.utils.cblauncher import (
    CosyVoiceLauncher,
    GptSovitsLauncher,
    IndexTTSLauncher,
    IOPaintLauncher,
    LauncherProvider,
    StableDiffusionLauncher,
    VoxCPMLauncher,
)


# 启动器类
class Launcher:

    # 获取项目启动器
    @staticmethod
    def _get_launcher_map():
        return {
            "iopaint": IOPaintLauncher,
            "stable_diffusion_webui": StableDiffusionLauncher,
            "voxcpm": VoxCPMLauncher,
            "index_tts": IndexTTSLauncher,
            "cosyvoice": CosyVoiceLauncher,
            "gpt_sovits": GptSovitsLauncher,
        }

    # 构建启动器实例
    @staticmethod
    def builder(project, **kwargs) -> LauncherProvider:
        project_key = project.lower()
        launcher_map = Launcher._get_launcher_map()
        if project_key in launcher_map:
            try:
                launcher_class = launcher_map[project_key]
                return launcher_class(project, **kwargs)
            except Exception as e:
                raise RuntimeError(f"Error occurred while creating {project} launcher: {str(e)}")
        else:
            available_projects = list(launcher_map.keys())
            raise RuntimeError(f"Unsupported project type: {project}. Available projects: {', '.join(available_projects)}")


if __name__ == "__main__":
    DEFAULT_INDEX = "https://pypi.org/simple"
    DEFAULT_INDEX_TSINGHUA = "https://pypi.tuna.tsinghua.edu.cn/simple"
    PROJECT = "iopaint"
    # 启动参数
    kwargs = {"index": DEFAULT_INDEX_TSINGHUA, "pyv": "3.11", "host": "127.0.0.1", "port": 9000, "share": False}
    # 创建启动器
    launcher = Launcher.builder(PROJECT, **kwargs)
    # 执行流程
    launcher.create()
    launcher.install()
    launcher.start().wait()
