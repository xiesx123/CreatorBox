@echo off
chcp 65001 >nul

REM Installation directory
for %%I in ("%~dp0..") do set PARENT_DIR=%%~fI

REM Conda   Python 3.11.11
set CONDA_ENV=creatorbox
REM Builtin Python 3.11.9
set PYTHON_CMD="%PARENT_DIR%\python\python.exe"
REM Custom  Python 3.11.xx
@REM set PYTHON_CMD="D:\miniconda3\envs\creatorbox\python.exe"

REM Execute script
set SCRIPT_PATH=cli.py
set SCRIPT_ARGS=start -h 0.0.0.0 -p 8000

REM Activate environment
where conda >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    call conda activate %CONDA_ENV%
    if %ERRORLEVEL% EQU 0 (
        echo ✅ Conda environment %CONDA_ENV% activated
        set PYTHON_CMD=python
    )
)

REM Run authentication command (uncomment and replace <EMAIL> and <PASSWORD> with actual values if needed)
REM %PYTHON_CMD% %SCRIPT_PATH% auth -a login -e <EMAIL> -p <PASSWORD>

REM Run the Python script
%PYTHON_CMD% %SCRIPT_PATH% %SCRIPT_ARGS%

exit