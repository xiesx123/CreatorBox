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


class Launcher:

    @staticmethod
    def builder(project, **kwargs) -> LauncherProvider:
        if project.lower() == "iopaint":
            return IOPaintLauncher(project, **kwargs)
        if project.lower() == "stable_diffusion_webui":
            return StableDiffusionLauncher(project, **kwargs)
        if project.lower() == "cosyvoice":
            return CosyVoiceLauncher(project, **kwargs)
        if project.lower() == "index_tts":
            return IndexTTSLauncher(project, **kwargs)
        if project.lower() == "gpt_sovits":
            return GptSovitsLauncher(project, **kwargs)
        if project.lower() == "voxcpm":
            return VoxCPMLauncher(project, **kwargs)
        else:
            raise RuntimeError(message=f"not support {project} extension")


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
