<div align="center">
<h1 align="center">CreatorBox 💸</h1>

<!-- <p align="center">
  <a href="https://github.com/xiesx123/CreatorBox/stargazers">
    <img src="https://img.shields.io/badge/Stars-%E2%9D%A4-red?style=for-the-badge" alt="Stargazers">
  </a>
</p> -->

![Version](https://img.shields.io/badge/version-v1.0.5-blue)
![GitHub stars](https://img.shields.io/github/stars/xiesx123/CreatorBox)
![Google Colab](https://img.shields.io/badge/Google_Colab-Running-yellow?logo=googlecolab&)

  <h3><a href="README.md">简体中文</a> | English</h3>  
  🚀🎬 Flexible, efficient, and scalable video editing voice-over pipeline for unleashing creative potential  
  <h4>Web Interface</h4>  

  ![](docs/main.jpg)  
  
  <h4>Debugging and Customization</h4>  
  <table>  
    <thead>  
      <tr>  
        <th align="center"><g-emoji class="g-emoji" alias="arrow_forward">🔧</g-emoji> Export Draft of Local Material</th>  
        <th align="center"><g-emoji class="g-emoji" alias="arrow_forward">✂️</g-emoji> Fine-tuning in Post-Editing</th>  
      </tr>  
    </thead>  
    <tbody>  
      <tr>  
        <td align="center"><image src="docs/debug.jpg"></image></td>
        <td align="center"><image src="docs/jianying.jpg"></image></td> 
      </tr>  
    </tbody>  
  </table>  
</div>  

## Use Cases 🎨  
- 🎥 **Self-media Creation**: Optimizes voice-over, editing, and translation processes, improving efficiency  

- 🎤 **Narration/Tutorial Production**: Provides professional voice-over and accurate subtitles  

- 🌍 **Multi-language Voice-Over/Translation**: Supports language switching to break language barriers  

- ⚙️ **Flexible Configuration/Local Deployment**: Local deployment to ensure privacy and meet customization needs  

## Features 🎯  
- **🎤 Intelligent Transcription**  
  Accurate transcription of voices in videos and audios, with flexible configuration to adapt to various devices and scenarios, ensuring high-quality text generation  

- **🗣️ Speaker Identification**  
  Automatically identifies multiple speakers in a video and assigns personalized voices based on gender, with flexible configuration to meet diverse creative needs  

- **🌐 Translation Function**  
  Supports translation between multiple languages, allows switching translation providers and adjusting advanced parameters for optimized translation results, easily crossing language barriers  

- **🎧 Speech Synthesis**  
  A rich voice library and customization options provide personalized voice-over experiences, with real-time previews to ensure accuracy 

- **📤 Export Feature**  
  Supports multiple creative modes, including video voice-over, translation, and narration, meeting diverse user needs  

- **✂️ Editing Drafts**  
  Supports exporting material to video editors with detailed control over screen, sound, and subtitles, aiding post-editing and customization  

- **🔧 Preview and Debugging**  
  Provides flexible and efficient configuration adjustments to ensure perfect presentation at each stage, improving creative efficiency and quality  

### Future Plans 📅  
- [x] Flexible configuration debugging, supporting adjustments for **`Subtitles`**, **`Speakers`**, **`Translation`**, **`Voice-over`**  
- [x] Voice Cloning  
  - [x] **Speech Synthesis**, supports multiple voices, speed adjustments, and **real-time preview**  
  - [ ] **Voice Cloning**, to meet personalized needs  
- [x] Generation Mode Switching  
  - [x] Supports [**Voice-over Mode**](https://github.com/xiesx123/CreatorBox/discussions/2), with three voice-over modes: `Video`, `Audio`, and `Adaptive`  
  - [x] Supports [**Translation Mode**](https://github.com/xiesx123/CreatorBox/discussions/1), translating video from its original language to another  
  - [ ] Supports Narration Mode for personalized voice-overs for videos  
- [x] Exporting Editing Drafts  
  - [x] **Track Control**, supports controlling up to **6** tracks for **`Screen`**, **`Sound`**, and **`Subtitles`**  
  - [x] **Subtitle Generation**, with customization options for **`Size`**, **`Position`**, **`Color`**, **`Outline`**  
  - [x] **Volume Control**, for adjusting **`Original Sound`**, **`Speech`**, **`Background Music`**  
  - [ ] **Background Music**, random or designated music files  
  - [ ] **Transition Control**, for longer videos  
- [ ] Support for long videos, with segment-based processing and control to fit different hardware capabilities  
- [ ] Automated publishing  

## Video Demonstration 📺  
### Voice-Over Mode  
<table>  
  <thead>  
    <tr>  
      <th align="center"><g-emoji class="g-emoji" alias="arrow_forward">▶️</g-emoji> Single Person - Chinese Video</th>  
      <th align="center"><g-emoji class="g-emoji" alias="arrow_forward">▶️</g-emoji> Single Person - English Video</th>  
    </tr>  
  </thead>  
  <tbody>  
    <tr>  
      <td align="center"><video src="https://github.com/user-attachments/assets/27e466a9-1817-4276-ad04-42b8b9ffafe3"></video></td>  
      <td align="center"><video src="https://github.com/user-attachments/assets/35f05c2d-7b55-41af-8c1c-31cf4d30216a"></video></td>  
    </tr>  
  </tbody>  
</table>  

### Translation Mode  
<table>  
  <thead>  
    <tr>  
      <th align="center"><g-emoji class="g-emoji" alias="arrow_forward">▶️</g-emoji> Multiple Speakers - English Video</th>  
      <th align="center"><g-emoji class="g-emoji" alias="arrow_forward">▶️</g-emoji> Multiple Speakers - Chinese-English Mix with Subtitles</th>  
    </tr>  
  </thead>  
  <tbody>  
    <tr>  
      <td align="center"><video src="https://github.com/user-attachments/assets/7e6d0311-dc60-409b-bc5a-a71c93e6fdb3"></video></td>  
      <td align="center"><video src="https://github.com/user-attachments/assets/c8d7ad13-eba5-4a9f-9df8-65aba260195c"></video></td>  
    </tr>  
  </tbody>  
</table>  

## Quick Start 🚀  
### System Requirements 📦  
- Operating systems: `Windows10+` 、 `MacOS 11+` 、 `Debian12+` 系统
- Supports architectures： `windows.x86_64` 、 `linux.x86_64` 、 `darwin_x86_64`
- Recommended minimum CPU: `4 cores` or more, memory: `8GB` or more, GPU is optional, supports `CPU` or `CUDA`  


### Prerequisites 📦  
- Avoid using **Chinese paths** to prevent unexpected issues  
- Ensure **Network** is working properly, VPN should be set to `Global Traffic Mode`  

### Installation Steps 🐳  
1. Clone and navigate to the directory  
    ```shell  
    git clone https://github.com/xiesx123/CreatorBox.git && cd CreatorBox  
    ```  
2. Create a virtual environment  
    ```shell  
    conda create --name creatorbox python=3.11.11  
    ```  
3. Activate the virtual environment  
    ```shell  
    conda activate creatorbox  
    ```  
4. Install dependencies  
    ```shell  
    pip install -r requirements.txt  
    ```  
5. Run the application  
    ```shell  
    python run.py  
    ```  

### Access the Interface 🌐  
- Local access: http://127.0.0.1:8000  
- External access: http://172.18.0.1:8000 (depending on the actual setup)👇  

    ```log  
    INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)  
    INFO:     Started reloader process [16760] using StatReload  
    2025-03-31 12:00:00.000 | INFO 12588 main.py:78 - CreatorBox http://172.18.0.1:8000 Run Success  
    ```  

## FAQ 🤔  
- ❓ **Model download failed** with the following error:  

    ```log  
    An error occured while synchronizing the model Systran/faster-whisper-large-v3 from the Hugging Face Hub:  
    An error happened while trying to locate the files on the Hub and we cannot find the appropriate snapshot folder for the specified revision on the local disk. Please check your internet connection and try again.  
    Trying to load the model directly from the local cache, if it exists.  
    ```  
    Solution: [Download model through domestic mirrors](https://hf-mirror.com)  

## Feedback 📢  
- You can submit [discussions](https://github.com/xiesx123/CreatorBox/discussions) or [send an email](mailto:xiesx123@gmail.com?subject=CreatoxBox%20Discussions&body=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20project.%20Could%20you%20provide%20more%20details?)  

## Star History  
[![Star History Chart](https://api.star-history.com/svg?repos=xiesx123/CreatorBox&type=Date)](https://star-history.com/#xiesx123/CreatorBox&Date)
