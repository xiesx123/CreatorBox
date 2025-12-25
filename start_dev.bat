@echo off
chcp 65001 >nul

::---------------------------------------------------------------------------------------------
:: Aria2
set ARIA2_HOME="D:\Projects\fast\fast-creator\setup\aria2"
:: FFmpeg   (e.g.D:\Program Files\CreatorBox\ffmpeg)
set FFMPEG_HOME="D:\Develop Files\Ffmpeg\ffmpeg\bin"
:: Git      (e.g.D:\Program Files\CreatorBox\git)
set GIT_HOME="D:\Develop Files\Git"
:: Uv       (e.g.D:\Program Files\CreatorBox\uv)
set UV_HOME="D:\Projects\uv"
::--------------------------------------------------------------------------------------------

:: Set Environment
set PATH=;%CREATORBOX_HOME%;%ARIA2_HOME%;%FFMPEG_HOME%;%GIT_HOME%\cmd;%UV_HOME%;"C:\Windows\system32";
echo %PATH%

REM Execute script
set SCRIPT_CMD=uv run 
set SCRIPT_PATH=cli.py
set SCRIPT_ARGS=start -h 127.0.0.1 -p 8000
if "%~1"=="--debug" (
    set SCRIPT_ARGS=%SCRIPT_ARGS% --debug
)

REM Run the Python script
%SCRIPT_CMD% %SCRIPT_PATH% %SCRIPT_ARGS%

pause