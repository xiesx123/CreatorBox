_D='load_srt'
_C='text_trans'
_B='end'
_A='start'
import os,srt,argparse
from loguru import logger
from datetime import timedelta
from utils import cbdownload,cbenv,cblogger,cbutils
def load_srt(srt_path):
	segments_info=[]
	if srt_path is not None:
		json_data=cbutils.read_file(srt_path);subtitles=srt.parse(json_data)
		for subtitle in subtitles:segments_info.append({'idx':subtitle.index,_A:cbutils.format_timedelta_to_srttime(subtitle.start),_B:cbutils.format_timedelta_to_srttime(subtitle.end),'duration':round(subtitle.end.total_seconds()-subtitle.start.total_seconds(),3),'text':subtitle.content,_C:''})
	logger.info(f"Segments info total segments: {len(segments_info)}");return segments_info
def generate_srt(json_path,prefix='_trans'):
	A='.srt';file_name=os.path.splitext(os.path.basename(json_path))[0];srt_path=os.path.join(os.path.dirname(json_path),file_name+A);srt_trans_path=os.path.join(os.path.dirname(json_path),file_name+prefix+A);json_data=cbutils.load_json(json_path);subtitles=[];subtitles_trans=[]
	for(idx,segment)in enumerate(json_data):subtitle=srt.Subtitle(index=idx+1,start=timedelta(seconds=cbutils.time_to_seconds(segment[_A])),end=timedelta(seconds=cbutils.time_to_seconds(segment[_B])),content=segment['text']);subtitles.append(subtitle);subtitle_trans=srt.Subtitle(index=idx+1,start=timedelta(seconds=cbutils.time_to_seconds(segment[_A])),end=timedelta(seconds=cbutils.time_to_seconds(segment[_B])),content=segment[_C]);subtitles_trans.append(subtitle_trans)
	cbutils.write_file(srt_path,srt.compose(subtitles));logger.info('SRT file and saved to: {}',os.path.abspath(srt_path));cbutils.write_file(srt_trans_path,srt.compose(subtitles_trans));logger.info('SRT translated file and saved to: {} ',os.path.abspath(srt_trans_path));return os.path.abspath(srt_path),os.path.abspath(srt_trans_path)
if __name__=='__main__':
	test_srt='C:/Users/Xiesx/Desktop/test/test.srt';test_json='C:/Users/Xiesx/Desktop/test/test.json';parser=argparse.ArgumentParser(description='Process subtitle files');parser.add_argument('--method','-m',type=str,default=_D,help='Method name to call');parser.add_argument('--file','-f',type=str,default=test_srt,help='Path to subtitle SRT/data JSON file');parser.add_argument('--debug',action='store_true',help='Enable debug mode');args=parser.parse_args()
	if args.debug:
		logger.info('Debug mode enabled')
		if args.method==_D and args.file:args.file=test_srt
		elif args.method=='generate_srt'and args.file:args.file=test_json
	try:method=globals()[args.method];method(args.file)
	except KeyError:logger.error(f"Method {args.method} does not exist")