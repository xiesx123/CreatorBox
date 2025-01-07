_B='zh-CN-YunjianNeural'
_A=None
import os
os.environ['TF_CPP_MIN_LOG_LEVEL']='2'
os.environ['LOKY_MAX_CPU_COUNT']='4'
import argparse,asyncio
from loguru import logger
from support import whisper_
from support import spleeter_
from utils import cbdownload,cbenv,cblogger,cbutils
import cbaudio,cbmovie,cbsrt,cbtrans,cbtts
TRANS='_trans'
WHISPER_MODEL='base.en'
def audio_transcribe_and_translate(audio_path,target_language='zh',srt_path=_A):
	D=srt_path;C=audio_path;E=os.path.splitext(os.path.basename(C))[0];A=os.path.join(os.path.dirname(C),f"{E}.json")
	if os.path.exists(A):logger.info(f"Transcription data file already exists: {A}");return os.path.abspath(A)
	B=[]
	if D is not _A:B=cbsrt.load_srt(D)
	else:B=whisper_.transcribe_audio(C,WHISPER_MODEL)
	cbtrans.translate_text_batch(B,target_language);F=' '.join([A['text']for A in B]);logger.info(f"Original transcription: {F}");G=' '.join([A['text_trans']for A in B]);logger.info(f"Translated transcription: {G}");H=cbutils.to_json_pretty(B);cbutils.write_file(A,H);logger.info(f"Transcription data complete and saved to: {A}");return os.path.abspath(A)
def translate_video(video_path,srt_path,target_language='zh-cn',target_voice=_B,audio_vocals_volume=1.,audio_vocals_bgm_volume=1.,output='video_trans.mp4'):B=srt_path;I,C=cbutils.temp_video_process_path(video_path);D=cbmovie.extract_audio(C);J,F=spleeter_.separate_audio(D);A=audio_transcribe_and_translate(D,target_language,B);B,G=cbsrt.generate_srt(A,TRANS);A=asyncio.run(cbtts.generate_trans_segment(A,target_voice));H=cbaudio.generate_trans_audio(A,TRANS);E=cbmovie.merge_video_audio_srt(C,H,audio_vocals_volume,F,audio_vocals_bgm_volume,G,TRANS);cbutils.copy_file(E,output);return E
def main():
	D='video';E='C:/Users/Xiesx/Desktop/test/test.mp4';I=_A;F='zh-cn';G=_B;H=True;B=argparse.ArgumentParser(description='Video Translation');B.add_argument('--url','-u',help='Video URL');B.add_argument('--input','-i',default='video.mp4',help='Input path of the video to be translated');B.add_argument('--output','-o',default=D,help='Output path of the translated video');B.add_argument('--language','-l',default=F,help='Subtitle translation language');B.add_argument('--voice','-v',default=G,help='Voice for subtitle dubbing');B.add_argument('--voice_volume','-vv',type=float,default=.8,help='Volume of the dubbed voice');B.add_argument('--background_volume','-bv',type=float,default=.2,help='Volume of the background music');B.add_argument('--model','-m',default=WHISPER_MODEL,help='Transcription model');B.add_argument('--debug','-d',action='store_true',default=H,help='Enable debug mode');A=B.parse_args();C=A.input
	if A.debug:logger.info('Debug mode enabled');C=E
	if not A.input and A.url:logger.info(f"Downloading video from URL: {A.url}");C=cbdownload.ytdlp_download(A.url,D);logger.info(f"Video downloaded to: {C}")
	if not os.path.exists(C):logger.error(f"Error: Video file {C} does not exist!");return
	translate_video(C,_A,A.language,A.voice,A.voice_volume,A.background_volume,A.output)
if __name__=='__main__':main()