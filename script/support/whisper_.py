_B='[{:.2f}s -> {:.2f}s] {}'
_A='base.en'
import os,sys
sys.path.insert(0,os.getcwd())
from utils import cbutils
import torch
from faster_whisper import WhisperModel
from loguru import logger
def list_available_models():return['tiny','tiny.en','base',_A,'small','small.en','medium','medium.en','large','large-v1','large-v2','large-v3','distil-large-v2','distil-medium.en','distil-small.en','distil-large-v3']
def load_whisper_model(model=_A):A=model;logger.info('List Available Models : {}',list_available_models());B='cuda'if torch.cuda.is_available()else'cpu';logger.info('Loading Whisper model {} on device {}',A,B);C=WhisperModel(A,device=B);return C
def transcribe_audio(input,model=_A):
	B=[];C=load_whisper_model(model);D,G=C.transcribe(input,word_timestamps=True)
	for(E,A)in enumerate(D):logger.info(_B,A.start,A.end,A.text);F=round(A.end-A.start,3);B.append({'idx':E,'start':cbutils.format_seconds_to_srttime(A.start),'end':cbutils.format_seconds_to_srttime(A.end),'duration':F,'text':A.text,'translated_text':''})
	return B
def transcribe_audio_test(input,model=_A):
	D=load_whisper_model(model);E,C=D.transcribe(audio=input,word_timestamps=True);logger.info('Detected language {} with probability ,f',(C.language,C.language_probability))
	for A in E:
		logger.info(_B,A.start,A.end,A.text)
		for B in A.words:logger.info('======[{:.2f}s -> {:.2f}s] {}',B.start,B.end,B.word)
if __name__=='__main__':test_input='C:/Users/Xiesx/Desktop/test/test.wav';load_whisper_model();transcribe_audio(test_input);transcribe_audio_test(test_input)