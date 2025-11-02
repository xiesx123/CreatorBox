@echo off
chcp 65001 >nul
type resource\banner.txt
echo.

set CREATORBOX=creatorbox

::---------------------------------------------------------------------------------------------
:: Components
:: 获取选择组件参数
set "COMP_LIST=%~1"
:: 默认安装 Basic
if "%COMP_LIST%"=="" set "COMP_LIST=Basic"
echo Selected Components: %COMP_LIST%

::---------------------------------------------------------------------------------------------
:: CreatorBox
set PROJECT_HOME=%~dp0%CREATORBOX%
:: Aria2
set ARIA2_HOME=%~dp0aria2
:: FFmpeg
set FFMPEG_HOME=%~dp0ffmpeg
:: Git
set GIT_HOME=%~dp0git
:: Uv
set UV_HOME=%~dp0uv
echo.
:: 环境变量
for %%I in ("%PROJECT_HOME%\..") do set "CREATORBOX_HOME=%%~fI" & setx CREATORBOX_HOME "%%~fI"
echo.
set PATH=;%CREATORBOX_HOME%;%ARIA2_HOME%;%FFMPEG_HOME%;%GIT_HOME%\cmd;%UV_HOME%;"C:\Windows\system32";
echo %PATH%
::--------------------------------------------------------------------------------------------

echo.
echo ========================================== Git ==========================================
:: 查看版本 2.51.0.windows.2
git --version
:: 克隆/更新
if exist "%CREATORBOX%" (
    echo 项目 "%CREATORBOX%" 已存在，开始更新...
    pushd "%CREATORBOX%"
    :: 恢复到远程最新状态
    git reset --hard origin/develop
    :: 拉取远程最新版本
    git pull
    popd
) else (
    echo 项目 "%CREATORBOX%" 不存在，开始克隆...
    git clone https://github.com/xiesx123/CreatorBox.git %CREATORBOX%
)


echo.
echo ========================================== Aria2 ========================================
:: 查看版本 aria2 version 1.37.0
aria2c --version | findstr /R "^aria2"


echo.
echo ========================================== FFmpeg ========================================
:: 查看版本 ffmpeg version 8.0-essentials_build-www.gyan.dev Copyright (c) 2000-2025 the FFmpeg developers
ffmpeg -version | findstr /R "^ffmpeg"
ffprobe -version | findstr /R "^ffprobe"


echo.
echo ========================================== Uv ========================================
:: uv 0.9.5 (d5f39331a 2025-10-21)
uv --version
echo.

echo ⚙️ 正在设置用户环境变量 ...
setx UV_INSTALL_DIR "%UV_HOME%"
setx UV_CACHE_DIR "%UV_HOME%\cache"
setx UV_PYTHON_BIN_DIR "%UV_HOME%"
setx UV_PYTHON_INSTALL_DIR "%UV_HOME%\python"
setx UV_TOOL_BIN_DIR "%UV_HOME%"
setx UV_TOOL_DIR "%UV_HOME%\tool"
setx UV_DEFAULT_INDEX "https://pypi.tuna.tsinghua.edu.cn/simple"
echo ✅ 基础环境变量设置完成
echo.

echo ➕ 正在将 UV_INSTALL_DIR 添加到 PATH
for /f "tokens=2*" %%A in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path 2^>nul') do set "OLD_PATH=%%B"
echo 原始 PATH 长度: %OLD_PATH:~0,60%...
echo %OLD_PATH% | find /i "%UV_INSTALL_DIR%" >nul
if %errorlevel%==0 (
    echo ⚠️ PATH 已包含 %UV_INSTALL_DIR%，跳过添加
) else (
    setx PATH "%OLD_PATH%;%UV_INSTALL_DIR%" /M
    echo ✅ 已将 %UV_INSTALL_DIR% 添加到 PATH
)
echo.

echo 📋 可安装的 Python 版本
"%UV_INSTALL_DIR%\uv.exe" python list

echo.
echo 🐍 正在安装 Python
"%UV_INSTALL_DIR%\uv.exe" python install 3.10 --force
"%UV_INSTALL_DIR%\uv.exe" python install 3.11.11 --force

if %errorlevel% neq 0 (
    echo ⚠️ Python 安装过程中出现问题，请检查网络或缓存设置
) else (
    echo ✅ Python 安装完成
)

echo.
echo ============================================ CreatorBox ==================================
setlocal enabledelayedexpansion
pushd %CREATORBOX%
for %%A in (%COMP_LIST:,= %) do (
    set "COMP_%%A=1"
)
:: 只是远程仓库拉最新版本，通过界面安装，启动
:: Iopaint
if defined COMP_Iopaint (
    git submodule update --init --remote --depth=1 extensions/iopaint
)
:: StableDiffusion
if defined COMP_StableDiffusion (
    git submodule update --init --remote --depth=1 extensions/stable-diffusion-webui
)
:: CosyVoice
if defined COMP_CosyVoice (
    git submodule update --init --remote --depth=1 extensions/cosyvoice
)
:: IndexTTS
if defined COMP_IndexTTS (
    git submodule update --init --remote --depth=1 extensions/index-tts
)
:: Basic
if defined COMP_Basic (
    uv sync --all-extras
)
popd
endlocal

echo.
echo -------------------------------------
echo ⚠️ 所有设置已完成，按任意键关闭当前窗口
echo -------------------------------------

pause