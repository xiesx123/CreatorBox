@echo off
chcp 65001 >nul

::---------------------------------------------------------------------------------------------
:: Uv       (e.g.D:\Program Files\CreatorBox\uv)
set UV_HOME=%CREATORBOX_HOME%\uv
:: Git      (e.g.D:\Program Files\CreatorBox\git)
set GIT_HOME=%CREATORBOX_HOME%\git
:: Mpv      (e.g.D:\Program Files\CreatorBox\mpv)
set MPV_HOME=%CREATORBOX_HOME%\mpv
:: FFmpeg   (e.g.D:\Program Files\CreatorBox\ffmpeg)
set FFMPEG_HOME=%CREATORBOX_HOME%\ffmpeg
:: Aria2
set ARIA2_HOME=%CREATORBOX_HOME%\aria2
::--------------------------------------------------------------------------------------------

:: Set Environment
set PATH=;%CREATORBOX_HOME%;%UV_HOME%;%GIT_HOME%\cmd;%MPV_HOME%;%FFMPEG_HOME%;%ARIA2_HOME%;"C:\Windows\system32";
echo %PATH%

REM Execute script
set SCRIPT_CMD=uv run --extra gpu 
set SCRIPT_PATH=cli.py
set SCRIPT_ARGS=start -h 0.0.0.0 -p 8000
if "%~1"=="--debug" (
    set SCRIPT_ARGS=%SCRIPT_ARGS% --debug
)

REM Run the Python script
%SCRIPT_CMD% %SCRIPT_PATH% %SCRIPT_ARGS%

pause