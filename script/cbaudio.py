_C='generate_trans_audio'
_B='climax_audio'
_A=None
import os,shutil,argparse,librosa,soundfile as sf,numpy as np
from loguru import logger
from pydub import AudioSegment
from utils import cbdownload,cbenv,cblogger,cbutils
def climax_audio(audio_path,target_duration=_A):
	out_folder=os.path.dirname(audio_path);file_name=os.path.splitext(os.path.basename(audio_path))[0];file_climax_path=os.path.join(out_folder,f"{file_name}_climax.wav")
	if os.path.exists(file_climax_path):logger.info('Audio climax file already exists. {}',file_climax_path);return os.path.abspath(file_climax_path)
	y,sr=cbutils.load_audio(audio_path)
	if y is _A:return _A,_A,_A
	def find_climax_section(window_size_sec=1,hop_size_sec=.5,threshold_db=-20,smooth_factor=5):
		window_size_samples=int(window_size_sec*sr);hop_size_samples=int(hop_size_sec*sr);energy=librosa.feature.rms(y=y,frame_length=window_size_samples,hop_length=hop_size_samples)[0];energy_db=librosa.amplitude_to_db(energy,ref=np.max);smoothed_energy_db=np.convolve(energy_db,np.ones(smooth_factor)/smooth_factor,mode='same');peak_start_idx=np.argmax(smoothed_energy_db);peak_start_sample=peak_start_idx*hop_size_samples;peak_end_idx=peak_start_idx
		while peak_end_idx<len(smoothed_energy_db)-1 and smoothed_energy_db[peak_end_idx+1]>threshold_db:peak_end_idx+=1
		peak_end_sample=peak_end_idx*hop_size_samples+window_size_samples;climax_start_time=peak_start_sample/sr;climax_end_time=peak_end_sample/sr;logger.info(f"Audio Climax section : {cbutils.format_seconds_to_srttime(climax_start_time)} - {cbutils.format_seconds_to_srttime(climax_end_time)}");return climax_start_time,climax_end_time
	def extract_climax_from_audio(target_duration):
		audio_duration_sec=len(y)/sr;logger.info(f"Original audio duration: {audio_duration_sec:.2f} seconds");climax_duration=climax_end-climax_start
		if target_duration is not _A:
			stretch_factor=target_duration/climax_duration;extended_climax_duration=climax_duration*stretch_factor;extended_climax_start=climax_start+(climax_end-climax_start)*(stretch_factor-1)/2;extended_climax_end=extended_climax_start+extended_climax_duration
			if extended_climax_end>audio_duration_sec:extended_climax_end=audio_duration_sec;extended_climax_start=extended_climax_end-extended_climax_duration;logger.info(f"Adjusted audio section: {cbutils.format_seconds_to_srttime(extended_climax_start)} - {cbutils.format_seconds_to_srttime(extended_climax_end)}")
			else:logger.info(f"New audio section: {cbutils.format_seconds_to_srttime(extended_climax_start)} - {cbutils.format_seconds_to_srttime(extended_climax_end)}")
			start_sample=int(extended_climax_start*sr);end_sample=int(extended_climax_end*sr);extracted_audio=y[start_sample:end_sample];logger.info(f"Extracted audio duration: {len(extracted_audio)/sr:.2f} seconds")
			if len(extracted_audio)/sr!=target_duration:logger.info(f"Warning: Audio length does not match the target duration, adjusting...");extracted_audio=librosa.util.fix_length(extracted_audio,int(target_duration*sr));logger.info(f"Adjusted audio duration: {len(extracted_audio)/sr:.2f} seconds")
		else:start_sample=int(climax_start*sr);end_sample=int(climax_end*sr);extracted_audio=y[start_sample:end_sample];logger.info(f"Extracted audio duration: {len(extracted_audio)/sr:.2f} seconds")
		sf.write(file_climax_path,extracted_audio,sr);logger.info(f"Processed audio file saved: {file_climax_path}");return climax_start,climax_end
	climax_start,climax_end=find_climax_section()
	if climax_start is _A or climax_end is _A or climax_start>=climax_end:return cbutils.to_json_pretty({'error':'Unable to find the climax section of the audio or the time is invalid'})
	climax_start,climax_end=extract_climax_from_audio(target_duration);return os.path.exists(file_climax_path)
def generate_trans_audio(json_path,prefix='_trans'):
	B='audio';A='start';file_name=os.path.splitext(os.path.basename(json_path))[0];wav_path=os.path.join(os.path.dirname(json_path),file_name+prefix+'.wav');json_data=cbutils.load_json(json_path);MAX_SPEED_UP=1.2;MIN_SPEED_UP=1.05;MIN_GAP_DURATION=.1;duration=cbutils.time_to_milliseconds(json_data[-1]['end']);final_audio_data=json_data[-1];final_audio_end=cbutils.time_to_milliseconds(json_data[-1][A]);final_audio_end+=AudioSegment.from_wav(final_audio_data[B]).duration_seconds*1000;duration=max(duration,final_audio_end);combined=AudioSegment.silent(duration=duration)
	for i in range(len(json_data)):
		audioPath=json_data[i][B]
		if not os.path.exists(audioPath):logger.warning(f"Audio file not found: {audioPath}");continue
		audio=AudioSegment.from_wav(audioPath);audio=audio.strip_silence(silence_thresh=-40,silence_len=100);audioStartPosition=cbutils.time_to_milliseconds(json_data[i][A])
		if i!=len(json_data)-1:
			audioEndPosition=audioStartPosition+audio.duration_seconds*1000+MIN_GAP_DURATION*1000;audioNextPosition=cbutils.time_to_milliseconds(json_data[i+1][A])
			if audioNextPosition<audioEndPosition:
				speedUp=(audio.duration_seconds*1000+MIN_GAP_DURATION*1000)/(audioNextPosition-audioStartPosition)
				if speedUp>MAX_SPEED_UP:logger.info(f"idx_{i+1:02}.wav {audioStartPosition:05}-{int(audioEndPosition):05}, {audio.duration_seconds}s.")
				if speedUp<MIN_SPEED_UP:logger.info(f"idx_{i+1:02}.wav {audioStartPosition:05}-{int(audioEndPosition):05}, {audio.duration_seconds}s");speedUp=MIN_SPEED_UP
				json_data[i]['speed']=speedUp;audio=audio.speedup(playback_speed=speedUp)
		combined=combined.overlay(audio,position=audioStartPosition)
	combined.export(wav_path,format='wav');json_data=cbutils.to_json_pretty(json_data);cbutils.write_file(json_path,json_data);logger.info('Generated translated audio file: {}',wav_path);return os.path.abspath(wav_path)
if __name__=='__main__':
	test_audio='C:/Users/Xiesx/Desktop/test/test.wav';test_json='C:/Users/Xiesx/Desktop/test/test.json';test_audio_background='C:/Users/Xiesx/Desktop/test/test.m4a';parser=argparse.ArgumentParser(description='Process audio files');parser.add_argument('--method','-m',type=str,default=_B,help='Method name to call');parser.add_argument('--file','-f',type=str,default=test_audio,help='Path to the audio WAV/data JSON file');parser.add_argument('--debug',action='store_true',help='Enable debug mode');args=parser.parse_args()
	if args.debug:
		logger.info('Debug mode enabled')
		if args.method==_B and args.file:args.file=test_audio_background
		elif args.method==_C and args.file:args.file=test_json
	try:
		method=globals()[args.method]
		if args.method==_B and args.file:method(args.file,_A)
		elif args.method==_C and args.file:method(args.file)
	except KeyError:logger.error(f"Method {args.method} does not exist")