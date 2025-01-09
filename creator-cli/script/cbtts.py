_O='Output path for synthesized speech'
_N='--path'
_M='Pitch for speech synthesis'
_L='--pitch'
_K='Speech rate for synthesis'
_J='--rate'
_I='Volume for speech synthesis'
_H='--volume'
_G='Voice for speech synthesis'
_F='--voice'
_E='tts.wav'
_D='+0Hz'
_C='zh-CN-YunjianNeural'
_B='+0%'
_A=True
import os,sys
sys.path.insert(0,os.getcwd())
import asyncclick as click,anyio,json,edge_tts
from loguru import logger
from pydub import AudioSegment
from tqdm import tqdm
from utils import cbdownload,cblogger,cbutils
async def text_tts(text,voice=_C,volume=_B,rate=_B,pitch=_D,tts_path=_E):C='wav';A=tts_path;D=edge_tts.Communicate(text,voice=voice,volume=volume,rate=rate);B=A.replace(C,'mp3');await D.save(B);E=AudioSegment.from_mp3(B);E.export(A,format=C);logger.info(f"TTS file exported at: {A}");os.remove(B)
async def segments_tts(json_path,voice=_C,volume=_B,rate=_B,pitch=_D,tts_path='tts'):
	A=json_path;B=os.path.join(os.path.dirname(A),tts_path)
	if os.path.exists(B):logger.info(f"Updated transcription data file already exists: {B}");return os.path.abspath(A)
	os.makedirs(B,exist_ok=_A);F=cbutils.load_json(A);logger.info(f"Loaded transcription data from: {A}");D=[]
	for C in F:G=C['idx'];H=C['text_trans'];E=os.path.join(B,f"idx_{G}.wav");await text_tts(H,voice,volume,rate,pitch,E);C['audio']=os.path.abspath(E);D.append(C)
	I=json.dumps(D,ensure_ascii=False,indent=4);cbutils.write_file(A,I);logger.info(f"Updated transcription data saved to: {A}");return os.path.abspath(A)
@click.group()
def cli():'Text-to-speech synthesis tool'
@cli.command()
@click.option('--text','-t',type=str,default='Hello',show_default=_A,required=_A,help='Text for speech synthesis')
@click.option(_F,type=str,default=_C,show_default=_A,help=_G)
@click.option(_H,type=str,default=_B,show_default=_A,help=_I)
@click.option(_J,type=str,default=_B,show_default=_A,help=_K)
@click.option(_L,type=str,default=_D,show_default=_A,help=_M)
@click.option(_N,type=click.Path(),default=_E,show_default=_A,help=_O)
async def text(text,voice,volume,rate,pitch,path):'Text-to-speech synthesis';await text_tts(text,voice,volume,rate,pitch,path);click.echo(f"Processing complete! Output file: {path}")
@cli.command()
@click.option('--file','-f',type=click.Path(exists=_A),required=_A,help='JSON data file path')
@click.option(_F,type=str,default=_C,show_default=_A,help=_G)
@click.option(_H,type=str,default=_B,show_default=_A,help=_I)
@click.option(_J,type=str,default=_B,show_default=_A,help=_K)
@click.option(_L,type=str,default=_D,show_default=_A,help=_M)
@click.option(_N,type=click.Path(),default=_E,show_default=_A,help=_O)
async def segments(file,voice,volume,rate,pitch,path):'Batch audio synthesis';await segments_tts(file,voice,volume,rate,pitch,path);click.echo(f"Processing complete! Output file: {path}")
if __name__=='__main__':anyio.run(cli())