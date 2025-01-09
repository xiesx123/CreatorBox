import os,sys
sys.path.insert(0,os.getcwd())
sys.path.insert(0,os.path.dirname(os.getcwd()))
import argparse,cv2,numpy as np
from script.utils import cbdownload,cblogger,cbutils
from script.support.keras_ import load_resnet50_model
from loguru import logger
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.applications.resnet50 import preprocess_input
from tensorflow.keras.preprocessing import image
resnet_model=None
def extract_feature_from_image(image_path):
	C=image_path;D=cv2.imread(C)
	if D is None:logger.info(f"Unable to read image: {C}");return
	E=cv2.resize(D,(224,224));A=image.img_to_array(E);A=np.expand_dims(A,axis=0);A=preprocess_input(A);B=resnet_model.predict(A);B=B.flatten();return B
def extract_keyframes_video(video_path,frame_interval=30):
	C=video_path;A=cv2.VideoCapture(C)
	if not A.isOpened():logger.info(f"Unable to open video file: {C}");return[]
	B=[];D=0
	while True:
		E,F=A.read()
		if not E:break
		if D%frame_interval==0:B.append(F)
		D+=1
	A.release();logger.info(f"Extracted {len(B)} keyframes in total");return B
def extract_feature_from_video(keyframes,batch_size=32):
	C=batch_size;B=keyframes;D=[]
	for E in range(0,len(B),C):
		F=B[E:E+C];A=[]
		for G in F:H=cv2.resize(G,(224,224));I=image.img_to_array(H);A.append(I)
		A=np.array(A);A=preprocess_input(A);J=resnet_model.predict(A);D.extend(J)
	return D
def main():
	B=argparse.ArgumentParser(description='Extract feature vectors from video/image and save them');B.add_argument('--file','-f',type=str,default='C:/Users/Xiesx/Desktop/test/input.jpg',help='Path to the video/image file');B.add_argument('--debug',action='store_true',help='Enable debug mode');A=B.parse_args()
	if A.debug:logger.info('Debug mode enabled')
	global resnet_model;resnet_model=load_resnet50_model();C=os.path.splitext(A.file)[1].lower()
	if C in['.jpg','.jpeg','.png','.bmp']:D=extract_feature_from_image(A.file)
	elif C in['.mp4','.avi','.mov','.mkv']:E=extract_keyframes_video(A.file,frame_interval=30);D=extract_feature_from_video(E,batch_size=32)
	else:logger.info(f"Unsupported file type: {C}")
	if D is not None:cbutils.write_vector_to_file(A.file,D)
if __name__=='__main__':main()