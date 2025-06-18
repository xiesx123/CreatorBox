import os

import click
import uvicorn
from pyngrok import ngrok


@click.group()
def cli():
    """CreatorBox Run CLI"""


@cli.command()
# run
@click.option("--host", "-h", type=str, default="0.0.0.0", show_default=True, help="Local service host address")
@click.option("--port", "-p", type=int, default=8000, show_default=True, help="Local service port")
@click.option("--debug", is_flag=True, default=False, show_default=True, help="Enable debug mode")
# ngrok options
@click.option("--ngrok", is_flag=True, default=False, show_default=True, help="Enable ngrok tunnel")
@click.option("--ngrok_host", "-nh", type=str, default="toucan-real-informally.ngrok-free.app", help="ngrok host (optional)")
@click.option("--ngrok_port", "-np", type=int, default=None, help="ngrok port (defaults to --port)")
def start(host, port, debug, ngrok, ngrok_host, ngrok_port):
    if ngrok:
        ngrok_token = os.environ.get("NGROK_AUTH_TOKEN")
        if not ngrok_token:
            click.echo("❌ ngrok mode requires --ngrok_token parameter!")
            return
        start_ngrok(ngrok_token, ngrok_host, ngrok_port or port)

    start_uvicorn(host, port, debug)


def start_ngrok(token, hostname, port):
    ngrok.set_auth_token(token)
    if hostname:
        public_url = ngrok.connect(addr=port, hostname=hostname)
    else:
        public_url = ngrok.connect(addr=port)
    click.echo(f"✅ ngrok tunnel started: {public_url}")


def start_uvicorn(host, port, debug):
    click.echo(f"🚀 Starting service... http://{host}:{port}")
    uvicorn.run("src.main:app", host=host, port=port, reload=debug)


if __name__ == "__main__":
    cli()
