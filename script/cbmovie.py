_E='merge_video_audio_srt'
_D='compress_video'
_C='libx264'
_B='extract_audio'
_A=None
import os,argparse,moviepy.editor as mp
from loguru import logger
from moviepy.audio.fx import audio_fadein,audio_fadeout
from moviepy.editor import VideoFileClip,CompositeVideoClip
from utils import cbdownload,cbenv,cblogger,cbutils
def extract_audio(video_path):
	file_name=os.path.splitext(os.path.basename(video_path))[0];audio_path=os.path.join(os.path.dirname(video_path),f"{file_name}.wav")
	if os.path.exists(audio_path):logger.info(f"Audio extracted file already exists: {audio_path}");return os.path.abspath(audio_path)
	video=VideoFileClip(video_path);audio=video.audio;audio.write_audiofile(audio_path);logger.info(f"Audio extracted and saved to: {audio_path}");return os.path.abspath(audio_path)
def compress_video(video_path,resolution=_A,bitrate=_A,fps=_A,no_audio=_A,prefix='_compress'):
	video_file_name=os.path.splitext(os.path.basename(video_path))[0];video_file_name_suffix=os.path.splitext(video_path)[1];video_compress_path=os.path.join(os.path.dirname(video_path),video_file_name+prefix+video_file_name_suffix);logger.info(f"Compressing video saved to: {video_compress_path}")
	try:
		clip=VideoFileClip(video_path)
		if resolution:clip=clip.resize(resolution)
		if fps:clip=clip.set_fps(fps)
		else:fps=clip.fps
		if no_audio:clip=clip.without_audio()
		clip.write_videofile(video_compress_path,codec=_C,audio_codec='aac',bitrate=bitrate,temp_audiofile=cbutils.temp_audio_mp4());return video_compress_path
	except Exception as e:logger.error(f"Error processing video: {e}");return
def merge_video_audio_srt(video_path,audio_vocals_path,audio_vocals_volume,audio_vocals_bgm_path,audio_vocals_bgm_volume,srt_path,prefix='_new'):
	video_file_name=os.path.splitext(os.path.basename(video_path))[0];video_file_name_suffix=os.path.splitext(video_path)[1];new_video_path=os.path.join(os.path.dirname(video_path),video_file_name+prefix+video_file_name_suffix);logger.info(f"Merge video saved to: {new_video_path}");video=mp.VideoFileClip(video_path);audio_vocals=mp.AudioFileClip(audio_vocals_path);audio_vocals=audio_vocals.volumex(audio_vocals_volume);audio_no_vocals=mp.AudioFileClip(audio_vocals_bgm_path);audio_no_vocals=audio_no_vocals.volumex(audio_vocals_bgm_volume);final_audio=mp.CompositeAudioClip([audio_vocals,audio_no_vocals]);video=video.set_audio(final_audio)
	if srt_path:final_video=CompositeVideoClip([video])
	else:final_video=video
	final_video.write_videofile(new_video_path,codec=_C,audio_codec='aac',temp_audiofile=cbutils.temp_audio_mp4());logger.info(f"Merge video saved to: {new_video_path}");return os.path.abspath(new_video_path)
if __name__=='__main__':
	test_video='C:/Users/Xiesx/Desktop/test/test.mp4';test_audio_vocals='C:/Users/Xiesx/Desktop/test/test_trans.wav';test_audio_vocals_bgm='C:/Users/Xiesx/Desktop/test/test_vocals_no.wav';test_srt='C:/Users/Xiesx/Desktop/test/test_trans.srt';parser=argparse.ArgumentParser(description='Process video files');parser.add_argument('--method','-m',type=str,default=_B,help='Method to call');parser.add_argument('--video','-v',type=str,default=test_video,help='Path to video file');parser.add_argument('--audio','-a',type=str,default=test_audio_vocals,help='Path to vocals audio file');parser.add_argument('--background','-b',type=str,default=test_audio_vocals_bgm,help='Path to background music audio file');parser.add_argument('--srt','-s',type=str,default=test_srt,help='Path to subtitle file');parser.add_argument('--debug',action='store_true',help='Enable debug mode');args=parser.parse_args()
	if args.debug:
		logger.info('Debug mode enabled')
		if args.method==_B and args.method:args.video=test_video
		elif args.method==_D and args.method:args.video=test_video
		elif args.method==_E and args.method:args.video=test_video
	try:
		method=globals()[args.method]
		if args.method==_B:method(args.video)
		elif args.method==_D:method(args.video)
		elif args.method==_E:method(args.video,args.audio,args.background,args.srt)
		else:logger.error(f"Method {args.method} does not exist")
	except KeyError:logger.error(f"Method {args.method} does not exist")