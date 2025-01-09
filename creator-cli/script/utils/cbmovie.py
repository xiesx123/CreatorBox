_C='aac'
_B='libx264'
_A=None
import os,sys
sys.path.insert(0,os.getcwd())
sys.path.insert(0,os.path.dirname(os.getcwd()))
import moviepy.editor as mp
from script.utils import cbdownload,cblogger,cbutils
from loguru import logger
from moviepy.audio.fx import audio_fadein,audio_fadeout
from moviepy.editor import VideoFileClip,AudioFileClip,CompositeVideoClip,CompositeAudioClip,concatenate_videoclips
def extract_audio(video_path):
	B=video_path;C=os.path.splitext(os.path.basename(B))[0];A=os.path.join(os.path.dirname(B),f"{C}.wav")
	if os.path.exists(A):logger.info(f"Audio extracted file already exists: {A}");return os.path.abspath(A)
	D=VideoFileClip(B);E=D.audio;E.write_audiofile(A);logger.info(f"Audio extracted and saved to: {A}");return os.path.abspath(A)
def compress_video(video_path,resolution=_A,bitrate=_A,fps=_A,no_audio=_A,prefix='_compress'):
	E=resolution;C=fps;B=video_path;F=os.path.splitext(os.path.basename(B))[0];G=os.path.splitext(B)[1];D=os.path.join(os.path.dirname(B),F+prefix+G);logger.info(f"Compressing video saved to: {D}")
	try:
		A=VideoFileClip(B)
		if E:A=A.resize(E)
		if C:A=A.set_fps(C)
		else:C=A.fps
		if no_audio:A=A.without_audio()
		A.write_videofile(D,codec=_B,audio_codec=_C,bitrate=bitrate,temp_audiofile=cbutils.temp_audio_mp4());return D
	except Exception as H:logger.error(f"Error processing video: {H}");return
def merge_videos(video_json_path,video_volume,prefix='_merge'):
	D=video_json_path;I=os.path.splitext(os.path.basename(D))[0];F=os.path.join(os.path.dirname(D),I+prefix+'.mp4');J=cbutils.load_json(D);logger.info(f"Loaded video json data from: {D}");A=[];G,H=0,0
	for B in J:
		if not os.path.isfile(B):logger.error(f"Error: File {B} does not exist.");continue
		try:E=VideoFileClip(B);A.append(E);G=max(G,E.size[0]);H=max(H,E.size[1]);logger.info(f"Loaded {B} with size {E.size}")
		except Exception as K:logger.error(f"Error: Failed to load {B}. Error: {K}");continue
	if not A:logger.warning('No valid video files to merge.');return
	A=[A.resize(newsize=(G,H))for A in A];C=concatenate_videoclips(A,method='compose');L=C.duration;C=C.set_audio(C.audio.volumex(video_volume));C.write_videofile(F,codec=_B,audio_codec=_C,temp_audiofile=cbutils.temp_audio_mp4());logger.info('Merged video saved to {} , {} seconds',F,L);return os.path.abspath(F)
def merge_video_audio_srt(video_path,video_volume,audio_vocals_path,audio_vocals_volume,audio_background_path,audio_background_volume,srt_path,prefix='_new'):
	H=audio_background_path;G=audio_vocals_path;B=video_path;J=os.path.splitext(os.path.basename(B))[0];K=os.path.splitext(B)[1];C=os.path.join(os.path.dirname(B),J+prefix+K);logger.info(f"Merge video saved to: {C}");D=[];A=mp.VideoFileClip(B)
	if video_volume>0:D.append(A.audio)
	if G:E=mp.AudioFileClip(G);E=E.volumex(audio_vocals_volume);D.append(E)
	if H:F=mp.AudioFileClip(H);F=F.volumex(audio_background_volume);D.append(F)
	A=A.set_audio(mp.CompositeAudioClip(D))
	if srt_path:I=CompositeVideoClip([A])
	else:I=A
	I.write_videofile(C,codec=_B,audio_codec=_C,temp_audiofile=cbutils.temp_audio_mp4());logger.info(f"Merge video saved to: {C}");return os.path.abspath(C)
if __name__=='__main__':merge_videos('test.json',1.)