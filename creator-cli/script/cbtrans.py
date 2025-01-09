import click,json
from loguru import logger
from pygtrans import Translate
from utils import cbdownload,cblogger,cbutils
def text_trans(text,language='en'):B=Translate();A=B.translate(text,target=language);logger.info(f"Translated text: {A.translatedText}");return A.translatedText
def text_json_trans(json_data,language='en'):
	A=json_data
	if isinstance(A,str):
		try:
			A=json.loads(A)
			if not(isinstance(A,list)and all(isinstance(A,dict)for A in A)):logger.error('Invalid JSON data format');return
		except json.JSONDecodeError as D:logger.error(f"Error parsing JSON data: {D}");return
	E=[A['text']for A in A];F=Translate();B=F.translate(E,target=language)
	for(C,G)in enumerate(A):G['text_trans']=B[C].translatedText
	logger.info(f"Translated text length of: {len(B[C].translatedText)}");return A
@click.group()
def cli():'Text translation tool'
@cli.command()
@click.option('--text','-t',type=str,required=True,help='Text to be translated')
@click.option('--lang','-l',type=str,default='en',show_default=True,help='Language for text translation')
def text(text,lang):
	'Translate text';A=text
	if cbutils.is_json(A):'Translate batch text';B=text_json_trans(A,lang)
	else:'Translate single text';B=text_trans(A,lang)
	click.echo(f"Translation complete! Output: {B}")
if __name__=='__main__':cli()