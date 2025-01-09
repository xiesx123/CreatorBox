import asyncclick as click,anyio
from cbaudio import cli as audio_cli
from cbsrt import cli as srt_cli
from cbtrans import cli as trans_cli
from cbtts import cli as tts_cli
from cbvideo import cli as video_cli
@click.group()
def cli():'CreatorBox Cli Tool'
cli.add_command(audio_cli,'audio')
cli.add_command(srt_cli,'srt')
cli.add_command(trans_cli,'trans')
cli.add_command(tts_cli,'tts')
cli.add_command(video_cli,'video')
if __name__=='__main__':anyio.run(cli())