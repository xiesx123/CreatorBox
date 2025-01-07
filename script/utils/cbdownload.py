_A=True
import os,sys
sys.path.insert(0,os.getcwd())
import yt_dlp,requests
from tqdm import tqdm
from loguru import logger
from utils import cbenv
env=cbenv.SingletonCBEnv.get_instance()
def ytdlp_download(url,save_folder):
	B=save_folder
	try:
		os.makedirs(B,exist_ok=_A)
		with yt_dlp.YoutubeDL({'quiet':_A})as A:
			C=A.extract_info(url,download=False);D=A.prepare_filename(C);E=os.path.join(B,os.path.basename(D))
			if os.path.exists(E):print(f"File already exists: {E}");return os.path.abspath(E)
		F={'outtmpl':os.path.join(B,'%(title)s.%(ext)s'),'format':'best','postprocessors':[{'key':'FFmpegVideoConvertor','preferedformat':'mp4'}]}
		with yt_dlp.YoutubeDL(F)as A:C=A.extract_info(url,download=_A);D=A.prepare_filename(C)
		return os.path.abspath(D)
	except Exception as G:print(f"Error occurred: {G}");return
def request_download(url,save_folder,filename=None):
	D=save_folder;A=filename
	if not A:A=url.split('/')[-1]
	os.makedirs(D,exist_ok=_A);C=os.path.join(D,A);B=requests.get(url,stream=_A)
	if B.status_code==200:
		E=int(B.headers.get('content-length',0))
		with open(C,'wb')as F:
			for G in tqdm(B.iter_content(1024),total=E//1024,unit='KB',desc=A):F.write(G)
		logger.info(f"File has been saved to: {C}")
	else:logger.info(f"Download failed, HTTP status code: {B.status_code}")
	return os.path.abspath(C)
if __name__=='__main__':video_url='https://www.youtube.com/shorts/qtWqHIx8Z-o';save_folder='./video';ytdlp_download(video_url,save_folder);download_file_url='https://github.com/xiesx123/CreatorBox/releases/download/1.0.4/baseline.pth';save_folder='D:/Projects/fast/fast-creator/creator-server/script/support/vocal_spleeter/models'