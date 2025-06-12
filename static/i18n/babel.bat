@echo off
REM 设置 UTF-8 编码防止中文乱码
chcp 65001 > nul

echo 正在提取翻译模板...
pybabel extract -F static/i18n/babel.cfg -o static/i18n/messages.pot .

echo 正在更新已有翻译文件...
pybabel update -i static/i18n/messages.pot -d static/i18n

echo 正在编译 .mo 翻译文件...
pybabel compile -d static/i18n

@REM REM 是否继续编译
@REM set /p INPUT=是否编译？输入Y执行，其他跳过： 

@REM if /I "%INPUT%"=="Y" (
@REM     echo 正在编译 .mo 翻译文件...
@REM     pybabel compile -d static/i18n
@REM ) else (
@REM     echo 跳过编译步骤
@REM )

pause