_D='tts.wav'
_C='+0Hz'
_B='zh-CN-YunjianNeural'
_A='+0%'
import os,sys
sys.path.insert(0,os.getcwd())
import json,argparse,asyncio,edge_tts
from loguru import logger
from pydub import AudioSegment
from tqdm import tqdm
from utils import cbdownload,cbenv,cblogger,cbutils
async def text_to_tts(text,voice=_B,volume=_A,rate=_A,pitch=_C,tts_path=_D):A='wav';communicate=edge_tts.Communicate(text,voice=voice,volume=volume,rate=rate);audio_mp3_temp_path=tts_path.replace(A,'mp3');await communicate.save(audio_mp3_temp_path);audio=AudioSegment.from_mp3(audio_mp3_temp_path);audio.export(tts_path,format=A);logger.info(f"TTS file exported at: {tts_path}");os.remove(audio_mp3_temp_path)
async def generate_trans_segment(json_path,voice=_B,volume=_A,rate=_A,pitch=_C,tts_path=_D):
	tts_directory=os.path.join(os.path.dirname(json_path),'tts')
	if os.path.exists(tts_directory):logger.info(f"Updated transcription data file already exists: {tts_directory}");return os.path.abspath(json_path)
	os.makedirs(tts_directory,exist_ok=True);transcription_data=cbutils.load_json(json_path);logger.info(f"Loaded transcription data from: {json_path}");updated_transcription=[]
	for segment in transcription_data:idx=segment['idx'];text_trans=segment['text_trans'];audio_file_path=os.path.join(tts_directory,f"idx_{idx}.wav");await text_to_tts(text_trans,voice,volume,rate,pitch,audio_file_path);segment['audio']=os.path.abspath(audio_file_path);updated_transcription.append(segment)
	json_data=json.dumps(updated_transcription,ensure_ascii=False,indent=4);cbutils.write_file(json_path,json_data);logger.info(f"Updated transcription data saved to: {json_path}");return os.path.abspath(json_path)
async def main():
	B='generate_trans_segment';A='text_to_tts';test_text='xxx';test_file_json='C:/Users/Xiesx/Desktop/test/test.json';parser=argparse.ArgumentParser(description='Text-to-Speech and Audio Segment Generation Tool');parser.add_argument('--method','-m',type=str,default=A,help='Method to call');parser.add_argument('--text','-t',type=str,default=test_text,help='Text');parser.add_argument('--file','-f',type=str,default=test_file_json,help='Path to JSON data file');parser.add_argument('--voice',type=str,default=_B,help='Voice for speech synthesis');parser.add_argument('--volume',type=str,default=_A,help='Volume for speech synthesis');parser.add_argument('--rate',type=str,default=_A,help='Rate for speech synthesis');parser.add_argument('--pitch',type=str,default=_C,help='Pitch for speech synthesis');parser.add_argument('--tts_path',type=str,default=_D,help='Output path for speech synthesis');parser.add_argument('--debug',action='store_true',help='Enable debug mode');args=parser.parse_args()
	if args.debug:
		logger.info('Debug mode enabled')
		if args.method==A and args.text:args.text=test_text
		elif args.method==B and args.file:args.file=test_file_json
	try:
		method=globals()[args.method]
		if args.method==A and args.text:await method(args.text,args.voice,args.volume,args.rate,args.pitch,args.tts_path)
		elif args.method==B and args.file:await method(args.file,args.voice,args.volume,args.rate,args.pitch,args.tts_path)
	except KeyError:logger.error(f"Method {args.method} does not exist")
if __name__=='__main__':asyncio.run(main())