_A='utf-8'
import os,sys
sys.path.insert(0,os.getcwd())
import json,shutil,hashlib,librosa,tempfile,datetime,numpy as np
from loguru import logger
from utils import cbenv
from utils.cblogger import CBLogger
env=cbenv.SingletonCBEnv.get_instance()
CBLogger()
def copy_file(source_file,target_file):A=target_file;os.makedirs(A,exist_ok=True);shutil.copy(source_file,A);logger.info(f"copy file has been copied to: {A}");return A
def load_json(json_path):
	with open(json_path,'r',encoding=_A)as A:return json.load(A)
def load_audio(path,sr=None):
	try:A,sr=librosa.load(path,sr=sr);return A,sr
	except Exception as B:print(f"Failed to load audio file: {B}");return None,None
def read_file(path):
	with open(path,'r',encoding=_A)as A:return A.read()
def write_file(path,data):
	with open(path,'w',encoding=_A)as A:A.write(data)
	return os.path.abspath(path)
def write_vector_to_file(path,data):A=data;logger.info(f"Extracted {len(A)} feature vectors");logger.info(f"Extracted feature vectors: {A[:3]}...");C=os.path.dirname(path);D=os.path.splitext(os.path.basename(path))[0];E=f"{D}.npy";B=os.path.join(C,E);np.save(B,A);logger.info(f"Feature vectors have been saved to: {B}");return os.path.abspath(B)
def safe_delete(file_path):
	A=file_path
	try:
		if os.path.exists(A):os.remove(A);logger.info(f"Successfully deleted file: {A}")
		else:logger.info(f"File does not exist, skipping deletion: {A}")
	except Exception as B:logger.info(f"Failed to delete file: {A}, error: {B}")
def tempdir():
	B='temp';C=tempfile.gettempdir();A=os.path.join(C,env.app_name)
	if not env.tempdir:A=os.path.join(A,B)
	else:A=os.path.join(env.tempdir,B)
	if not os.path.exists(A):os.makedirs(A)
	logger.info(A);return os.path.abspath(A)
def temp_video_mp4():return os.path.join(tempfile.gettempdir(),next(tempfile._get_candidate_names())+'_video.mp4')
def temp_video_process_path(video_file_path):
	C=video_file_path;F=tempdir();B=os.path.splitext(os.path.basename(C))[0];D=str_to_md5(B);E=os.path.join(F,D);os.makedirs(E,exist_ok=True);A=os.path.join(E,os.path.basename(C))
	if os.path.exists(A):logger.info('Video file already exists. {}',A);return B,os.path.abspath(A)
	shutil.copy(C,A);logger.info('{} -> Video {} file has been copied to: {}',D,B,A);return B,A
def temp_audio_mp4():return os.path.join(tempfile.gettempdir(),next(tempfile._get_candidate_names())+'_audio.mp4')
def to_json(data):json.dumps(data,separators=(',',':'))
def to_json_pretty(data):return json.dumps(data,ensure_ascii=False,indent=4)
def str_to_md5(str):A=hashlib.md5();A.update(str.encode(_A));return A.hexdigest()
def format_timedelta_to_srttime(timedelta_obj):B=timedelta_obj.total_seconds();C,D=divmod(B,3600);E,A=divmod(D,60);F=int(round((A-int(A))*1000));return f"{int(C):02}:{int(E):02}:{int(A):02},{F:03}"
def format_seconds_to_srttime(seconds):A=datetime.timedelta(seconds=seconds);return format_timedelta_to_srttime(A)
def time_to_seconds(time_str):B=time_str.split(',');A=B[0].split(':');C=int(A[0]);D=int(A[1]);E=int(A[2]);F=int(B[1]);return C*3600+D*60+E+F/1000
def time_to_milliseconds(time_str):A,B,C=time_str.split(':');D,E=C.split(',');return int(A)*3600000+int(B)*60000+int(D)*1000+int(E)
if __name__=='__main__':logger.info(env.app_name)