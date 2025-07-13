import json
import os
import subprocess
import sys
import traceback

import click
import gradio as gr  # keep this
import uvicorn
from pyngrok import ngrok as ng


@click.group()
def cli():
    """CreatorBox Client"""


@cli.command()
# run
@click.option("--host", "-h", type=str, default="0.0.0.0", show_default=True, help="Local service host address")
@click.option("--port", "-p", type=int, default=8000, show_default=True, help="Local service port")
@click.option("--debug", is_flag=True, default=False, show_default=True, help="Enable debug mode")
# ngrok options
@click.option("--ngrok", is_flag=True, default=False, show_default=True, help="Enable ngrok tunnel")
@click.option("--ngrok_host", "-nh", type=str, default="toucan-real-informally.ngrok-free.app", help="ngrok host (optional)")
@click.option("--ngrok_port", "-np", type=int, default=80, help="ngrok port (defaults to --port)")
def start(host, port, debug, ngrok, ngrok_host, ngrok_port):
    if "REBOOT_ARGS" not in os.environ:
        os.environ["REBOOT_ARGS"] = json.dumps(sys.argv)

    # start ngrok
    def start_ngrok(token, hostname, port):
        ng.set_auth_token(token)
        if hostname:
            public_url = ng.connect(addr=port, hostname=hostname)
        else:
            public_url = ng.connect(addr=port)
        click.echo(f"✅ ngrok tunnel started: {public_url}")

    # start uvicorn
    def start_uvicorn(host, port, debug):
        click.echo(f"🚀 Starting service... http://{host}:{port}")
        try:
            uvicorn.run("src.main:asgi", host=host, port=port, reload=debug)
        except Exception as e:
            click.echo(f"❌ error: {str(e)}")
            traceback.print_exc()

    if ngrok:
        ngrok_token = os.environ.get("NGROK_AUTH_TOKEN")
        if not ngrok_token:
            click.echo("❌ ngrok mode requires --ngrok_token parameter!")
            return
        start_ngrok(ngrok_token, ngrok_host, ngrok_port or port)

    start_uvicorn(host, port, debug)


@cli.command()
@click.option("--hash", "-h", default=None, help="Specify the Git commit hash to checkout. Defaults to pulling the latest version.")
def update(hash):
    if hash:
        subprocess.run(["git", "fetch"], check=True)
        result = subprocess.run(["git", "checkout", hash], capture_output=True, text=True)
        output = result.stdout.strip() + "\n" + result.stderr.strip()
    else:
        result = subprocess.run(["git", "pull"], capture_output=True, text=True)
        output = result.stdout.strip() + "\n" + result.stderr.strip()
    click.echo(output)


if __name__ == "__main__":
    cli()
