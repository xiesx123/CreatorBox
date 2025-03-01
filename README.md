<img src="images/favicon.png" alt="CreatorBox" width="120"/>

# CreatorBox

[CreatorBox](https://github.com/xiesx123/CreatorBox) 🚀🎬轻量、灵活、易上手的创作者工具箱，构建全自动化视频剪辑/混剪流水线；

## 演示视频

## 功能说明
- [x] 资源提取下载分割
- [x] 自定义视频片段集合合并
- [x] 导出或覆盖现有剪映草稿
- [x] 视频翻译 1.0.5 (待发布)
   - [x] 音频提取：提取视频音频、音轨分离、背景降噪
   - [x] 转录转译：转录转译目标字幕
   - [x] 单人配音：文本转多风格语音，更加自然
   - [x] 人声对齐：将配音与视频同步对齐
- [x] 视频配音 1.0.5 (待发布)
   - [x] 多人识别：多人角色识别提取
   - [x] 多人配音：为不同的角色配音
- [ ] 自动化投稿

## 项目计划
2025-01-04 ：
先得实现功能，再得写Api，最后写Gui，1.0.5之后对电脑配置就得有要求了，支持(cpu、cuda)

2025-01-07 ：
这里使用 [Colab](https://github.com/xiesx123/CreatorBox/blob/master/README.md#%E4%BA%A4%E4%BA%92%E5%BC%8F%E7%8E%AF%E5%A2%83) 加快任务处理速度...

2025-01-10 ：
新增 creatorbox cli

2025-02-08 ：
新增 creatorbox api ， 视频翻译 [接口文档](https://toucan-real-informally.ngrok-free.app/docs#/)  [在线日志](https://toucan-real-informally.ngrok-free.app/static/logs.html) [视频预览](https://toucan-real-informally.ngrok-free.app/static/player.html)，免费版大概3个小时左右会掉线

2025-03-01 ：
新增 视频多角色配音及翻译

## 服务端

### 功能截图

### 调用流程

<img src="screenshot/server1.png" alt="CreatorBox" width="380"/>

> 1、先调用 `/video/translate` 得到任务id（url/input 二选一，input先可以调用 `/downloader/ytdlp` 下载）
```
{
  "code": 0,
  "message": "success",
  "data": {
    "task_id": "0a772286-463e-4ea2-a5c5-02dcefa6599b"
  }
}
```
> 2、等待服务器处理完毕，在未处理完毕前，可调用 `/app/result/{task_id}` 获取任务结果
```
{
  "code": 0,
  "message": "success",
  "data": {
    "task_id": "0a772286-463e-4ea2-a5c5-02dcefa6599b",
    "result": {
      "path": "/content/creatorbox/webapp/temp/27918d2db14c2b0ecad390a5a3e44624/xTbN6lumdPQ_trans_zh-CN.mp4"
    }
  }
}
```

> 3、调用 `/loader/local` 获取完整下载链接（所有在webapp目录下均可下载）

原始视频，地址格式 = /content/creatorbox/webapp/ytdlp/{id}.mp4
```
https://toucan-real-informally.ngrok-free.app/downloader/local?file_path=%2Fcontent%2Fcreatorbox%2Fwebapp%2Fytdlp%2FxTbN6lumdPQ.mp4
```
翻译视频
```
https://toucan-real-informally.ngrok-free.app/downloader/local?file_path=%2Fcontent%2Fcreatorbox%2Fwebapp%2Ftemp%2F27918d2db14c2b0ecad390a5a3e44624%2FxTbN6lumdPQ_zh-CN.mp4
```
等等

## 客户端

### 安装下载

基于windows x64处理器，下载[最新版本](https://github.com/xiesx123/CreatorBox/tags)安裝即可

```sh
root@DELL MINGW64 /d/Projects/app
$ ll
total 61732
-rwxr-xr-x 1 root 197608 102867456 12月 12 18:16 CreatorBox.exe* # 主程序
drwxr-xr-x 1 root 197608         0 12月 12 18:18 data/            # Data  数据配置目录
drwxr-xr-x 1 root 197608         0 12月 12 18:18 draft/           # Draft 剪映草稿模版
drwxr-xr-x 1 root 197608         0 12月  1 20:43 logs/            # Logs  日志目录
drwxr-xr-x 1 root 197608         0 12月 12 18:18 script/          # Script脚本目录
-rw-r--r-- 1 root 197608    143888 12月 12 18:18 unins000.dat     # 卸载文件列表
-rwxr-xr-x 1 root 197608   3376121 12月 12 18:17 unins000.exe*    # 卸载程序
```

### 启动说明
```
   _____                _            ______
  /  __ \              | |           | ___ \
  | /  \/_ __ ___  __ _| |_ ___  _ __| |_/ / _____  __
  | |   | '__/ _ \/ _` | __/ _ \| '__| ___ \/ _ \ \/ /
  | \__/\ | |  __/ (_| | || (_) | |  | |_/ / (_) >  <
   \____/_|  \___|\__,_|\__\___/|_|  \____/ \___/_/\_\

2024-12-26 23:48:36 - Startup Server name: app, path: D:\Projects\app\
2024-12-26 23:48:36 - Startup Scheduler 1 Job Completed.
2024-12-26 23:48:37 - Started CreatorApplication in 11.907 seconds (process running for 13.558)
2024-12-26 23:48:37 -

#########################################################################
 项目名称: CreatorBox
 项目版本: 1.0.4.c367670
 项目地址: http://172.19.0.1:9090
 启动配置: release
#########################################################################
```

### 功能截图
> 链接提取、下载、分割
<div style="display: flex; justify-content: space-between;">
  <img src="screenshot/s1-1.png" alt="CreatorBox" width="380"/> 
</div>

***

> 选择音视频及生成方式
<div style="display: flex; justify-content: space-between;">
  <img src="screenshot/s1-2.png" alt="CreatorBox" width="380"/> 
  <img src="screenshot/s2-1.png" alt="CreatorBox" width="380"/> 
  <img src="screenshot/s2-2.png" alt="CreatorBox" width="380"/> 
  <img src="screenshot/s2-3.png" alt="CreatorBox" width="380"/> 
</div>

***

> 直接生成视频
<div style="display: flex; justify-content: space-between;">
  <img src="screenshot/s3-1.png" alt="CreatorBox" width="380"/> 
  <img src="screenshot/s3-2.png" alt="CreatorBox" width="380"/>
</div>

***

> 导出或覆盖现有剪映草稿
<div style="display: flex; justify-content: space-between;">
  <img src="screenshot/s3-3.png" alt="CreatorBox" width="380"/>
  <img src="screenshot/s3-4.png" alt="CreatorBox" width="380"/>
</div>

***

> 使用剪映打开剪映项目（目前只实现了音频、视频轨、转场）
<img src="screenshot/s3-5.png" alt="CreatorBox" width="380"/>

***

> LLM 大模型（目前只实现了Gemini，免费额度基本够用）
<img src="screenshot/s4.png" alt="CreatorBox" width="380"/>

### 无头模式
无头模式下启动会打印此日志，此时可通过接口方式批量调用
```
...省略
2024-12-26 23:57:06 - Currently in headless environment, unable to start the interface
```
> 外部接口（上述GUI所有操作均支持api接口调用）
<img src="screenshot/s10-1.png" alt="CreatorBox" width="380"/>


## 交互式环境
Colab 是一个允许您编写和执行代码的交互式环境，称为 Colab 笔记本，[这里](https://colab.research.google.com/drive/1VFN9991PEg2mRWWwdKhAdAmQyut7Wfu5?usp=sharing)你可以借助GPU来加快任务处理速度
creatorbox cli
<div style="display: flex; justify-content: space-between;">
  <img src="screenshot/colab1.png" alt="CreatorBox" width="380"/> 
  <img src="screenshot/colab2.png" alt="CreatorBox" width="380"/>
</div>
creatorbox api
<div style="display: flex; justify-content: space-between;">
   <img src="screenshot/colab4.jpeg" alt="CreatorBox" width="380"/> 
   <img src="screenshot/colab3.png" alt="CreatorBox" width="380"/>
</div>

```
{
  "code": 0,
  "message": "success",
  "data": {
    "system": "Linux",
    "node": "b8994b700a17",
    "version": "#1 SMP PREEMPT_DYNAMIC Thu Jun 27 21:05:47 UTC 2024",
    "machine": "x86_64",
    "processor": "x86_64",
    "cpu_percent": 0,
    "memory_total": 12.67477035522461,   // 12.7G
    "memory_used": 1.6868972778320312,
    "memory_percent": 15.8,
    "disk_usage": 28.3,                  // 112.6G
    "internal_ip": "172.28.0.12",
    "external_ip": "34.87.123.59",
    "gpu": [
      {
        "name": "Tesla T4", 
        "driver": "550.54.15",
        "memory_total": 15360,           // 15G
        "memory_used": 0,
        "memory_free": 15095,
        "gpu_util": 0,
        "temperature": 42
      }
    ]
  }
}
```

## 常见问题

> #### 环境
内置 `Jre_v21.0.5_11` `Conda-v24.11.1` `Node-v20.12.1-x64` 环境，无需手动处理，在选择安装目录时不要含有空格

> #### 配置
1.0.5 开始使用Conda管理环境，不影响本机环境
```
conda create --name creatorbox python=3.11.11
```

> #### 环境
机器配置差异导致运行异常

> #### 网络
科学上网，LLM模型会使用

## 参数定制
配置有一点点多，先默认满足基本需求，后续会逐步放开配置；如：

下载时会默认选择最佳的音视频、字幕、缩略图；

分割时会默认生成3张jpg缩略图（起始帧+中帧）、1个cvs统计文件、1个html场景文件；

...

如果你特别需要某个配置，请联系我，欢迎交流~
 
## 联系作者
xiesx123@gmail.com
