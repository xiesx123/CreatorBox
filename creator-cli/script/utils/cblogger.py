import os
os.environ['TF_CPP_MIN_LOG_LEVEL']='2'
os.environ['LOKY_MAX_CPU_COUNT']='4'
import sys,warnings
warnings.filterwarnings('ignore')
from loguru import logger
class CBLogger:
	_instance=None
	def __new__(A):
		if A._instance is None:A._instance=super(CBLogger,A).__new__(A);A._instance._configure_logger()
		return A._instance
	def _configure_logger(A):A.logger=logger;A.logger.remove();A.logger.add(sys.stdout,format='<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level}</level> | {file}:{line} | {message}',level='INFO',colorize=True)
if __name__=='__main__':logger.info('info message.{}',1);logger.debug('debug message.{}',11);logger.error('error message.{}',12);logger.success('success message.{}',13);logger.warning('warning message.{}',14);logger.critical('critical message.{}',15)