_F='Input audio file path'
_E='base.en'
_D='_trans'
_C='--file'
_B=True
_A=None
import os,click,librosa,soundfile as sf,numpy as np
from loguru import logger
from pydub import AudioSegment
from support import whisper_
from utils import cbdownload,cblogger,cbutils
import cbaudio,utils.cbmovie as cbmovie,cbsrt,cbtrans,cbtts
def climax_audio(audio_path,duration=_A,prefix='_climax'):
	C=audio_path;F=os.path.splitext(os.path.basename(C))[0];E=os.path.join(os.path.dirname(C),F+prefix+'.wav')
	if os.path.exists(E):logger.info('Audio climax file already exists. {}',E);return os.path.abspath(E)
	G,A=cbutils.load_audio(C)
	if G is _A:return _A,_A,_A
	def H(window_size_sec=1,hop_size_sec=.5,threshold_db=-20,smooth_factor=5):
		E=smooth_factor;F=int(window_size_sec*A);C=int(hop_size_sec*A);K=librosa.feature.rms(y=G,frame_length=F,hop_length=C)[0];L=librosa.amplitude_to_db(K,ref=np.max);D=np.convolve(L,np.ones(E)/E,mode='same');H=np.argmax(D);M=H*C;B=H
		while B<len(D)-1 and D[B+1]>threshold_db:B+=1
		N=B*C+F;I=M/A;J=N/A;logger.info(f"Audio Climax section : {cbutils.format_seconds_to_srttime(I)} - {cbutils.format_seconds_to_srttime(J)}");return I,J
	def I(target_duration):
		I=target_duration;J=len(G)/A;logger.info(f"Audio Original duration: {J:.2f} seconds");M=D-B
		if I is not _A:
			N=I/M;O=M*N;H=B+(D-B)*(N-1)/2;F=H+O
			if F>J:F=J;H=F-O;logger.info(f"Audio Adjusted section: {cbutils.format_seconds_to_srttime(H)} - {cbutils.format_seconds_to_srttime(F)}")
			else:logger.info(f"New audio section: {cbutils.format_seconds_to_srttime(H)} - {cbutils.format_seconds_to_srttime(F)}")
			K=int(H*A);L=int(F*A);C=G[K:L];logger.info(f"Audio Extracted duration: {len(C)/A:.2f} seconds")
			if len(C)/A!=I:logger.info(f"Warning: Audio length does not match the target duration, adjusting...");C=librosa.util.fix_length(C,int(I*A));logger.info(f"Adjusted audio duration: {len(C)/A:.2f} seconds")
		else:K=int(B*A);L=int(D*A);C=G[K:L];logger.info(f"Extracted audio duration: {len(C)/A:.2f} seconds")
		sf.write(E,C,A);logger.info(f"Processed audio file saved: {E}");return B,D
	B,D=H()
	if B is _A or D is _A or B>=D:return cbutils.to_json_pretty({'error':'Unable to find the climax section of the audio or the time is invalid'})
	B,D=I(duration);return os.path.abspath(E)
def generate_trans_audio(json_path,prefix=_D):
	P='audio';L='start';F=json_path;Q=os.path.splitext(os.path.basename(F))[0];G=os.path.join(os.path.dirname(F),Q+prefix+'.wav');A=cbutils.load_json(F);R=1.2;M=1.05;N=.1;H=cbutils.time_to_milliseconds(A[-1]['end']);S=A[-1];O=cbutils.time_to_milliseconds(A[-1][L]);O+=AudioSegment.from_wav(S[P]).duration_seconds*1000;H=max(H,O);I=AudioSegment.silent(duration=H)
	for C in range(len(A)):
		J=A[C][P]
		if not os.path.exists(J):logger.warning(f"Audio file not found: {J}");continue
		B=AudioSegment.from_wav(J);B=B.strip_silence(silence_thresh=-40,silence_len=100);D=cbutils.time_to_milliseconds(A[C][L])
		if C!=len(A)-1:
			K=D+B.duration_seconds*1000+N*1000;next=cbutils.time_to_milliseconds(A[C+1][L])
			if next<K:
				E=(B.duration_seconds*1000+N*1000)/(next-D)
				if E>R:logger.info(f"idx_{C+1:02}.wav {D:05}-{int(K):05}, {B.duration_seconds}s.")
				if E<M:logger.info(f"idx_{C+1:02}.wav {D:05}-{int(K):05}, {B.duration_seconds}s");E=M
				A[C]['speed']=E;B=B.speedup(playback_speed=E)
		I=I.overlay(B,position=D)
	I.export(G,format='wav');A=cbutils.to_json_pretty(A);cbutils.write_file(F,A);logger.info('Generated translated audio file: {}',G);return os.path.abspath(G)
def transcribe_and_translate_audio(audio_path,srt_path=_A,language='zh',model=_E):
	D=srt_path;C=audio_path;E=os.path.splitext(os.path.basename(C))[0];A=os.path.join(os.path.dirname(C),f"{E}.json")
	if os.path.exists(A):logger.info(f"Transcription data file already exists: {A}");return os.path.abspath(A)
	B=[]
	if D is not _A:B=cbsrt.load_srt(D)
	else:B=whisper_.transcribe_audio(C,model)
	cbtrans.text_json_trans(B,language);F=' '.join([A['text']for A in B]);logger.info(f"Original transcription: {F}");G=' '.join([A['text_trans']for A in B]);logger.info(f"Translated transcription: {G}");H=cbutils.to_json_pretty(B);cbutils.write_file(A,H);logger.info(f"Transcription data complete and saved to: {A}");return os.path.abspath(A)
@click.group()
def cli():'Audio processing tool'
@cli.command()
@click.option(_C,'-f',type=click.Path(exists=_B),required=_B,help=_F)
@click.option('--duration','-t',type=float,default=_A,show_default=_B,help='Target duration')
def climax(file,duration):'Extract the climax part';A=climax_audio(file,duration);click.echo(f"Processing complete! Output file: {A}")
@cli.command()
@click.option(_C,'-f',type=click.Path(exists=_B),required=_B,help='Input JSON file path')
@click.option('--prefix','-p',type=str,default=_D,show_default=_B,help='Output file prefix')
def translate(file,prefix):'Generate translated audio';A=generate_trans_audio(file,prefix);click.echo(f"Generation complete! Output file: {A}")
@cli.command()
@click.option(_C,'-f',type=click.Path(exists=_B),required=_B,help=_F)
@click.option('--srt','-s',type=click.Path(),default=_A,show_default=_B,help='Output SRT file path')
@click.option('--lang','-l',type=str,default='zh',show_default=_B,help='Target language')
@click.option('--model','-m',type=str,default=_E,show_default=_B,help='Model name')
def transcribe(file,srt,lang,model):'Transcribe and process audio';A=transcribe_and_translate_audio(file,srt,lang,model);click.echo(f"Processing complete! Output file: {A}")
if __name__=='__main__':cli()