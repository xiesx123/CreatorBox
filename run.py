import os
import subprocess

import click
import gradio as gr  # keep this
import uvicorn
from pyngrok import ngrok


@click.group()
def cli():
    """CreatorBox Client"""


@cli.command()
# run
@click.option("--host", "-h", type=str, default="0.0.0.0", show_default=True, help="Local service host address")
@click.option("--port", "-p", type=int, default=8000, show_default=True, help="Local service port")
@click.option("--update", is_flag=True, default=False, show_default=True, help="Update to the latest version")
@click.option("--debug", is_flag=True, default=False, show_default=True, help="Enable debug mode")
# ngrok options
@click.option("--ngrok", is_flag=True, default=False, show_default=True, help="Enable ngrok tunnel")
@click.option("--ngrok_host", "-nh", type=str, default="toucan-real-informally.ngrok-free.app", help="ngrok host (optional)")
@click.option("--ngrok_port", "-np", type=int, default=None, help="ngrok port (defaults to --port)")
def start(host, port, update, debug, ngrok, ngrok_host, ngrok_port):

    def start_ngrok(token, hostname, port):
        ngrok.set_auth_token(token)
        if hostname:
            public_url = ngrok.connect(addr=port, hostname=hostname)
        else:
            public_url = ngrok.connect(addr=port)
        click.echo(f"✅ ngrok tunnel started: {public_url}")

    def start_uvicorn(host, port, debug):
        click.echo(f"🚀 Starting service... http://{host}:{port}")
        uvicorn.run("src.main:asgi", host=host, port=port, reload=debug)

    if update:
        result = subprocess.run(["git", "pull"], capture_output=True, text=True)
        output = result.stdout.strip()
        click.echo(f"✅ ngrok tunnel started: {output}")
        return

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
        # Optionally fetch latest remote changes (useful if the hash is from a remote branch)
        subprocess.run(["git", "fetch"], check=True)

        # Checkout the specific commit by hash
        result = subprocess.run(["git", "checkout", hash], capture_output=True, text=True)
        output = result.stdout.strip() + "\n" + result.stderr.strip()
    else:
        # Pull the latest changes from the current branch
        result = subprocess.run(["git", "pull"], capture_output=True, text=True)
        output = result.stdout.strip() + "\n" + result.stderr.strip()

    # Print the result
    click.echo(output)


if __name__ == "__main__":
    cli()
