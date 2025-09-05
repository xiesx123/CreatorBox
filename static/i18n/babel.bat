@echo off
REM 设置 UTF-8 编码防止中文乱码
chcp 65001 > nul

echo 正在提取翻译模板...
pybabel extract --omit-header --sort-output -F static/i18n/babel.cfg -o static/i18n/messages.pot . 

echo 正在更新已有翻译文件...
pybabel update --omit-header -i static/i18n/messages.pot -d static/i18n 

echo 正在编译 .mo 翻译文件...
pybabel compile -d static/i18n --use-fuzzy --statistics

echo 正在生成 Babel 类...
python static/i18n/babel.py

pause