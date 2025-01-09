_I='Enable debug mode'
_H='--debug'
_G='--background-volume'
_F='--input'
_E='zh-CN-YunjianNeural'
_D='video'
_C=False
_B=None
_A=True
import os,sys
sys.path.insert(0,os.getcwd())
import asyncclick as click,anyio,cbaudio,utils.cbmovie as cbmovie,cbsrt,cbtrans,cbtts
from loguru import logger
from utils import cbdownload,cblogger,cbutils
from support import spleeter_
def merge_video(video_json_path,video_volume,audio_background_path,audio_background_volume=1.,duration=_B,debug=_C):
	D=video_volume;B=debug;A=duration;C='_climax'
	if A:C='_climax_'+A
	J,F=cbutils.temp_process_path(video_json_path,B);K,G=cbutils.temp_process_path(audio_background_path,B);H=cbmovie.merge_videos(F,D);I=cbaudio.climax_audio(G,A,C);E=cbmovie.merge_video_audio_srt(H,D,_B,_B,I,audio_background_volume,_B,C)
	if B:cbutils.copy_file(E,_D)
	return E
async def translate_video(video_path,srt_path,target_language='zh-CN',target_voice=_E,audio_vocals_volume=.8,audio_background_volume=.2,model=str,debug=_C):
	E=debug;D=target_language;C=srt_path;B='_trans_'+D;L,F=cbutils.temp_process_path(video_path,E);G=cbmovie.extract_audio(F);M,I=spleeter_.separate_audio(G);A=cbaudio.transcribe_and_translate_audio(G,C,D,model);C,J=cbsrt.generate_srt(A,B);A=await cbtts.segments_tts(A,target_voice);K=cbaudio.generate_trans_audio(A,B);H=cbmovie.merge_video_audio_srt(F,0,K,audio_vocals_volume,I,audio_background_volume,J,B)
	if E:cbutils.copy_file(H,_D)
	return H
@click.group()
def cli():'Video processing tool'
@cli.command()
@click.option('--url','-u',help='URL of the video')
@click.option(_F,'-i',help='Input path of the video to be translated')
@click.option('--language','-l',default='zh-CN',show_default=_A,help='Language for subtitle translation')
@click.option('--voice','-v',default=_E,show_default=_A,help='Voice for subtitle narration')
@click.option('--voice-volume','-vv',type=float,default=.8,show_default=_A,help='Narration volume (default: 0.8)')
@click.option(_G,'-bv',type=float,default=.2,show_default=_A,help='Background music volume (default: 0.2)')
@click.option('--model','-m',default='base.en',show_default=_A,help='Transcription model')
@click.option(_H,is_flag=_C,help=_I)
async def translate(url,input,language,voice,voice_volume,background_volume,model,debug):
	'Generate translated video';B=url
	if input:A=input
	elif B:logger.info(f"Downloading video from URL: {B}");A=cbdownload.ytdlp_download(B,_D);logger.info(f"Video downloaded to: {A}")
	else:logger.error('Error: No input file or URL provided!');return
	if not os.path.exists(A):logger.error(f"Error: Video file {A} does not exist!");return
	C=await translate_video(A,_B,language,voice,voice_volume,background_volume,model,debug);click.echo(f"Processing complete! Output file: {C}")
@cli.command()
@click.option(_F,'-i',type=click.Path(exists=_A),help='Collection of video clips')
@click.option('--video-volume','-vv',type=float,default=1.,show_default=_A,help='Video volume')
@click.option('--background','-b',type=click.Path(exists=_A),help='Background music')
@click.option(_G,'-bv',type=float,default=.5,show_default=_A,help='Background music volume (default: 1.0)')
@click.option('--duration','-d',type=int,help='Duration of the background music')
@click.option(_H,is_flag=_C,show_default=_A,help=_I)
def merge(input,video_volume,background,background_volume,duration,debug):
	'Merge video collection';A=background
	if not os.path.exists(input):logger.error(f"Error: Json file {input} does not exist!");return
	if not os.path.exists(A):logger.error(f"Error: Background file {A} does not exist!");return
	B=merge_video(input,video_volume,A,background_volume,duration,debug);click.echo(f"Processing complete! Output file: {B}")
if __name__=='__main__':anyio.run(cli())