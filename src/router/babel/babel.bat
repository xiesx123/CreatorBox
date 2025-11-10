@echo off
REM 设置 UTF-8 编码防止中文乱码
chcp 65001 > nul

echo 正在提取翻译模板...
pybabel extract --omit-header --sort-output -F src/router/babel/babel.cfg -o src/router/babel/messages.pot . 

echo 正在更新已有翻译文件...
pybabel update --omit-header -i src/router/babel/messages.pot -d src/router/babel 

echo 正在编译 .mo 翻译文件...
pybabel compile -d src/router/babel --use-fuzzy --statistics

pause