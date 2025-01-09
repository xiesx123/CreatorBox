import os,sys
sys.path.insert(0,os.getcwd())
from script.utils import cbutils
from keras.applications import ResNet50
from loguru import logger
def load_resnet50_model():A=ResNet50(weights='imagenet',include_top=False,pooling='avg');logger.info('Model downloaded from the internet and saved to the specified folder');logger.info(f"Model name: {A.name}");return A
if __name__=='__main__':model=load_resnet50_model();logger.info(f"Model name: {model.dtype}")