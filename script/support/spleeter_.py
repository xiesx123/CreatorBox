import os,sys
sys.path.insert(0,os.getcwd())
from utils import cbutils
import shutil
from loguru import logger
from spleeter.separator import Separator
def load_spleeter_model(input,output,model='2stems'):A=output;B=Separator(f"spleeter:{model}");B.separate_to_file(input,A,None,0,600,'wav','128k','{filename}_{instrument}.{codec}',True);logger.info('Audio separate complete and saved to. {}',A);return A
def separate_audio(input):
	C=os.path.dirname(input);D=os.path.splitext(os.path.basename(input))[0];A=os.path.join(C,f"{D}_vocals.wav");B=os.path.join(C,f"{D}_vocals_no.wav")
	if os.path.exists(A)and os.path.exists(B):logger.info('Audio separate file already exists. ({},{})',A,B);return os.path.abspath(A),os.path.abspath(B)
	load_spleeter_model(input,C);E=os.path.join(C,f"{D}_vocals.wav");F=os.path.join(C,f"{D}_accompaniment.wav")
	if os.path.exists(E):shutil.move(E,A)
	else:logger.error(f"Vocals file not found: {E}")
	if os.path.exists(F):shutil.move(F,B)
	else:logger.error(f"Instruments file not found: {F}")
	if os.path.exists(A)and os.path.exists(B):logger.info('Audio separate complete and saved to. ({},{})',A,B)
	return os.path.abspath(A),os.path.abspath(B)
if __name__=='__main__':test_input='C:/Users/Xiesx/Desktop/test/test.wav';test_output='C:/Users/Xiesx/Desktop/test';separate_audio(test_input)