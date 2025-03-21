<div align="center">
<h1 align="center">CreatorBox 💸</h1>

<!-- <p align="center">
  <a href="https://github.com/xiesx123/CreatorBox/stargazers">
    <img src="https://img.shields.io/badge/Stars-%E2%9D%A4-red?style=for-the-badge" alt="Stargazers">
  </a>
</p> -->

![Version](https://img.shields.io/badge/version-v1.0.5-blue)
![GitHub stars](https://img.shields.io/github/stars/xiesx123/CreatorBox?style=social)
![Google Colab](https://img.shields.io/badge/Google_Colab-Running-yellow?logo=googlecolab&?style=social)

<h3>简体中文 | <a href="README_EN.md">English</a></h3>

🚀🎬轻量、灵活、易上手的创作者工具箱，构建全自动化视频剪辑/配音流水线

<h4>Web界面</h4>

![](docs/images/s1.jpg)

<h4>调整与定制</h4>

<table>
<thead>
<tr>
<th align="center"><g-emoji class="g-emoji" alias="arrow_forward">🔧</g-emoji> 本地素材导出草稿</th>
<th align="center"><g-emoji class="g-emoji" alias="arrow_forward">✂️</g-emoji> 剪映后期精细调整</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><image src="docs/images/s2.jpg"></image></td>
<td align="center"><image src="docs/images/s3.jpg"></image></td>
</tr>
</tbody>
</table>

</div>


## 功能特性 🎯

- **🎤 智能转录**

  智能转录视频和音频中的人声，灵活调整配置适应不同设备和场景，确保精准高质量文本生成

- **🗣️ 说话人识别**

  自动识别视频中的多位说话人，根据性别分配个性化语音，支持灵活配置与调试，满足各种创作需求

- **🌐 翻译功能**

  多种语言互译，允许切换翻译提供商并调整高级参数，优化翻译效果，打破语言壁垒

- **🎧 语音合成**

  丰富的语音风格与声音选择及试听，满足个性化创作需求，打造独特的配音效果

- **📤 导出功能**

  多种创作模式随时切换，支持视频配音、翻译、解说等多场景应用，满足不同用户需求

- **✂️ 剪映草稿**

  支持将素材导出至剪映，提供画面、声音、字幕等多维度精细控制，助力后期调整与定制

- **🔧 预览与调试**

  提供灵活、高效的配置调整，确保每个环节的完美呈现，提升创作效率与质量


### 后期计划 📅
- [x] 视频解析下载
- [x] 导出剪映草稿
   - [ ] [素材多轨道支持]()， 画面、声音、字幕等多维度
   - [ ] 
   - [ ] 
- [x] 模式切换
   - [x] [翻译模式](https://github.com/xiesx123/CreatorBox/discussions/1)
   - [x] [配音模式](https://github.com/xiesx123/CreatorBox/discussions/2)
   - [ ] 解说模式
- [ ] 自动化发布投稿


## 进展动态 📈
2025-01-04 ：
支持 cpu、cuda

2025-01-07 ：
新增 Creatorbox cil （弃用）
使用 [Google Colab](https://colab.research.google.com/drive/1VFN9991PEg2mRWWwdKhAdAmQyut7Wfu5?usp=sharing) 加快任务处理速度

2025-01-10 ：
新增 Creatorbox api

2025-02-08 ：
新增 视频翻译 [接口文档](https://toucan-real-informally.ngrok-free.app/docs#/) · [在线日志](https://toucan-real-informally.ngrok-free.app/logs) · [视频预览](https://toucan-real-informally.ngrok-free.app/player)

2025-03-01 ：
新增 视频配音、支持多角色

2025-03-13 ：
新增 [参数配置](https://toucan-real-informally.ngrok-free.app) 页面，方便调试

2025-03-21 ：
新增 双语字幕、混音导出、剪映预览；优化代码


## 视频演示 📺

### 配音模式

<table>
<thead>
<tr>
<th align="center"><g-emoji class="g-emoji" alias="arrow_forward">▶️</g-emoji> 单人-中文视频</th>
<th align="center"><g-emoji class="g-emoji" alias="arrow_forward">▶️</g-emoji> 单人-英文视频</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><video src="https://github.com/user-attachments/assets/27e466a9-1817-4276-ad04-42b8b9ffafe3"></video></td>
<td align="center"><video src="https://github.com/user-attachments/assets/35f05c2d-7b55-41af-8c1c-31cf4d30216a"></video></td>
</tr>
</tbody>
</table>

### 翻译模式

<table>
<thead>
<tr>
<th align="center"><g-emoji class="g-emoji" alias="arrow_forward">▶️ 多人-英文视频</th>
<th align="center"><g-emoji class="g-emoji" alias="arrow_forward">▶️ 多人-中英混音_双字幕</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><video src="https://github.com/user-attachments/assets/7e6d0311-dc60-409b-bc5a-a71c93e6fdb3"></video></td>
<td align="center"><video src="https://github.com/user-attachments/assets/c8d7ad13-eba5-4a9f-9df8-65aba260195c"></video></td>
</tr>
</tbody>
</table>


## 快速开始 🚀

  支持架构
- Windows
  - [x] windows.x86_64
  - [ ] windows.x86
- Linuxs
  - [x] linux.x86_64
  - [ ] linux.x86
  - [ ] linux.aarch64
  - [ ] linux.armv7

### 配置要求 📦

- 建议最低 CPU 4核或以上，内存 8G 或以上，显卡非必须，支持 cpu、cuda
- Windows 10、Debian 12 以上系统

### 前提条件 📦

- 不要使用 **中文路径**，避免出现一些无法预料的问题
- 请确保你的 **网络** 是正常的，VPN需要打开`全局流量`模式

### 安装步骤 🐳

1. 克隆下载

```shell
git clone https://github.com/xiesx123/CreatorBox.git & cd CreatorBox
```
 
2. 创建虚拟环境
```shell
conda create --name creatorbox python=3.11.11
```

3. 激活虚拟环境
```shell
conda activate creatorbox
```

4. 安装依赖环境
```shell
pip install -r requirements.txt
```

5. 启动
```shell
python run.py 
python run.py --host 0.0.0.0 --port 8000
```

### 访问界面 🌐

- 本机访问 http://127.0.0.1:8000
- 内外访问 http://172.18.0.1:8000 ip以实际打印为准👇 

  ```log
  INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
  INFO:     Started reloader process [16760] using StatReload
  2025-03-31 12:00:00.000 | INFO 12588 main.py:78 - CreatorBox http://172.18.0.1:8000 Run Success
  ```


## 常见问题 🤔

- ❓如何使用免费的OpenAI GPT-3.5模型

  [OpenAI宣布ChatGPT里面3.5已经免费了](https://openai.com/blog/start-using-chatgpt-instantly)，有开发者将其封装成了API，可以直接调用


- 模型下载失败，出现如下错误
  ```code
  An error occured while synchronizing the model Systran/faster-whisper-large-v3 from the Hugging Face Hub:
  An error happened while trying to locate the files on the Hub and we cannot find the appropriate snapshot folder for the
  specified revision on the local disk. Please check your internet connection and try again.
  Trying to load the model directly from the local cache, if it exists.
  ```
  解决方法：[通过国内镜像下载模型](https://hf-mirror.com)


## 反馈建议 📢

- 可以提交 [discussions](https://github.com/xiesx123/CreatorBox/discussions)
  或者 [send email](mailto:xiesx123@gmail.com?subject=CreatoxBox%20Discussions&body=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20project.%20Could%20you%20provide%20more%20details?)。


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=xiesx123/CreatorBox&type=Date)](https://star-history.com/#xiesx123/CreatorBox&Date)