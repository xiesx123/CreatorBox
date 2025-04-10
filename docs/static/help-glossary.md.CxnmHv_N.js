import{_ as a,c as n,o as p,ah as i}from"./chunks/framework.1uePi9Vx.js";const r=JSON.parse('{"title":"名词解释","description":"","frontmatter":{},"headers":[],"relativePath":"help-glossary.md","filePath":"help-glossary.md","lastUpdated":1744286755000}'),l={name:"help-glossary.md"};function t(e,s,h,k,c,d){return p(),n("div",null,s[0]||(s[0]=[i(`<h1 id="名词解释" tabindex="-1">名词解释 <a class="header-anchor" href="#名词解释" aria-label="Permalink to &quot;名词解释&quot;">​</a></h1><h2 id="目录说明" tabindex="-1">目录说明 <a class="header-anchor" href="#目录说明" aria-label="Permalink to &quot;目录说明&quot;">​</a></h2><p><code>webapp</code> 文件夹下 <strong><code>子目录</code></strong>、<strong><code>文件</code></strong> 解释</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├─cache 缓存</span></span>
<span class="line"><span>│      1020b9c670b0a7cd.json  Etts配音数据</span></span>
<span class="line"><span>│      llm.db                 大模型缓存数据</span></span>
<span class="line"><span>│      redirects.sqlite       Http重定向缓存</span></span>
<span class="line"><span>│      </span></span>
<span class="line"><span>├─data 数据</span></span>
<span class="line"><span>│      mounts.json  </span></span>
<span class="line"><span>│      speaker.json</span></span>
<span class="line"><span>│      </span></span>
<span class="line"><span>├─logs 日志</span></span>
<span class="line"><span>│      creator_2025-04-10.log</span></span>
<span class="line"><span>│      </span></span>
<span class="line"><span>├─temp 零时</span></span>
<span class="line"><span>│  └─test 视频目录</span></span>
<span class="line"><span>│      │  test.jpg  源封面</span></span>
<span class="line"><span>│      │  test.mp4  源视频（此视频来源于 \`upload\` 不会影响源视频）</span></span>
<span class="line"><span>│      │  test.srt  源字幕</span></span>
<span class="line"><span>│      │  test.wav  源音频</span></span>
<span class="line"><span>│      │  test_001.json 数据，格式（文件名_标识）</span></span>
<span class="line"><span>│      │  test_001.srt  字幕，格式（文件名_标识）</span></span>
<span class="line"><span>│      │  test_001.wav  音频，格式（文件名_标识）</span></span>
<span class="line"><span>│      │  </span></span>
<span class="line"><span>│      ├─dubbing 配音文件夹</span></span>
<span class="line"><span>│      │      0.wav</span></span>
<span class="line"><span>│      │      .....</span></span>
<span class="line"><span>│      │      test.wav</span></span>
<span class="line"><span>│      │      </span></span>
<span class="line"><span>│      ├─json 数据文件夹</span></span>
<span class="line"><span>│      │      test_draft_content.json 草稿输出</span></span>
<span class="line"><span>│      │      test_draft_input.json   草稿内容输入 </span></span>
<span class="line"><span>│      │      test_whisper.json       原始转录内容 </span></span>
<span class="line"><span>│      │      </span></span>
<span class="line"><span>│      ├─stems 音频分离文件夹</span></span>
<span class="line"><span>│      │      test_vocals.wav         说话人声</span></span>
<span class="line"><span>│      │      test_vocals_bg.wav      背景音乐</span></span>
<span class="line"><span>│      │      </span></span>
<span class="line"><span>│      ├─tts  语言合成文件夹</span></span>
<span class="line"><span>│      │      00_c94f3e.wav</span></span>
<span class="line"><span>│      │      .....</span></span>
<span class="line"><span>│      │      test.wav</span></span>
<span class="line"><span>│      │      </span></span>
<span class="line"><span>│      └─voices 人声处理文件夹</span></span>
<span class="line"><span>│              0.wav</span></span>
<span class="line"><span>│              .....     </span></span>
<span class="line"><span>├─tts 试听</span></span>
<span class="line"><span>│      zh-CN_鹤道人_1.0_19.wav</span></span>
<span class="line"><span>│      zh-CN_四妹_1.0_19.wav</span></span>
<span class="line"><span>│      .....</span></span>
<span class="line"><span></span></span>
<span class="line"><span>└─upload 上传</span></span>
<span class="line"><span>        test.mp4</span></span></code></pre></div><h2 id="数据说明" tabindex="-1">数据说明 <a class="header-anchor" href="#数据说明" aria-label="Permalink to &quot;数据说明&quot;">​</a></h2><p>以 <code>test_001.json</code> 为例</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;idx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                                   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 下标</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;spk&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                                   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 说话人</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2590</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开始时间 (ms)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;end&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2979</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 结束时间 (ms)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;duration&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 时长 (s)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;臭猴子&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 原始内容</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;text_trans&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hey, monkey.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 翻译</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;voice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;四妹&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 语音</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;webapp/temp/test4/dubbing/0.wav&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 配音</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                // 语速</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div>`,7)]))}const E=a(l,[["render",t]]);export{r as __pageData,E as default};
