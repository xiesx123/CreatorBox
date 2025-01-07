import os,sys
sys.path.insert(0,os.getcwd())
from utils import cbenv,cbutils
import shutil,torch,subprocess,utils.cbdownload as download
from loguru import logger
env=cbenv.SingletonCBEnv.get_instance()
SPLEETER_MODEL='https://github.com/xiesx123/CreatorBox/releases/download/1.0.4/baseline.pth'
def load_remover_model():
	C='models';D='cuda'if torch.cuda.is_available()else'cpu';A=os.path.dirname(os.path.abspath(__file__))
	if not env.modeldir:A=os.path.join(A,C)
	else:A=os.path.join(env.modeldir,C)
	B='baseline.pth';E=os.path.abspath(os.path.join(A,B));os.makedirs(A,exist_ok=True);logger.info('Loading baseline model {} on device {} on dir {}',(B,D,A))
	if not os.path.exists(E):download.request_download(SPLEETER_MODEL,A,B);logger.info('Model downloaded from the internet and saved to the specified folder')
def vocal_remover(audio_path):
	E=audio_path;C=os.path.dirname(E);D=os.path.splitext(os.path.basename(E))[0];A=os.path.join(C,f"{D}_vocals.wav");B=os.path.join(C,f"{D}_vocals_no.wav")
	if os.path.exists(A)and os.path.exists(B):logger.info('Audio remover file already exists. (%s,%s}'%(A,B));return os.path.abspath(A),os.path.abspath(B)
	load_remover_model();H=os.path.join(os.path.dirname(os.path.abspath(__file__)),'support/vocal_spleeter/inference.py');I=['python',os.path.abspath(H),'--input',E,'--output_dir',C];subprocess.run(I);F=os.path.join(C,f"{D}_vocals.wav");G=os.path.join(C,f"{D}_instruments.wav")
	if os.path.exists(F):shutil.move(F,A)
	else:logger.error(f"Vocals file not found: {F}")
	if os.path.exists(G):shutil.move(G,B)
	else:logger.error(f"Instruments file not found: {G}")
	if os.path.exists(A)and os.path.exists(B):logger.info('Audio remover complete and saved to. ({},{})',A,B)
	return os.path.abspath(A),os.path.abspath(B)
if __name__=='__main__':test_input='C:/Users/Xiesx/Desktop/test/test.wav';load_remover_model();vocal_remover(test_input)