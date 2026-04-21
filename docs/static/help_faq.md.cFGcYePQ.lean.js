import{_ as d,C as t,c as k,o as c,j as s,a,G as n,aH as p,w as e}from"./chunks/framework.DUuAilvN.js";const x=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"help/faq.md","filePath":"_en/help/faq.md","lastUpdated":1776744857000}'),g={name:"help/faq.md"},u={class:"details custom-block"},E={class:"details custom-block"},y={class:"details custom-block"};function F(m,i,b,C,v,f){const h=t("NolebasePageProperties"),l=t("LiteTree"),r=t("PluginTabsTab"),o=t("PluginTabs");return c(),k("div",null,[i[12]||(i[12]=s("h1",{id:"faq",tabindex:"-1"},[a("FAQ "),s("a",{class:"header-anchor",href:"#faq","aria-label":'Permalink to "FAQ"'},"​")],-1)),i[13]||(i[13]=a()),n(h),i[14]||(i[14]=s("p",null,"Summary of installation and usage issues",-1)),i[15]||(i[15]=a()),i[16]||(i[16]=s("h2",{id:"outputs",tabindex:"-1"},[a("Outputs "),s("a",{class:"header-anchor",href:"#outputs","aria-label":'Permalink to "Outputs"'},"​")],-1)),i[17]||(i[17]=a()),i[18]||(i[18]=s("h3",{id:"project-directory",tabindex:"-1"},[a("Project Directory "),s("a",{class:"header-anchor",href:"#project-directory","aria-label":'Permalink to "Project Directory"'},"​")],-1)),i[19]||(i[19]=a()),s("details",u,[i[1]||(i[1]=s("summary",null,[a("Explanation of "),s("strong",null,[s("code",null,"directories")]),a(" and "),s("strong",null,[s("code",null,"files")]),a(" under the "),s("code",null,"CreatorBox"),a(" folder")],-1)),i[2]||(i[2]=a()),n(l,null,{default:e(()=>[...i[0]||(i[0]=[a(`
webapp                              // Webapp Directory
    + cache                         // Cache
        llm/                        // LLM
        request/                    // Request
    + data                          // Data
        - db.db                     // Application Data
        - settings.json             // User Preferences
        - token.json                // User Login Tokens
    + download                      // Download
        - ...                       
    - dubb                          // Dubbing
        - test                      // Video Directory
            + _v1                   // Target Output Directory
                - test.json         // Final Data
                - test.mp4          // Final Video
                + test.srt          // Final Subtitles
                + test.wav          // Final Audio
                + dubbing           // Dubbing Folder
                    - 0.wav         // Segment, Format: (Index.wav)
                    - ...               
                + tts                   // Text-to-Speech Folder
                    - 00_c94f3e.wav     // Segment, Format: (Index_MD5.wav)
                    - ...               
            + draft                     // Draft Folder
                - draft_input.json      // Draft Content Input
                - draft_content.json    // Draft Output from Editing Software
            + stems                     // Audio Separation Folder
                - vocals.wav            // Speaker's Voice
                - instrumental.wav      // Background Instrumental
            + voices                    // Voice Processing Folder
                - 0.wav                 // Segment, Format: (Index.wav)
                - ...                   
            + test.mp4                  // Source Video
            + test.png                  // Source Cover
            + test.srt                  // Source Subtitles
            + test.wav                  // Source Audio
    + extensions                        // Extensions
        - ...                           
    + logs                    // Logs
        - ...                 
    + sample                  // Sample
        - ...                 
    + spk                     // Voices
        - ...                 
    + temp                    // Temporary
        - ...                 
    + tts                     // TTS
        - ...                 
    + upload                  // Upload
        - ...                 
`,-1)])]),_:1})]),i[20]||(i[20]=a()),i[21]||(i[21]=s("h3",{id:"model-directory",tabindex:"-1"},[a("Model Directory "),s("a",{class:"header-anchor",href:"#model-directory","aria-label":'Permalink to "Model Directory"'},"​")],-1)),i[22]||(i[22]=a()),s("details",E,[i[4]||(i[4]=s("summary",null,[a("Explanation of "),s("strong",null,[s("code",null,"directories")])],-1)),i[5]||(i[5]=a()),n(l,null,{default:e(()=>[...i[3]||(i[3]=[a(`
models
    + creatorbox
        - dh
        - uvr
        - ...
    + huggingface
        - hub
            - .locks
            - models--SWivid--F5-TTS
            - models--charactr--vocos-mel-24khz
            - models--pyannote--segmentation-3.0
            - models--pyannote--speaker-diarization-3.1
            - models--pyannote--wespeaker-voxceleb-resnet34-LM
            - models--Systran--faster-whisper-base
            - models--Systran--faster-whisper-large-v2
            - models--Systran--faster-whisper-medium
            - ...
    + modelscope
        - iic
            - CosyVoice3-0.5B
            - emotion2vec
            - ...
    + torch
        - hub
            - big-lama.pt
            - ...
`,-1)])]),_:1}),i[6]||(i[6]=a()),i[7]||(i[7]=s("ul",null,[s("li",null,[s("p",null,[a("On the first run, models will be automatically downloaded to the "),s("code",null,"models"),a(" directory.")])]),a(),s("li",null,[s("p",null,[a("You can customize the download location by specifying it via the "),s("code",null,"CREATORBOX_MODEL"),a(" environment variable or in the "),s("code",null,"/settings"),a(" page. The changes will take effect after a restart.")])])],-1))]),i[23]||(i[23]=a()),i[24]||(i[24]=s("h2",{id:"installation",tabindex:"-1"},[a("Installation "),s("a",{class:"header-anchor",href:"#installation","aria-label":'Permalink to "Installation"'},"​")],-1)),i[25]||(i[25]=a()),i[26]||(i[26]=s("h3",{id:"graphics-card-usage",tabindex:"-1"},[a("Graphics card usage "),s("a",{class:"header-anchor",href:"#graphics-card-usage","aria-label":'Permalink to "Graphics card usage"'},"​")],-1)),i[27]||(i[27]=a()),s("details",y,[i[11]||(i[11]=p("",10)),n(o,null,{default:e(()=>[n(r,{label:"Tesla T4"},{default:e(()=>[...i[8]||(i[8]=[s("div",{class:"language-logs vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"logs"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",null,"Sat Jul 12 14:42:54 2025")]),a(`
`),s("span",{class:"line"},[s("span",null,"+---------------------------------------------------------------------------------------+")]),a(`
`),s("span",{class:"line"},[s("span",null,"| NVIDIA-SMI 560.35.03            Driver Version: 560.35.03      CUDA Version: 12.6     |")]),a(`
`),s("span",{class:"line"},[s("span",null,"|---------------------------------------+------------------------+----------------------+")]),a(`
`),s("span",{class:"line"},[s("span",null,"| GPU  Name               Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |")]),a(`
`),s("span",{class:"line"},[s("span",null,"| Fan  Temp   Perf        Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |")]),a(`
`),s("span",{class:"line"},[s("span",null,"|                                       |                        |               MIG M. |")]),a(`
`),s("span",{class:"line"},[s("span",null,"|=======================================+========================+======================|")]),a(`
`),s("span",{class:"line"},[s("span",null,"|   0  Tesla T4                     Off |   00000000:00:04.0 Off |                    0 |")]),a(`
`),s("span",{class:"line"},[s("span",null,"| N/A   39C    P8            9W /   70W |       1MiB /  15360MiB |      0%      Default |")]),a(`
`),s("span",{class:"line"},[s("span",null,"|                                       |                        |                  N/A |")]),a(`
`),s("span",{class:"line"},[s("span",null,"+---------------------------------------+------------------------+----------------------+")]),a(`
`),s("span",{class:"line"},[s("span",null,"|   1  Tesla T4                     Off |   00000000:00:05.0 Off |                    0 |")]),a(`
`),s("span",{class:"line"},[s("span",null,"| N/A   41C    P8            9W /   70W |       1MiB /  15360MiB |      0%      Default |")]),a(`
`),s("span",{class:"line"},[s("span",null,"|                                       |                        |                  N/A |")]),a(`
`),s("span",{class:"line"},[s("span",null,"+---------------------------------------+------------------------+----------------------+")])])])],-1)])]),_:1}),i[10]||(i[10]=a()),n(r,{label:"NVIDIA GeForce RTX 3080"},{default:e(()=>[...i[9]||(i[9]=[s("div",{class:"language-logs vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"logs"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",null,"Sat Apr 11 12:50:46 2026")]),a(`
`),s("span",{class:"line"},[s("span",null,"+-----------------------------------------------------------------------------------------+")]),a(`
`),s("span",{class:"line"},[s("span",null,"| NVIDIA-SMI 591.74                 Driver Version: 591.74         CUDA Version: 13.1     |")]),a(`
`),s("span",{class:"line"},[s("span",null,"+-----------------------------------------+------------------------+----------------------+")]),a(`
`),s("span",{class:"line"},[s("span",null,"| GPU  Name                  Driver-Model | Bus-Id          Disp.A | Volatile Uncorr. ECC |")]),a(`
`),s("span",{class:"line"},[s("span",null,"| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |")]),a(`
`),s("span",{class:"line"},[s("span",null,"|                                         |                        |               MIG M. |")]),a(`
`),s("span",{class:"line"},[s("span",null,"|=========================================+========================+======================|")]),a(`
`),s("span",{class:"line"},[s("span",null,"|   0  NVIDIA GeForce RTX 3080      WDDM  |   00000000:01:00.0  On |                  N/A |")]),a(`
`),s("span",{class:"line"},[s("span",null,"|  0%   50C    P0            114W /  340W |     519MiB /  10240MiB |      2%      Default |")]),a(`
`),s("span",{class:"line"},[s("span",null,"|                                         |                        |                  N/A |")]),a(`
`),s("span",{class:"line"},[s("span",null,"+-----------------------------------------+------------------------+----------------------+")])])])],-1)])]),_:1})]),_:1})]),i[28]||(i[28]=p("",42))])}const D=d(g,[["render",F]]);export{x as __pageData,D as default};
