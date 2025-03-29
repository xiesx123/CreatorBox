import os
import sys
import warnings

sys.path.insert(0, os.getcwd())
sys.path.insert(0, os.path.dirname(os.getcwd()))

import logging

from loguru import logger

from src.app import constant, webio

# 忽略警告
warnings.filterwarnings("ignore")

# 日志级别
level = constant.LEVEL

# 格式化
format = "<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green> | <level>{level:<3}</level> {thread:<3} <cyan>{file}:{line}</cyan> - {message}"
# format = "<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green> | <level>{level:<7}</level> | <yellow>{thread}</yellow> | <cyan>{file}:{function}:{line}</cyan> - <level>{message}</level>"

# 黑名单列表
BLACKLIST = ["loguru", "apscheduler.scheduler", "comtypes"]

import logging


class InterceptHandler(logging.Handler):
    def emit(self, record):
        # 遍历黑名单，检查 record.name 是否以黑名单中的项为前缀
        if any(record.name.startswith(blacklisted) for blacklisted in BLACKLIST):
            return
        # 获取原始 logging 的日志信息
        level = logger.level(record.levelname).name if record.levelname in logger._core.levels else record.levelno
        logger.opt(depth=6, exception=record.exc_info).log(level, record.getMessage())


class WebSocketLogHandler:

    def __init__(self, level):
        self.level = level
        self.format = format
        self.colorize = False

    def __call__(self, message):
        webio.run_coroutine_threadsafe_send_message("log", message)


class CBLogger:

    _instance = None

    def __new__(cls):
        if cls._instance is None:
            # 单利模式
            cls._instance = super(CBLogger, cls).__new__(cls)
            cls._instance._configure_logger()
            # 清空默认自带的日志处理器
            loggers = [logging.getLogger(name) for name in logging.root.manager.loggerDict]
            for log in loggers:
                log.handlers = []
            # loguru 接管 logging
            logging.basicConfig(handlers=[InterceptHandler()], level=0)
            # loguru 接管 print()
            # builtins.print = logger.info
            # 设置 comtypes 包的日志级别为 WARNING，屏蔽其 INFO 级别的日志
        return cls._instance

    def _configure_logger(self):
        self.logger = logger
        # 移除默认日志输出
        self.logger.remove()
        # 配置控制台输出格式
        self.logger.add(sys.stdout, level=level, format=format, colorize=True)
        # 配置文件输出并启用轮转
        self.logger.add(constant.DIR_LOG + "/creator_{time:YYYY-MM-DD}.log", rotation="10 MB", level=level, format=format, colorize=False)
        # 配置实时日志
        self.logger.add(WebSocketLogHandler(level=level), level=level, format=format)

    @staticmethod
    def log_retry(retry_state):
        logger.warning(f"Retrying {retry_state.attempt_number} time(s), {retry_state.fn.__name__} -> {retry_state.outcome.exception()}, waiting {retry_state.next_action.sleep} seconds before retrying.")


if __name__ == "__main__":
    # 日志设置
    CBLogger()
    print("message.{}", 11)
    logging.info("message %s", 22)
    # 通过日志输出一些消息
    logger.info("message.{}", 1)
    logger.debug("message.{}", 2)
    logger.error("message.{}", 3)
    logger.success("message.{}", 4)
    logger.warning("message.{}", 5)
    logger.critical("message.{}", 6)
