import os
import sys

sys.path.insert(0, os.getcwd())
sys.path.insert(0, os.path.dirname(os.getcwd()))
import subprocess
from pathlib import Path

from gradio_bottombar import BottomBar
from loguru import logger

import gradio as gr
from src.app import const
from src.app.prefs import INSTANCES as prefs
from src.gradio.tools.toast import Toast
from src.utils import cbruntime, cbutils


def dashboard_left_sidebar(app: gr.Blocks):

    # ============================= 布局 =============================

    with gr.Sidebar(position="left", width=300):
        version = const.APP_VERSION
        git_hash = const.GIT_INFO.get("hash", "unknown")
        # logo
        gr.HTML(
            f"""
                <div style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    font-weight: 600;
                    gap: 12px;
                ">
                    <img src="../static/images/favicon.ico" style="width:20%;min-width:80px;border-radius:12px;cursor:pointer;" alt="CreatorBox logo" />
                    <span>
                        <a href="{const.APP_GIRHUB}" target="_blank" style="text-decoration: none; color: inherit; cursor: pointer;">
                            CreatorBox
                        </a>
                    </span>
                    <span style="font-size: 14px; color: #888;">
                        {version} • <span style="color:#aaa;">{git_hash}</span>
                    </span>
                </div>
            """
        )

        # 主題
        dark_mode = gr.Button("外观", icon=Path("static/images/icon_dark.png"), elem_id="dark_mode")

        # 操作
        plugin_btn = gr.Button("组件", link="../plugins", icon=Path("static/images/icon_plugins.png"))
        setting_btn = gr.Button("设置", link="../settings", icon=Path("static/images/icon_setting.png"))
        with gr.Row():
            update_btn = gr.Button("更新", min_width=1, scale=1, icon=Path("static/images/icon_update.png"))
            reboot_btn = gr.Button("重启", min_width=1, scale=1, icon=Path("static/images/icon_reboot.png"))

        # 打賞
        gr.HTML(
            f"""
            <a href="https://ko-fi.com/xiesx123" target="_blank">
                <img alt="Support me on Ko-fi" src="../static/images/icon_kofi.png" />
            </a>
            """
        )

    # ============================= 监听 =============================

    # 重启服务
    @gr.on(reboot_btn.click, show_api=False)
    def reboot_server():
        try:
            checker = cbruntime.check_python()
            if not checker.get_version():
                logger.error("python is not available. please install python first.")
                return
            Toast.success("重启服务，请稍后...", duration=3)
            cbutils.reboot(checker.find_tool())
        except Exception as e:
            logger.error(f"重启服务失败: {e}")
            Toast.error(message=f"{e}", duration=3)

    # 检查更新
    @gr.on(update_btn.click, show_api=False)
    def update_server():
        try:
            checker = cbruntime.check_git()
            if not checker.get_version():
                logger.error("git is not available. please install git first.")
                return
            Toast.success("检查更新，请稍后...")
            logger.info("📥 Pulling latest changes from remote...")
            result = subprocess.run(["git", "reset", "--hard", "origin/master"], capture_output=True, text=True, encoding="utf-8")
            output = result.stdout.strip() + "\n" + result.stderr.strip()
            logger.info(output)
            Toast.success(output, duration=3)
        except Exception as e:
            logger.error(f"检查更新失败: {e}")
            Toast.error(message=f"{e}", duration=3)


def dashboard_bottom_sidebar(app: gr.Blocks):

    # ============================= 布局 =============================
    with BottomBar(open=False, width="60%", height=56, bring_to_front=False, rounded_borders=True) as bottom_bar:
        with gr.Row():
            gr.Markdown(value="[![GitHub Stars](https://img.shields.io/github/stars/xiesx123/CreatorBox?logo=github&style=flat&label=Stars&color=0078D7)](https://github.com/xiesx123/CreatorBox/stargazers)")
            gr.Markdown(value="[![VitePress](https://img.shields.io/badge/VitePress-Doc-3E63DD?logo=markdown)](https://xiesx123.github.io/CreatorBox)")
            gr.Markdown(value="[![Swagger](https://img.shields.io/badge/Swagger-Api-06988A?logo=swagger)](../docs)")
            gr.Markdown(value="[![Discord](https://img.shields.io/discord/1380024079871905883?logo=discord&logoColor=white&color=%44CC11&label=Discord)](https://discord.gg/kt6JWax3P6)")
            gr.Markdown(value="[![Kaggle](https://img.shields.io/badge/Kaggle-Launch-20BEFF?logo=kaggle)](https://www.kaggle.com/code/xiesx123)")
            gr.Markdown(value="[![Colab](https://img.shields.io/badge/Colab-Launch-yellow?logo=googlecolab)](https://colab.research.google.com/drive/1VFN9991PEg2mRWWwdKhAdAmQyut7Wfu5?usp=sharing)")
            gr.Markdown(value="[![GitHub Downloads](https://img.shields.io/github/downloads/xiesx123/CreatorBox/total?logo=github&label=Downloads&color=0078D7)](https://github.com/xiesx123/CreatorBox/releases)")


def bottom_side_bar2(app: gr.Blocks):

    # 配置
    cfg = prefs.get()

    # ============================= 布局 =============================

    with BottomBar(open=False, height=120, bring_to_front=True, rounded_borders=True) as bottom_bar:
        with gr.Row():
            gr.Markdown(f"v{const.APP_VERSION}.{const.GIT_INFO.get('hash', 'unknown')}")
        with gr.Row():
            reboot_btn = gr.Button("重启", variant="huggingface")
            update_btn = gr.Button("更新", variant="huggingface")
