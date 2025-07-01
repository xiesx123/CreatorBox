<div align="center">
<h1 align="center">CreatorBox 💸</h1>

<!-- <p align="center">
  <a href="https://github.com/xiesx123/CreatorBox/stargazers">
    <img src="https://img.shields.io/badge/Stars-%E2%9D%A4-red?style=for-the-badge" alt="Stargazers">
  </a>
</p> -->
[![VitePress](https://img.shields.io/badge/Vitepress-Doc-3E63DD?logo=markdown)](https://xiesx123.github.io/CreatorBox)
[![Discord](https://img.shields.io/badge/Discord-Online-44CC11?logo=discord&logoColor=white)](https://discord.gg/ZSeETM6bsS)
![Version](https://img.shields.io/github/tag/xiesx123/CreatorBox.svg?style=flat&label=Release)
![GitHub stars](https://img.shields.io/github/stars/xiesx123/CreatorBox)
[![Google Colab](https://img.shields.io/badge/Google_Colab-Launch-yellow?logo=googlecolab&)](https://colab.research.google.com/drive/1VFN9991PEg2mRWWwdKhAdAmQyut7Wfu5?usp=sharing)
[![Kaggle](https://img.shields.io/badge/Kaggle-Launch-blue?logo=kaggle)](https://www.kaggle.com/code/xiesx123/creatorbox)

<h3>English | <a href="README_ZH.md">中文</a></h3>

🚀🎬 Flexible, efficient, and scalable toolbox for editing and dubbing, unleashing creative potential

<h4>Web Interface</h4>

![](/docs/images/main.png)

<h4>Dubbing/Editing</h4>

<table>
  <thead>
    <tr>
      <th align="center"><g-emoji class="g-emoji" alias="arrow_forward">🔧</g-emoji> Dubbing</th>
      <th align="center"><g-emoji class="g-emoji" alias="arrow_forward">✂️</g-emoji> Editing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <img src="docs/images/debug.jpg" alt="Click to watch video">
      </td>
      <td align="center">
        <img src="docs/images/jianying.jpg" alt="Click to watch video">
      </td>
    </tr>
  </tbody>
</table>

<h4>Video Demonstration</h4>

<table>
  <thead>
    <tr>
      <th align="center"><g-emoji class="g-emoji" alias="arrow_forward">▶️ Original</th>
      <th align="center"><g-emoji class="g-emoji" alias="arrow_forward">▶️ Dubbed</th>
    </tr>
  </thead>
  <!-- A Chinese Odyssey -->
  <tbody>
    <tr>
      <td align="center"><video
          src="https://github.com/user-attachments/assets/b6e30353-5b08-4c12-8407-8d759233d193"></video></td>
      <td align="center"><video
          src="https://github.com/user-attachments/assets/f57363c5-3110-4b1b-be3f-769c0e65fe9a"></video></td>
    </tr>
  </tbody>
   <!-- Job Interview -->
   <tbody>
    <tr>
      <td align="center"><video
          src="https://github.com/user-attachments/assets/327b819c-c811-4265-960b-83117e0da670"></video></td>
      <td align="center"><video
          src="https://github.com/user-attachments/assets/ed6449df-dd04-45f0-9ab1-ce4a2a5b600c"></video></td>
    </tr>
  </tbody>
  <!-- Black Myth-->
   <tbody>
    <tr>
      <td align="center"><video
          src="https://github.com/user-attachments/assets/c68c376e-54ef-4a6b-a195-fbe926c0de37"></video></td>
      <td align="center"><video
          src="https://github.com/user-attachments/assets/e9424df6-0986-4118-af82-b5f140398471"></video></td>
    </tr>
  </tbody>
  <!-- Product Introduction-->
   <tbody>
    <tr>
      <td align="center"><video
          src="https://github.com/user-attachments/assets/a1c9ea12-a3a0-4d0d-9d68-43659e6cc180"></video></td>
      <td align="center"><video
          src="https://github.com/user-attachments/assets/6babdb77-90db-4ea7-b6eb-9614438fa0f1"></video></td>
    </tr>
  </tbody>

</table>


</div>

## 📦 Quick Start

👉 Refer to the usage guide: [Local Installation](https://xiesx123.github.io/CreatorBox/deploy-local) | [Remote Deployment](https://xiesx123.github.io/CreatorBox/deploy-colab)


## 🎨 Applicable Scenarios

- 🎥 **Content Creators**: Optimize video dubbing, translation, and editing workflows to enhance efficiency and unleash creative potential

- 🌍 **Multilingual Translation/Dubbing**: Create localized content for overseas audiences and publish across languages

- ⚙️ **Independent Deployment**: Deploy locally with flexible configurations to ensure privacy

## 🎯 Features

- **🎤 Subtitle Recognition**

  Accurately transcribe voices from videos and audio, with flexible configuration to adapt to different devices and scenarios, ensuring high-quality text generation

- **🌐 Language Translation**

  Translate between multiple languages, switch translation providers, and adjust advanced parameters to optimize translation results and overcome language barriers

- **🎧 Speech Synthesis**

  A rich library of voices and customization options for personalized dubbing experiences, meeting creative needs with real-time previews for precise creation

- **✂️ Draft Editing**

  Export materials to editing tools with multi-dimensional control over visuals, audio, and subtitles, aiding post-production adjustments and customization

- **🧩 Application Components**

  Built-in application components for efficient collaboration and flexible usage, catering to diverse user needs

- **🔧 Preview and Debugging**

  Flexible and efficient configuration adjustments to ensure perfect presentation at every stage, enhancing creation efficiency and quality

## 📅 Planned Support

### Subtitles
- [x] Multiple Providers: Support switching between `Srt Source Subtitles` and `FasterWhisper`
- [x] Automatic Video Download
- [x] Audio Noise Reduction and Separation
- [x] Subtitle Transcription
- [x] Voice Alignment
- [x] Multi-Speaker Recognition

### Translation

- [x] Multiple Providers: Support switching between `Gemini` and `DashScope`
- [x] Custom Models and Prompt Commands
- [x] Batch Processing for Long Texts


### Speech

- [x] Multiple Providers: Support switching between `EdgeTTS`, `F5TTS`, `CoquiTTS`, and `CosyVoice2`
- [x] Real-Time Speech Synthesis and Preview
- [x] Voice Library: Includes `Built-in`, `Video`, and `Custom` voice types
- [x] Voice Cloning: Supports `Voice Cloning`, `Voice Commands`, `Voice Conversion`, and `Cross-Language Cloning`

### Draft

- [x] Track Control: Supports up to `6` tracks for `Visuals`, `Audio`, and `Subtitles`
- [x] Subtitle Generation: Customize `Size`, `Position`, `Color`, and `Outline` settings
- [x] Volume Adjustment: Control `Original Sound`, `Speech`, and `Background Music` volumes

### Applications

- [x] Material Extraction: Extract draft materials such as videos, audio, and images.
- [x] Visual Element Removal: Remove subtitles, watermarks, corner marks, and other visual elements.
- [x] Noise Reduction and Separation: Enhance voice quality and separate vocals from background tracks.
- [x] Scene Detection: Automatically detect scene transitions and export segmented clips.
- [x] Subtitle Extraction: Use OCR to recognize embedded subtitles and generate editable text.

### Others
- [x] Dubbing Modes: Choose between `Video`, `Audio`, and `Adaptive` modes
- [x] Translation Modes: Translate videos from the original language to another
- [ ] Narration Mode: Planned...
- [ ] Automated Posting

## Feedback and Suggestions 📢

- Submit via [Issues](https://github.com/xiesx123/CreatorBox/issues), [Discussions](https://github.com/xiesx123/CreatorBox/discussions), or [Email](mailto:xiesx123@gmail.com?subject=CreatoxBox%20Discussions&body=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20project.%20Could%20you%20provide%20more%20details?).

- Welcome to join [Discord](https://discord.gg/ZSeETM6bsS) for discussions on usage or new features.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=xiesx123/CreatorBox&type=Date)](https://star-history.com/#xiesx123/CreatorBox&Date)

