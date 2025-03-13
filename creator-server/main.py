# coding=utf-8
import os
import sys

from fastapi import FastAPI, HTTPException, Response, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from loguru import logger
from pydantic import ValidationError

from src.app import constant, socket, task
from src.app.api import router as app_router
from src.app.loader import router as loader_router
from src.app.webui import router as web_router
from src.cbvideo import router as video_router
from src.router.exception import CreatorException, GlobleExceptionHandler
from src.support.trans_ import router as trans_router
from src.support.tts_ import router as tts_router
from src.utils import cbutils

sys.path.insert(0, os.getcwd())
sys.path.insert(0, os.path.dirname(os.getcwd()))

# 环境设置
servers = []
is_debug = cbutils.is_debug()
local_url = f"http://{cbutils.get_internal_ip()}:{cbutils.get_port()}"
if is_debug:
    servers.append({"url": f"{local_url}", "description": "Local Server"})
else:
    servers.append({"url": "https://toucan-real-informally.ngrok-free.app", "description": "Release Server"})

# 应用设置
app = FastAPI(
    debug=is_debug,
    title="CreatorBox",
    summary="CreatorBox Restful API Documentation",
    description="🚀🎬轻量、灵活、易上手的创作者工具箱，构建全自动化视频剪辑/混剪流水线；",
    version="1.0.5",
    contact={
        "name": "xiesx123",
        "url": "https://github.com/xiesx123/CreatorBox",
        "email": "xiesx123@gmail.com",
    },
    servers=servers,
)

# 保存设置
constant.app = app

# 静态目录
app.mount("/static", StaticFiles(directory="static"), name="static")

# 跨域设置
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost", "http://localhost:8000", "http://127.0.0.1:8000", local_url], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

# 路由注册
app.include_router(web_router, prefix="", tags=["webui"], include_in_schema=False)
app.include_router(app_router, prefix="/app", tags=["app"])
app.include_router(loader_router, prefix="/loader", tags=["loader"])
app.include_router(trans_router, prefix="/trans", tags=["trans"])
app.include_router(tts_router, prefix="/tts", tags=["tts"])
app.include_router(video_router, prefix="/video", tags=["video"])

# 异常处理
app.add_exception_handler(CreatorException, GlobleExceptionHandler.creator_handler)
app.add_exception_handler(HTTPException, GlobleExceptionHandler.http_handler)
app.add_exception_handler(ValidationError, GlobleExceptionHandler.validation_handler)


# 启动时
@app.on_event("startup")
def startup():
    # 启动任务调度器
    task.start_scheduler()
    # 获取内网ip
    if is_debug:
        logger.warning("CreatorBox http://{}:{}/docs Debug Run Success", cbutils.get_internal_ip(), cbutils.get_port())
    else:
        logger.info("CreatorBox http://{}:{} Run Success", cbutils.get_internal_ip(), cbutils.get_port())


# 关闭时
@app.on_event("shutdown")
def shutdown():
    # 停止任务调度器
    task.stop_scheduler()


# favicon.ico
@app.get("/favicon.ico", include_in_schema=False)
def favicon():
    try:
        # 打开 favicon.ico 文件
        with open("static/images/favicon.ico", "rb") as f:
            favicon = f.read()
        # 返回图标文件，并设置响应头
        return Response(content=favicon, media_type="image/x-icon")
    except FileNotFoundError:
        return {"error": "Favicon not found"}


# 事件通知
@app.websocket("/event")
async def websocket_endpoint(websocket: WebSocket):
    # 接受 WebSocket 连接
    await websocket.accept()
    # 添加 WebSocket 客户端到列表中
    socket.wsc.append(websocket)
    try:
        while True:
            # 接收客户端消息
            data = await websocket.receive_text()
            # 收到客户端消息
            print(f"Received message: {data}")
    except WebSocketDisconnect:
        # 断开连接时移除客户端
        socket.wsc.remove(websocket)
