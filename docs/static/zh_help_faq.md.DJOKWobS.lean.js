import{_ as o,C as t,c as d,o as g,j as s,a,G as n,aH as h,w as l}from"./chunks/framework.DUuAilvN.js";const x=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"zh/help/faq.md","filePath":"_zh/help/faq.md","lastUpdated":1776744857000}'),c={name:"zh/help/faq.md"},E={class:"details custom-block"},u={class:"details custom-block"},y={class:"details custom-block"};function F(b,i,C,m,v,B){const r=t("NolebasePageProperties"),e=t("LiteTree"),p=t("PluginTabsTab"),k=t("PluginTabs");return g(),d("div",null,[i[12]||(i[12]=s("h1",{id:"常见问题",tabindex:"-1"},[a("常见问题 "),s("a",{class:"header-anchor",href:"#常见问题","aria-label":'Permalink to "常见问题"'},"​")],-1)),i[13]||(i[13]=a()),n(r),i[14]||(i[14]=s("p",null,"安装使用问题汇总",-1)),i[15]||(i[15]=a()),i[16]||(i[16]=s("h2",{id:"目录",tabindex:"-1"},[a("目录 "),s("a",{class:"header-anchor",href:"#目录","aria-label":'Permalink to "目录"'},"​")],-1)),i[17]||(i[17]=a()),i[18]||(i[18]=s("h3",{id:"项目目录",tabindex:"-1"},[a("项目目录 "),s("a",{class:"header-anchor",href:"#项目目录","aria-label":'Permalink to "项目目录"'},"​")],-1)),i[19]||(i[19]=a()),s("details",E,[i[1]||(i[1]=s("summary",null,[a("说明 "),s("code",null,"CreatorBox"),a(" 文件夹下的 "),s("strong",null,[s("code",null,"目录")]),a(" 和 "),s("strong",null,[s("code",null,"文件")])],-1)),i[2]||(i[2]=a()),n(e,null,{default:l(()=>[...i[0]||(i[0]=[a(`
webapp                              // 应用目录
    + cache                         // 缓存
        llm/                        // LLM
        request/                    // 请求
    + data                          // 数据
        - db.db                     // 程序数据文件
        - settings.json             // 用户偏好设置
        - token.json                // 用户登录令牌
    + download                      // 下载
        - ...                       
    - dubb                          // 配音
        - test                      // 视频目录
            + _v1                   // 目标输出目录
                - test.json         // 最终数据
                - test.mp4          // 最终视频
                + test.srt          // 最终字幕
                + test.wav          // 最终音频
                + dubbing           // 配音文件夹
                    - 0.wav         // 片段，格式：（下标.wav）
                    - ...               
                + tts               // 语音合成文件夹
                    - 00_c94f3e.wav // 片段，格式：（下标_MD5.wav）
                    - ...               
            + draft                 // 草稿文件夹
                - draft_input.json  // 草稿内容输入
                - draft_content.json // 剪映草稿输出
            + stems                 // 音轨分离文件夹
                - vocals.wav        // 说话人声
                - instrumental.wav  // 背景伴奏
            + voices                // 人声处理文件夹
                - 0.wav             // 片段，格式：（下标.wav）
                - ...                   
            + test.mp4              // 来源视频
            + test.png              // 来源封面
            + test.srt              // 来源字幕
            + test.wav              // 来源音频
    + extensions                    // 扩展
        - ...                           
    + logs                          // 日志
        - ...                 
    + sample                        // 示例
        - ...                 
    + spk                           // 说话人音色
        - ...                 
    + temp                          // 临时
        - ...                 
    + tts                           // 语音合成试听
        - ...                 
    + upload                        // 上传
        - ...                 
`,-1)])]),_:1})]),i[20]||(i[20]=a()),i[21]||(i[21]=s("h3",{id:"模型目录",tabindex:"-1"},[a("模型目录 "),s("a",{class:"header-anchor",href:"#模型目录","aria-label":'Permalink to "模型目录"'},"​")],-1)),i[22]||(i[22]=a()),s("details",u,[i[4]||(i[4]=s("summary",null,[a("说明 "),s("strong",null,[s("code",null,"目录")])],-1)),i[5]||(i[5]=a()),n(e,null,{default:l(()=>[...i[3]||(i[3]=[a(`
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
`,-1)])]),_:1}),i[6]||(i[6]=a()),i[7]||(i[7]=s("ul",null,[s("li",null,[s("p",null,[a("首次运行会检测下载模型，自动下载到 "),s("code",null,"models"),a(" 目录下")])]),a(),s("li",null,[s("p",null,[a("自定义下载位置，可以通过 "),s("code",null,"CREATORBOX_MODEL"),a(" 环境变量指定，或者在 "),s("code",null,"/settings"),a(" 页指定，重启后生效")])])],-1))]),i[23]||(i[23]=a()),i[24]||(i[24]=s("h2",{id:"安装",tabindex:"-1"},[a("安装 "),s("a",{class:"header-anchor",href:"#安装","aria-label":'Permalink to "安装"'},"​")],-1)),i[25]||(i[25]=a()),i[26]||(i[26]=s("h3",{id:"显卡使用",tabindex:"-1"},[a("显卡使用 "),s("a",{class:"header-anchor",href:"#显卡使用","aria-label":'Permalink to "显卡使用"'},"​")],-1)),i[27]||(i[27]=a()),s("details",y,[i[11]||(i[11]=h("",10)),n(k,null,{default:l(()=>[n(p,{label:"Tesla T4"},{default:l(()=>[...i[8]||(i[8]=[s("div",{class:"language-logs vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"logs"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",null,"Sat Jul 12 14:42:54 2025")]),a(`
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
`),s("span",{class:"line"},[s("span",null,"+---------------------------------------+------------------------+----------------------+")])])])],-1)])]),_:1}),i[10]||(i[10]=a()),n(p,{label:"NVIDIA GeForce RTX 3080"},{default:l(()=>[...i[9]||(i[9]=[s("div",{class:"language-logs vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"logs"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",null,"Sat Apr 11 12:50:46 2026")]),a(`
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
`),s("span",{class:"line"},[s("span",null,"+-----------------------------------------+------------------------+----------------------+")])])])],-1)])]),_:1})]),_:1})]),i[28]||(i[28]=h("",42))])}const P=o(c,[["render",F]]);export{x as __pageData,P as default};
