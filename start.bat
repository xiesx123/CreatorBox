@echo off
chcp 65001 >nul

:: Check if the CREATORBOX_HOME environment variable is defined in the current CMD session.
:: If it is not defined, retrieve the latest value from the user's environment variables in the registry.
if not defined CREATORBOX_HOME (
    for /f "tokens=2*" %%A in ('reg query "HKCU\Environment" /v CREATORBOX_HOME 2^>nul') do set "CREATORBOX_HOME=%%B"
)

:: By default, components under the installation directory are used, you can also customize
::---------------------------------------------------------------------------------------------
:: Git      (e.g.D:\Program Files\CreatorBox\git)
set GIT_HOME=%CREATORBOX_HOME%\git
:: FFmpeg   (e.g.D:\Program Files\CreatorBox\ffmpeg)
set FFMPEG_HOME=%CREATORBOX_HOME%\ffmpeg

::--------------------------------------------------------------------------------------------

:: Set Environment
set PATH=;%CREATORBOX_HOME%;%PYTHON_HOME%;%PYTHON_HOME%\Scripts;%FFMPEG_HOME%;%GIT_HOME%\cmd;%CONDA_HOME%;%CONDA_HOME%\condabin;%UV_HOME%;"C:\Windows\system32";
echo %PATH%

REM Execute script
set PYTHON_CMD=uv run 
set SCRIPT_PATH=cli.py
set SCRIPT_ARGS=start -h 0.0.0.0 -p 8000
if "%~1"=="--debug" (
    set SCRIPT_ARGS=%SCRIPT_ARGS% --debug
)

REM Run authentication command (uncomment and replace <EMAIL> and <PASSWORD> with actual values if needed)
@REM %PYTHON_CMD% %SCRIPT_PATH% auth -a login -e <EMAIL> -p <PASSWORD>

REM Run the Python script
%PYTHON_CMD% %SCRIPT_PATH% %SCRIPT_ARGS%

pause