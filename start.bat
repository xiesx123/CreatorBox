@echo off
chcp 65001 >nul

:: Check if the CREATORBOX_HOME environment variable is defined in the current CMD session.
:: If it is not defined, retrieve the latest value from the user's environment variables in the registry.
if not defined CREATORBOX_HOME (
    for /f "tokens=2*" %%A in ('reg query "HKCU\Environment" /v CREATORBOX_HOME 2^>nul') do set "CREATORBOX_HOME=%%B"
)

:: By default, components under the installation directory are used, you can also customize
::---------------------------------------------------------------------------------------------
:: Aria2   (e.g.D:\Program Files\CreatorBox\aria2)
set ARIA2_HOME=%CREATORBOX_HOME%\aria2
:: FFmpeg   (e.g.D:\Program Files\CreatorBox\ffmpeg)
set FFMPEG_HOME=%CREATORBOX_HOME%\ffmpeg
:: Git      (e.g.D:\Program Files\CreatorBox\git)
set GIT_HOME=%CREATORBOX_HOME%\git
:: uv   (e.g.D:\Program Files\CreatorBox\uv)
set UV_HOME=%CREATORBOX_HOME%\uv
@REM set UV_HOME="D:\Projects\uv"
::--------------------------------------------------------------------------------------------

:: Set Environment
set PATH=;%CREATORBOX_HOME%;%ARIA2_HOME%;%FFMPEG_HOME%;%GIT_HOME%\cmd;%UV_HOME%;"C:\Windows\system32";
echo %PATH%

REM Execute script
set SCRIPT_CMD=uv run 
set SCRIPT_PATH=cli.py
set SCRIPT_ARGS=start -h 0.0.0.0 -p 8000
if "%~1"=="--debug" (
    set SCRIPT_ARGS=%SCRIPT_ARGS% --debug
)

REM Run authentication command (uncomment and replace <EMAIL> and <PASSWORD> with actual values if needed)
@REM %SCRIPT_CMD% %SCRIPT_PATH% auth -a login -e <EMAIL> -p <PASSWORD>

REM Run the Python script
%SCRIPT_CMD% %SCRIPT_PATH% %SCRIPT_ARGS%

pause