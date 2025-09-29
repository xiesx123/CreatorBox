@echo off
REM Set the conda environment name
set CONDA_ENV_NAME=creatorbox

REM Set the path of the Python script to run
set SCRIPT_PATH=cli.py 
set SCRIPT_ARGS=start -h 0.0.0.0 -p 8000

REM Initialize conda (for Anaconda/Miniconda)
CALL conda activate %CONDA_ENV_NAME%

REM Run the Python script
REM python %SCRIPT_PATH% auth -a login -e <EMAIL> -p <PASSWORD>
python %SCRIPT_PATH% %SCRIPT_ARGS%

REM Deactivate the conda environment
CALL conda deactivate

pause