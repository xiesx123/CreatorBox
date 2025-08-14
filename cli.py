import os
import subprocess
import sys
import traceback

try:
    import click
    from click import group, option
except:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "click"])
    import click
    from click import group, option


@group()
def cli():
    """
    CreatorBox CLI

    🚀🎬 Flexible, efficient, and scalable toolbox for editing and dubbing, unleashing creative potential

    https://github.com/xiesx123/CreatorBox
    """
    pass


@cli.command(help="启动服务 (Start service)")
@option("--host", "-h", type=str, default="0.0.0.0", show_default=True, required=True, help="host")
@option("--port", "-p", type=int, default=8000, show_default=True, required=True, help="port")
@option("--debug", is_flag=True, default=False, show_default=True, help="enable debug mode")
@option("--ngrok", is_flag=True, default=False, show_default=True, help="enable ngrok tunnel")
@option("--ngrok_host", "-nh", type=str, default="toucan-real-informally.ngrok-free.app", show_default=True, help="ngrok host")
@option("--ngrok_port", "-np", type=int, default=80, show_default=True, help="ngrok port")
def start(host, port, debug, ngrok, ngrok_host, ngrok_port):
    # spawn
    import multiprocessing as mp
    mp.set_start_method("spawn", force=True)

    # args
    if "REBOOT_ARGS" not in os.environ:
        import json
        os.environ["REBOOT_ARGS"] = json.dumps(sys.argv)

    # start ngrok
    def start_ngrok(token, hostname, port):
        from pyngrok import ngrok as ng

        ng.set_auth_token(token)
        if hostname:
            public_url = ng.connect(addr=port, hostname=hostname)
        else:
            public_url = ng.connect(addr=port)
        click.echo(f"✅ Ngrok tunnel started: {public_url}")

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
                click.echo("❌ Ngrok mode requires setting the environment variable NGROK_AUTH_TOKEN")
                return
            start_ngrok(ngrok_token, ngrok_host, ngrok_port or port)

        start_uvicorn(host, port, debug)
    except Exception as e:
        click.echo(f"❌ error: {str(e)}", err=True)
        traceback.print_exc()


@cli.command(help="检查更新 (Check for updates)")
@option("--hash", "-h", "commit_hash", default=None, help="Specify the Git commit hash to checkout. Defaults to pulling the latest version.")
@option("--force", is_flag=True, default=False, show_default=True, help="Force sync with remote (discard local changes).")
def update(commit_hash, force):
    try:
        subprocess.run(["git", "fetch"], check=True)
        if force:
            click.echo("⚠️  Force resetting to origin/master...")
            result = subprocess.run(["git", "reset", "--hard", "origin/master"], capture_output=True, text=True, encoding="utf-8", check=True)
        elif commit_hash:
            click.echo(f"📦 Checking out to commit: {commit_hash}")
            result = subprocess.run(["git", "checkout", hash], capture_output=True, text=True, encoding="utf-8",  check=True)
        else:
            click.echo("📥 Pulling latest changes from remote...")
            result = subprocess.run(["git", "pull"], capture_output=True, text=True, encoding="utf-8", check=True)
        output = result.stdout.strip() + "\n" + result.stderr.strip()
        click.echo(output)
    except Exception as e:
        click.echo(f"❌ error: {str(e)}", err=True)
        traceback.print_exc()


@cli.command(help="依赖安装 (Dependency installation)")
@option("--files", "-f", multiple=True, help="Path(s) to requirements.txt file(s). Can specify multiple.")
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


@cli.command(help="网络代理 (Proxy settings)")
@option("--host", "-h", type=str, default="127.0.0.1", show_default=True, required=True, help="host")
@option("--port", "-p", type=int, default=10808, show_default=True, required=True, help="port")
@option("--username", "-u", type=str, default=None, help="username")
@option("--password", "-pwd", type=str, default=None, help="password")
@option("--site", "-s", type=str, default="https://www.google.com", show_default=True, help="website")
@option("--timeout", "-t", type=int, default=5, show_default=True, help="timeout")
def proxy(host, port, username, password, site, timeout):
    try:
        from src.app.proxy import ProxyHelper
        proxy = ProxyHelper(ip=host, port=port, username=username, password=password)
        click.echo(f"🌐 Starting proxy verify. -> {site}")
        if proxy.verify(url=site, timeout=timeout):
            proxy.configure()
            click.echo(f"✅ Proxy verified successfully.")
        else:
            click.echo("❌ Proxy verified failed. please check your proxy.")
    except Exception as e:
        click.echo(f"❌ error: {str(e)}", err=True)


@cli.command(help="认证鉴权 (Authentication)")
@click.option("--action", "-a", type=click.Choice(["register", "login", "restPassword"]), default="login", show_default=True, required=True, help="choose action")
@click.option("--email", "-e", type=str, required=True, help="email")
@click.option("--password", "-p", type=str, help="password")
@click.option("--proxy", is_flag=True, default=False, show_default=True, help="enable proxy")
def auth(action, email, password, proxy):
    try:
        from src.repository.repo import Authentication
        auth = Authentication()
        click.echo(f"😊 Starting {action} -> {email}")
        if action == "register":
            result = auth.register_with_email_and_password(email, password, proxy)
            msg = f"password -> {result.password}"
        elif action == "restPassword":
            result = auth.send_email_password_reset(email)
            msg = f"please check your email and click to reset your password."
        else:
            result = auth.sign_in_with_email_and_password(email, password, proxy)
            msg = f"token -> {result.token}"
        click.echo(f"✅ {action.capitalize()} successfully. {msg}")
    except Exception as e:
        click.echo(f"❌ error: {str(e)}", err=True)

if __name__ == "__main__":
    cli()
