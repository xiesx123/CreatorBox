import os
import sys

sys.path.insert(0, os.getcwd())
sys.path.insert(0, os.path.dirname(os.getcwd()))

import traceback

import click


@click.group()
def cli():
    """
    CreatorBox CLI

    🚀🎬 Flexible, efficient, and scalable toolbox for editing and dubbing, unleashing creative potential.

    https://github.com/xiesx123/CreatorBox
    """


@cli.command(help="启动服务 (Start service)")
@click.option("--host", "-h", type=str, default="127.0.0.1", show_default=True, required=True, help="host")
@click.option("--port", "-p", type=int, default=8000, show_default=True, required=True, help="port")
@click.option("--debug", is_flag=True, default=False, show_default=True, help="enable debug mode")
@click.option("--browser", is_flag=True, default=False, show_default=False, help="auto open browser")
@click.option("--ngrok", is_flag=True, default=False, show_default=True, help="enable ngrok tunnel")
@click.option("--ngrok_host", "-nh", type=str, default="toucan-real-informally.ngrok-free.app", show_default=True, help="ngrok host")
@click.option("--ngrok_port", "-np", type=int, default=80, show_default=True, help="ngrok port")
def start(host, port, debug, browser, ngrok, ngrok_host, ngrok_port):
    # spawn
    import multiprocessing as mp

    mp.set_start_method("spawn", force=True)

    # args
    os.environ["browser"] = str(browser)
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


@cli.command(help="扩展安装 (Extensions installation)")
@click.option("--name", "-n", default=None, required=True, help="Name of the extension to install")
@click.option("--version", "-v", default="3.10", help="Specify the Python version")
@click.option("--port", "-p", type=int, default=None, show_default=True, required=True, help="The port number to use during the installation process.")
@click.option("--start", is_flag=True, default=False, show_default=True, help="Start the extension immediately after installation")
@click.option("--share", is_flag=True, default=False, show_default=True, help="Share the extension publicly after installation")
def install(name, version, start, port, share):
    try:
        from src.utils.cbinstaller import Installer

        kwargs = {"share": share}
        if port is not None:
            kwargs["port"] = port
        installer = Installer.builder(name, version, **kwargs)
        installer.create()
        click.echo(f"📦 Installing extension '{name}'...")
        installer.install()
        click.echo("✅ Installation complete.")
        if start:
            click.echo(f"🚀 Starting extension '{name}'...")
            installer.start()
    except Exception as e:
        click.echo(f"❌ error: {str(e)}", err=True)


@cli.command(help="网络代理 (Proxy settings)")
@click.option("--host", "-h", type=str, default="127.0.0.1", show_default=True, required=True, help="host")
@click.option("--port", "-p", type=int, default=10808, show_default=True, required=True, help="port")
@click.option("--username", "-u", type=str, default=None, help="username")
@click.option("--password", "-pwd", type=str, default=None, help="password")
@click.option("--site", "-s", type=str, default="https://www.google.com", show_default=True, help="website")
@click.option("--timeout", "-t", type=int, default=5, show_default=True, help="timeout")
def proxy(host, port, username, password, site, timeout):
    try:
        from src.app.network import ProxyHelper

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
@click.option("--action", "-a", type=click.Choice(["register", "resetpwd", "login"]), default="login", show_default=True, required=True, help="choose action")
@click.option("--email", "-e", type=str, required=True, help="email")
@click.option("--password", "-p", type=str, help="password")
@click.option("--proxy", is_flag=True, default=False, show_default=True, help="enable proxy")
def auth(action, email, password, proxy):
    try:
        from src.db.repo import Firebase

        auth = Firebase.Authentication()
        click.echo(f"😊 Starting {action} -> {email}")
        if action == "register":
            result = auth.sign_up(email, password, proxy)
            msg = f"please check your email to verify."
        elif action == "resetpwd":
            result = auth.send_email_password_reset(email)
            msg = f"please check your email and click to reset your password."
        else:
            result = auth.sign_in(email, password, proxy)
            msg = f"token -> {result}"
        click.echo(f"✅ {action.capitalize()} successfully. {msg}")
    except Exception as e:
        click.echo(f"❌ error: {str(e)}", err=True)


if __name__ == "__main__":
    cli()
