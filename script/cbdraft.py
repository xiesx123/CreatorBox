_B='segment'
_A='file'
import argparse,os,json
from loguru import logger
from support.draft_jianying import Intro_type,Outro_type,Transition_type,trange
from support.draft_jianying import Script_file,Track_type,Video_material,Video_segment,Audio_material,Audio_segment
from utils import cbdownload,cbenv,cblogger,cbutils
def jianying_draft_content(info,audio_info,video_info,output):
	N='duration';M='volume';G=video_info;C=audio_info;O=info.get('width',1080);P=info.get('height',1920);A=Script_file(O,P);A.add_track(Track_type.text).add_track(Track_type.video).add_track(Track_type.audio);D=0
	for H in G.get(_B,[]):
		E=H.get(_A);Q=G.get(M,1.);B=H.get(N)
		if not os.path.exists(E):raise FileNotFoundError(f"Video file {E} does not exist")
		print(f"{D}s - {B}s");I=Video_material(E);A.add_material(I);J=Video_segment(I,trange(f"{D}s",f"{B}s"),volume=Q);J.add_transition(Transition_type.闪黑);A.add_segment(J);D+=B
	if C:
		F=C.get(_A);R=C.get(M,1.);B=C.get(N)
		if not os.path.exists(F):raise FileNotFoundError(f"Audio file {F} does not exist")
		print(f"0s - {B}s");K=Audio_material(F);A.add_material(K);L=Audio_segment(K,trange('0s',f"{B}s"),volume=R);L.add_fade('1s','0s');A.add_segment(L)
	A.dump(output)
def main():
	C=argparse.ArgumentParser(description='合成视频和音频');C.add_argument('--input',type=str,required=True,help='输入的JSON文件路径');C.add_argument('--output',type=str,required=True,help='输出的JSON文件路径');A=C.parse_args()
	try:
		with open(A.input,'r',encoding='utf-8')as H:D=json.load(H)
	except Exception as E:print(f"Error reading JSON: {E}");return-2
	I=D.get('info');B=D.get('audio');F=D.get('video')
	if B and not os.path.exists(B.get(_A)):print(f"Audio file {B.get(_A)} does not exist");return-2
	for G in F.get(_B,[]):
		if not os.path.exists(G.get(_A)):print(f"Video file {G.get(_A)} does not exist");return-2
	try:jianying_draft_content(I,B,F,A.output);print(f"Generation successful, output path: {A.output}")
	except Exception as E:print(f"Error during generation: {E}");return-2
	finally:cbutils.safe_delete(A.input)
if __name__=='__main__':exit_code=main();exit(exit_code)