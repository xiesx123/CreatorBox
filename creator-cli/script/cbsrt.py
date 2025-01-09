_F='--file'
_E='_trans'
_D='text_trans'
_C='end'
_B='start'
_A=True
import os,srt,click
from loguru import logger
from datetime import timedelta
from utils import cbdownload,cblogger,cbutils
def load_srt(srt_path):
	C=srt_path;B=[]
	if C is not None:
		D=cbutils.read_file(C);E=srt.parse(D)
		for A in E:B.append({'idx':A.index,_B:cbutils.format_timedelta_to_srttime(A.start),_C:cbutils.format_timedelta_to_srttime(A.end),'duration':round(A.end.total_seconds()-A.start.total_seconds(),3),'text':A.content,_D:''})
	logger.info(f"Segments info total segments: {len(B)}");return B
def generate_srt(json_path,prefix=_E):
	I='.srt';B=json_path;E=os.path.splitext(os.path.basename(B))[0];C=os.path.join(os.path.dirname(B),E+I);D=os.path.join(os.path.dirname(B),E+prefix+I);J=cbutils.load_json(B);F=[];G=[]
	for(H,A)in enumerate(J):K=srt.Subtitle(index=H+1,start=timedelta(seconds=cbutils.time_to_seconds(A[_B])),end=timedelta(seconds=cbutils.time_to_seconds(A[_C])),content=A['text']);F.append(K);L=srt.Subtitle(index=H+1,start=timedelta(seconds=cbutils.time_to_seconds(A[_B])),end=timedelta(seconds=cbutils.time_to_seconds(A[_C])),content=A[_D]);G.append(L)
	cbutils.write_file(C,srt.compose(F));logger.info('SRT file and saved to: {}',os.path.abspath(C));cbutils.write_file(D,srt.compose(G));logger.info('SRT translated file and saved to: {} ',os.path.abspath(D));return os.path.abspath(C),os.path.abspath(D)
@click.group()
def cli():'Subtitle processing tool'
@cli.command()
@click.option(_F,'-f',type=click.Path(exists=_A),required=_A,help='Input SRT file path')
def load(file):'Load subtitle file';A=load_srt(file);click.echo(f"Loading complete! Total subtitle segments: {len(A)}")
@cli.command()
@click.option(_F,'-f',type=click.Path(exists=_A),required=_A,help='Input JSON file path')
@click.option('--prefix','-p',type=str,default=_E,show_default=_A,help='Output file prefix')
def generate(file,prefix):'Generate translated subtitles';A=generate_srt(file,prefix);click.echo(f"Generation complete! Output files: {A[0]} and {A[1]}")
if __name__=='__main__':cli()