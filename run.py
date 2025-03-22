# coding=utf-8
import asyncio

import anyio
import asyncclick as click
import uvicorn
from pyngrok import ngrok


@click.group()
async def cli():
    """CreatorBox Run CLI"""


@cli.command()
# run
@click.option("--host", "-h", type=str, default="0.0.0.0", show_default=True, help="Local service host address")
@click.option("--port", "-p", type=int, default=8000, show_default=True, help="Local service port")
@click.option("--debug", is_flag=True, default=False, show_default=True, help="Enable debug mode")
# ngrok options
@click.option("--ngrok", is_flag=True, default=False, show_default=True, help="Enable ngrok tunnel")
@click.option("--ngrok_token", "-nt", type=str, default=None, help="ngrok auth token (required if --ngrok is enabled)")
@click.option("--ngrok_hostname", "-nh", type=str, default="toucan-real-informally.ngrok-free.app", help="ngrok hostname (optional)")
@click.option("--ngrok_port", "-np", type=int, default=None, help="ngrok port (defaults to --port)")
async def start(host, port, debug, ngrok, ngrok_token, ngrok_hostname, ngrok_port):
    tasks = []

    if ngrok:
        if not ngrok_token:
            click.echo("❌ ngrok 模式需要提供 --ngrok_token 参数！")
            return
        tasks.append(start_ngrok(ngrok_token, ngrok_hostname, ngrok_port or port))

    tasks.append(start_uvicorn(host, port, debug))

    await asyncio.gather(*tasks)


async def start_ngrok(token, hostname, port):
    ngrok.set_auth_token(token)
    if hostname:
        public_url = ngrok.connect(addr=port, hostname=hostname)
    else:
        public_url = ngrok.connect(addr=port)

    click.echo(f"✅ ngrok 隧道已启动: {public_url}")
    while True:
        await asyncio.sleep(60)


async def start_uvicorn(host, port, debug):
    config = uvicorn.Config("src.main:app", host=host, port=port, reload=debug)
    server = uvicorn.Server(config)
    click.echo(f"🚀 启动服务中... http://{host}:{port}")
    await server.serve()


if __name__ == "__main__":
    try:
        if asyncio.get_event_loop().is_running():
            anyio.run(cli)
        else:
            asyncio.run(cli())
    except RuntimeError:
        anyio.run(cli)
