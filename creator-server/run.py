import argparse

import uvicorn

if __name__ == "__main__":
    # 定义
    parser = argparse.ArgumentParser(description="Run CreatorBox Server with FastApi")
    parser.add_argument("--host", type=str, default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8000)
    parser.add_argument("--reload", action="store_true")
    # 解析
    args = parser.parse_args()
    # 启动
    uvicorn.run("src.main:app", host=args.host, port=args.port, reload=args.reload)
