_B='translate_text_batch'
_A='translate_text'
import ast,argparse
from loguru import logger
from pygtrans import Translate
from utils import cbdownload,cbenv,cblogger,cbutils
def translate_text(text,target_language='en'):translator=Translate();translation=translator.translate(text,target=target_language);logger.info(f"Translated text: {translation.translatedText}");return translation.translatedText
def translate_text_batch(json_data,target_language='en'):
	if isinstance(json_data,str):
		try:
			json_data=ast.literal_eval(json_data)
			if not(isinstance(json_data,list)and all(isinstance(item,dict)for item in json_data)):logger.error('Invalid JSON data format')
		except(ValueError,SyntaxError)as e:logger.error(f"Error parsing JSON data: {e}")
	texts_to_translate=[item['text']for item in json_data];translator=Translate();translations=translator.translate(texts_to_translate,target=target_language)
	for(idx,item)in enumerate(json_data):item['text_trans']=translations[idx].translatedText
	logger.info(f"Translated text length of: {len(translations[idx].translatedText)}");return json_data
if __name__=='__main__':
	test_text='Hello';test_json="[{'text': 'Hello'}, {'text': 'Goodbye'}]";parser=argparse.ArgumentParser(description='Process text translation');parser.add_argument('--method','-m',type=str,default=_A,help='Method name to call');parser.add_argument('--text','-t',type=str,default=test_text,help='Text to translate');parser.add_argument('--json','-j',type=str,default=test_json,help="JSON data: [{'text': 'Hello'}, {'text': 'Goodbye'}]");parser.add_argument('--debug',action='store_true',help='Enable debug mode');args=parser.parse_args()
	if args.debug:
		logger.info('Debug mode enabled')
		if args.method==_A and args.text:args.text=test_text
		elif args.method==_B and args.json:args.json=test_json
	try:
		method=globals()[args.method]
		if args.method==_A and args.text:method(args.text)
		elif args.method==_B and args.json:method(args.json)
	except KeyError:logger.error(f"Method {args.method} does not exist")