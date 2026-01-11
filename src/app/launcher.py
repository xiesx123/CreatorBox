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
        """获取项目启动器映射表"""
        return {
            "iopaint": IOPaintLauncher,
            "stable_diffusion_webui": StableDiffusionLauncher,
            "cosyvoice": CosyVoiceLauncher,
            "index_tts": IndexTTSLauncher,
            "gpt_sovits": GptSovitsLauncher,
            "voxcpm": VoxCPMLauncher,
        }

    # 构建项目启动器实例
    @staticmethod
    def builder(project, **kwargs) -> LauncherProvider:
        """
        构建项目启动器实例

        Args:
            project: 项目名称
            **kwargs: 启动器参数

        Returns:
            LauncherProvider: 启动器实例

        Raises:
            RuntimeError: 当项目类型不支持时抛出异常
        """
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
    project = "iopaint"
    python = "3.10"
    kwargs = {
        "index": "https://mirrors.aliyun.com/pypi/simple",
        "pyv": python,
        "host": "127.0.0.1",
        "port": 9000,
        "share": False,
    }
    # 创建启动器
    launcher = Launcher.builder(project, **kwargs)
    # 执行流程
    launcher.create()
    launcher.install()
    launcher.start().wait()
