@echo off
chcp 65001 >nul

REM environment list
REM echo %Path%

REM Set the conda environment name
set CONDA_ENV_NAME=creatorbox

REM Set the path of the Python script to run
set SCRIPT_PATH=cli.py 
set SCRIPT_ARGS=start -h 0.0.0.0 -p 8000
 
REM Initialize conda (for Anaconda/Miniconda)
CALL conda activate %CONDA_ENV_NAME%

REM Run authentication command (uncomment and replace <EMAIL> and <PASSWORD> with actual values if needed)
REM python %SCRIPT_PATH% auth -a login -e <EMAIL> -p <PASSWORD>

REM Run the Python script
python %SCRIPT_PATH% %SCRIPT_ARGS%

REM Deactivate the conda environment
CALL conda deactivate

pause