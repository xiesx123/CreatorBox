import json
import multiprocessing as mp
import os
import subprocess
import sys
import traceback

try:
    import click
except:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "click"])
    import click


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
    # spawn
    mp.set_start_method("spawn", force=True)

    # args
    if "REBOOT_ARGS" not in os.environ:
        os.environ["REBOOT_ARGS"] = json.dumps(sys.argv)

    # start ngrok
    def start_ngrok(token, hostname, port):
        from pyngrok import ngrok as ng

        ng.set_auth_token(token)
        if hostname:
            public_url = ng.connect(addr=port, hostname=hostname)
        else:
            public_url = ng.connect(addr=port)
        click.echo(f"✅ ngrok tunnel started1: {public_url}")

    # start uvicorn
    def start_uvicorn(host, port, debug):
        import gradio as gr  # keep this
        import uvicorn

        click.echo(f"🚀 Starting service... http://{host}:{port}")
        uvicorn.run("src.main:asgi", host=host, port=port, reload=debug)

    try:
        if ngrok:
            ngrok_token = os.environ.get("NGROK_AUTH_TOKEN")
            if not ngrok_token:
                click.echo("❌ ngrok mode requires setting the environment variable NGROK_AUTH_TOKEN")
                return
            start_ngrok(ngrok_token, ngrok_host, ngrok_port or port)

        start_uvicorn(host, port, debug)
    except Exception as e:
        click.echo(f"❌ error: {str(e)}", err=True)
        traceback.print_exc()


@cli.command()
@click.option("--hash", "-h", "commit_hash", default=None, help="Specify the Git commit hash to checkout. Defaults to pulling the latest version.")
@click.option("--force", is_flag=True, default=False, help="Force sync with remote (discard local changes).")
def update(commit_hash, force):
    try:
        subprocess.run(["git", "fetch"], check=True)
        if force:
            click.echo("⚠️ Force resetting to origin/master...")
            result = subprocess.run(["git", "reset", "--hard", "origin/master"], capture_output=True, text=True, check=True)
        elif commit_hash:
            click.echo(f"📦 Checking out to commit: {commit_hash}")
            result = subprocess.run(["git", "checkout", hash], capture_output=True, text=True, check=True)
        else:
            click.echo("📥 Pulling latest changes from remote...")
            result = subprocess.run(["git", "pull"], capture_output=True, text=True, check=True)
        output = result.stdout.strip() + "\n" + result.stderr.strip()
        click.echo(output)
    except Exception as e:
        click.echo(f"❌ error: {str(e)}", err=True)
        traceback.print_exc()


@cli.command()
@click.option("--files", "-f", multiple=True, help="Path(s) to requirements.txt file(s). Can specify multiple.")
def install(files):
    try:
        from pathlib import Path

        from src.utils import cbruntime

        if not files:
            default_file = Path("requirements.txt")
            if not default_file.exists():
                click.echo("❌ No requirements.txt found in current directory.", err=True)
                return
            files = (str(default_file),)

        for file in files:
            if not Path(file).exists():
                click.echo(f"⚠️ File not found: {file}", err=True)
                continue
            click.echo(f"📦 Installing from {file}...")
            subprocess.run(["pip", "install", "-r", file], check=True)
            click.echo("✅ Installation complete.")
            _package = cbruntime.get_environment_package(file)
            click.echo("Environment Info:\n" + "\n".join([f"-  {cbruntime.pad_string(k, length=25,align='left')}: {v}" for k, v in _package.items()]))

    except subprocess.CalledProcessError as e:
        click.echo("❌ Installation failed", err=True)
    except Exception as e:
        click.echo(f"❌ Unexpected error: {str(e)}", err=True)
        traceback.print_exc()


if __name__ == "__main__":
    cli()
