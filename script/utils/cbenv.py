_A=None
import os,sys
sys.path.insert(0,os.getcwd())
from pydantic_settings import BaseSettings
from typing import Optional
from dotenv import load_dotenv
from typing import final
from loguru import logger
load_dotenv()
class CBEnv(BaseSettings):
	app_name:str='CreatorBox';active:str='local';tempdir:Optional[str]=_A;modeldir:Optional[str]=_A;debug:bool=False
	class Config:env_file='.env';env_file_encoding='utf-8'
class SingletonCBEnv:
	_instance=_A
	@classmethod
	def get_instance(A):
		if A._instance is _A:A._instance=CBEnv()
		return A._instance
if __name__=='__main__':config=SingletonCBEnv.get_instance();logger.info(config);logger.info('App Name: {}',config.app_name);logger.info('App Active: {}',config.active);logger.info('App Tempdri: {}',config.tempdir);logger.info('App Modeldir: {}',config.modeldir);logger.info('Debug Mode: {}',config.debug)