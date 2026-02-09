layui.define(['layer', 'table', 'form', 'util', 'i18n', 'notice', `enums`, 'tool'], function (exports) {
    var layer = layui.layer;
    var table = layui.table;
    var form = layui.form;
    var util = layui.util;
    var toast = layui.notice;
    var i18n = layui.i18n;
    var enums = layui.enums;
    var tool = layui.tool;
    var $ = layui.jquery;

    // ================================ 常量定义 ================================

    var CREATORBOX = "dubbing";
    var TTS_EDGE = "edge";
    var TTS_AZUR = "azure";
    var TTS_ELAB = "elab";
    var TTS_VOXM = "voxm";
    var TTS_ITTS = "itts";
    var TTS_COSY = "cosy";
    var TTS_GTTS = "gtts";

    // 提供商分组常量
    var AZURE_PROVIDERS = [TTS_EDGE, TTS_AZUR];
    var SPK_SAMPLE_PROVIDERS = [TTS_VOXM, TTS_ITTS, TTS_COSY, TTS_GTTS];
    var RATE_PROVIDERS = [TTS_EDGE, TTS_AZUR, TTS_ELAB, TTS_COSY, TTS_GTTS];
    var PITCH_PROVIDERS = [TTS_EDGE, TTS_AZUR];
    var SEED_PROVIDERS = [TTS_ELAB, TTS_COSY, TTS_GTTS];
    var SERVER_PROVIDERS = [TTS_VOXM, TTS_ITTS, TTS_COSY, TTS_GTTS];

    // ================================ 数据存储 ================================

    var form_json = {};
    var table_json = [];
    var voice_json = {};
    var providers = [];
    var player;

    // ================================ 公共函数 ================================

    // 清空音色列表
    var clear_voice_list = function () {
        voice_json = {};
        $("#tts_voice").empty();
        $("#tts_role").empty();
        $("#tts_style").empty();
        form_json.tts_voice = null;
        form_json.tts_role = null;
        form_json.tts_style = null;
        form.render('select');
    };

    // 解析音色选项文本并更新表单数据
    var parse_voice_option = function (selectedOption) {
        if (!selectedOption) return;

        // 获取 optgroup 信息
        var selectedOptgroup = selectedOption.closest('optgroup');
        form_json.tts_voice_type = selectedOptgroup ? selectedOptgroup.id : null;

        // 解析选项文本：格式为 "序号.性别 - 地区 - 说话人"
        var cleaned = selectedOption.text.replace(/^\d+\./, "").trim();
        var parts = cleaned.split(" - ").map(function (s) { return s.trim(); });
        form_json.tts_gender = enums.gender(parts[0]);
        form_json.tts_locale = parts[1];
        form_json.tts_speaker = parts[2];
    };

    // 渲染 生成带 title 的表格单元格
    var render_cell_with_title = function (content, data) {
        var title = data.text + ' (' + (data.remarks || '') + ')';
        return '<div title="' + title + '">' + content + '</div>';
    };

    // 渲染 生成下拉选项 
    var render_option_html = function (list, prefix) {
        var html = '';
        var idx = 1;
        (list || []).forEach(function (obj) {
            var key = prefix ? prefix + '.' + obj : obj;
            html += '<option value="' + obj + '">' + (idx++) + '.' + i18n.trans(key) + '</option>\n';
        });
        return html;
    };

    // 渲染 Azure 角色和风格选项
    var render_azure_options_html = function () {
        if (!AZURE_PROVIDERS.includes(form_json.tts_provider)) return;

        var voice = voice_json[form_json.tts_voice];
        var extra = get_platform_extra(voice, form_json.tts_provider);
        if (!extra) return;

        // 角色列表
        var roles = extra.role || [];
        form_json.tts_role = Array.isArray(roles) && roles.length > 0 ? roles[0] : null;
        $("#tts_role").empty().append(render_option_html(roles, "role"));
        if (form_json.tts_role) {
            $('#tts_role option[value="' + form_json.tts_role + '"]').prop('selected', true);
        }

        // 风格列表
        var styles = extra.style || [];
        form_json.tts_style = Array.isArray(styles) && styles.length > 0 ? styles[0] : null;
        $("#tts_style").empty().append(render_option_html(styles, "style"));
        if (form_json.tts_style) {
            $('#tts_style option[value="' + form_json.tts_style + '"]').prop('selected', true);
        }

        // 风格强度
        if (form_json.tts_styledegree) {
            $('#tts_styledegree option[value="' + form_json.tts_styledegree + '"]').prop('selected', true);
        }
    };

    // 获取表单值
    var get_form_value = function (selector, defaultValue) {
        var value = $(selector).val();
        return value !== undefined && value !== null && value !== '' ? value : defaultValue;
    };

    // ================================ 播放功能 ================================

    // 播放音频 - 使用 APlayer
    var voice_play = function (url, name) {
        if (!player) {
            player = new APlayer({
                container: document.getElementById('aplayer'),
                fixed: true,
                mini: true,
                autoplay: true,
                loop: 'none',
                audio: []
            });

            // 监听错误事件
            player.on('error', function () {
                toast.error(i18n.trans('加载失败'));
            });

            // 播放结束后隐藏播放器
            player.on('ended', function () {
                var container = document.querySelector('.aplayer.aplayer-fixed');
                if (container) {
                    container.style.display = 'none';
                }
            });
        }

        // 显示播放器
        var container = document.querySelector('.aplayer.aplayer-fixed');
        if (container) {
            container.style.display = '';
        }

        // 清空播放列表并添加新音频
        player.list.clear();
        player.list.add({
            name: name || i18n.trans('音频'),
            artist: 'CreatorBox',
            url: url,
            cover: 'static/images/launcher.png'
        });

        // 延迟播放，确保音频已添加到列表
        setTimeout(function () {
            player.play();
        }, 1000);
    };

    // 获取平台特有字段
    var get_platform_extra = function (voice, provider) {
        if (!voice) return null;
        if (AZURE_PROVIDERS.includes(provider)) {
            return voice.azure || voice.edge || null;
        } else if (provider === TTS_ELAB) {
            return voice.elab || null;
        }
        return null;
    };

    // 播放 Azure 示例音频
    var play_azure_sample = function (key, val) {
        var voice = voice_json[form_json.tts_voice];
        var extra = get_platform_extra(voice, form_json.tts_provider);
        if (!extra || !extra.samples) return;
        var obj = extra.samples[key] || {};
        var value = (val && obj[val]) || obj[Object.keys(obj)[0]];
        if (value) {
            var url = 'https://ai.azure.com/speechassetscache/ttsvoice/Masterpieces/' + value + '.wav';
            voice_play(url, voice.speaker);
        }
    };

    // 播放 ElevenLabs 示例音频
    var play_elab_sample = function () {
        var voice = voice_json[form_json.tts_voice];
        var extra = get_platform_extra(voice, TTS_ELAB);
        if (extra && extra.samples) {
            voice_play(extra.samples, voice.speaker);
        }
    };

    // 播放本地音色示例
    var play_spk_sample = function () {
        var voice = voice_json[form_json.tts_voice];
        if (voice && voice.path && voice.duration > 0) {
            var url = '/file/download?path=' + voice.path;
            voice_play(url, voice.speaker);
        }
    };

    // 根据提供商播放示例
    var play_sample_by_provider = function (provider) {
        if (AZURE_PROVIDERS.includes(provider)) {
            play_azure_sample("role");
        } else if (provider === TTS_ELAB) {
            play_elab_sample();
        } else if (SPK_SAMPLE_PROVIDERS.includes(provider)) {
            play_spk_sample();
        }
    };

    // ================================ 请求处理 ================================

    // 构建音色搜索请求参数
    var voice_search_params = function (options) {
        options = options || {};
        var tts_provider = options.provider || form_json.tts_provider;
        var tts_model = options.model || form_json.tts_model;
        var tts_locale = options.locale || form_json.locale;
        var tts_gender = options.gender !== undefined ? parseInt(options.gender) : parseInt(form_json.tts_gender) || 1;
        var video_url = get_form_value("#video_url", form_json.video_url);
        var suffix = get_form_value("#suffix", form_json.suffix);
        var server = get_form_value("#tts_server", form_json.tts_server);

        return JSON.stringify({
            provider: tts_provider,
            model: tts_model,
            locale: tts_locale,
            extra: {
                file: video_url,
                suffix: suffix,
                server: server,
                gender: tts_gender,
            }
        });
    };

    // 音色搜索回调处理
    var voice_search_callback = function (response, autoPlay) {
        // 清空原有选项
        $("#tts_voice").empty();
        voice_json = {};

        if (response.data.length === 0) {
            toast.warning(i18n.trans('暂无可用语音'), i18n.trans('语音列表'));
        } else {
            toast.success(i18n.transFmt('format.voice_found', response.data.length), i18n.trans('语音列表'));
        }

        // 记录音色数据
        response.data.forEach(function (obj) {
            voice_json[obj.id] = obj;
        });

        // 转换显示对象（按类型分组）
        var wrappedData = response.data.reduce(function (acc, item) {
            var group = enums.voice(item.type);
            var existingGroup = acc.find(function (g) { return g.group === group; });
            if (existingGroup) {
                existingGroup.item.push(item);
            } else {
                acc.push({ type: item.type, group: group, item: [item] });
            }
            return acc;
        }, []);

        // 生成选项 HTML
        var selected_locale = $('select[name="locale"] option:selected').val();
        var html = '';
        var idx = 1;
        wrappedData.forEach(function (obj) {
            html += '<optgroup id="' + obj.type + '" label="' + obj.group + ' (' + obj.item.length + ')">\n';
            obj.item.forEach(function (item) {
                var locale = item.locale || selected_locale || i18n.trans('未知');
                var speaker = item.id === 0 && item.type === 2 ? i18n.trans('原声音色') : item.speaker;
                html += '<option value="' + item.id + '">' + (idx++) + '.' + enums.gender(item.gender) + ' - ' + locale + ' - ' + speaker + '</option>\n';
            });
            html += '</optgroup>\n';
        });

        $("#tts_voice").append(html);
        form.render('select');

        // 设置默认选中
        form_json.tts_voice = $("#tts_voice").val();

        // 恢复音色选中（首次加载时不自动播放）
        if (form_json.tts_voice) {
            // 更新音色相关信息
            var selectedOption = $('#tts_voice option:selected')[0];
            if (selectedOption) {
                // 解析音色选项
                parse_voice_option(selectedOption);

                // Azure 特殊处理：渲染角色和风格
                render_azure_options_html();

                // 渲染页面
                form.render('select');

                // 只有在 autoPlay 为 true 时才播放示例
                if (autoPlay === true) {
                    play_sample_by_provider(form_json.tts_provider);
                }
            }
        }
    };

    // ================================ 提供商管理 ================================

    // 根据语言获取提供商列表
    var get_providers_by_locale = function (locale, callback) {
        tool.get("tts/providers", { locale: locale }, function (response) {
            providers = response.data;

            // 更新提供商下拉框
            var $select = $("#tts_provider");
            // 优先使用 form_json 中缓存的提供商，其次使用下拉框当前值
            var cachedProvider = form_json.tts_provider || $select.val();
            $select.empty();

            providers.forEach(function (item) {
                if (item.enable) {
                    $select.append('<option value="' + item.provider + '">' + item.desc + '</option>');
                }
            });

            // 尝试恢复缓存的提供商
            var providerExists = providers.some(function (p) {
                return p.provider === cachedProvider && p.enable;
            });

            var needSearchVoice = false;
            if (providerExists) {
                // 恢复缓存的提供商
                $select.val(cachedProvider);
                form_json.tts_provider = cachedProvider;
                // 同步更新 model 和 server
                var cachedProviderItem = find_provider(cachedProvider);
                if (cachedProviderItem) {
                    form_json.tts_model = cachedProviderItem.model;
                    form_json.tts_server = cachedProviderItem.server;
                    $('input[name="tts_model"]').val(form_json.tts_model);
                    $('input[name="tts_server"]').val(form_json.tts_server);
                }
                needSearchVoice = true;
            } else if (providers.length > 0) {
                // 选择第一个可用的提供商
                var firstEnabled = providers.find(function (p) { return p.enable; });
                if (firstEnabled) {
                    $select.val(firstEnabled.provider);
                    form_json.tts_provider = firstEnabled.provider;
                    form_json.tts_model = firstEnabled.model;
                    form_json.tts_server = firstEnabled.server;
                    $('input[name="tts_model"]').val(form_json.tts_model);
                    $('input[name="tts_server"]').val(form_json.tts_server);
                    needSearchVoice = true;
                }
            }

            form.render('select', 'form_filter');

            // 更新地区并搜索音色（用户交互，自动播放）
            if (needSearchVoice) {
                form_json.locale = locale;
                switch_ui();
                tool.post("tts/search", voice_search_params({
                    provider: form_json.tts_provider,
                    model: form_json.tts_model,
                    locale: locale,
                    gender: form_json.tts_gender
                }), function (response) {
                    voice_search_callback(response, true);
                });
            }

            if (callback) callback(providers);
        }, false);
    };

    // 查找提供商
    var find_provider = function (provider) {
        return providers.find(function (item) {
            return item.provider.toLowerCase() === provider.toLowerCase();
        });
    };

    // ================================ 表单事件 ================================

    // 提供商选择事件
    form.on('select(tts_provider_filter)', function (data) {
        var item = find_provider(data.elem.value);
        if (!item) return;

        // 先清空音色列表
        clear_voice_list();

        // 更新表单数据
        form_json.tts_provider = item.provider;
        form_json.tts_model = item.model;
        form_json.tts_server = item.server;

        $('input[name="tts_model"]').val(form_json.tts_model);
        $('input[name="tts_server"]').val(form_json.tts_server);

        // 切换界面
        mod.switch();

        // 请求新音色（用户交互，自动播放）
        tool.post("tts/search", voice_search_params({
            provider: form_json.tts_provider,
            model: form_json.tts_model,
            gender: form_json.tts_gender
        }), function (response) {
            voice_search_callback(response, true);
        });
    });

    // 性别选择事件
    form.on('radio(tts_gender_filter)', function (data) {
        form_json.tts_gender = data.elem.value;
        form_json.tts_model = $('input[name="tts_model"]').val();

        // 请求新音色（用户交互，自动播放）
        tool.post("tts/search", voice_search_params({
            model: form_json.tts_model,
            gender: form_json.tts_gender
        }), function (response) {
            voice_search_callback(response, true);
        });
    });

    // 语音选择事件
    form.on('select(tts_voice_filter)', function (data) {
        var selectedOption = data.elem.options[data.elem.selectedIndex];

        form_json.tts_voice = data.elem.value;
        form_json.tts_role = null;
        form_json.tts_style = null;

        // 解析音色选项
        parse_voice_option(selectedOption);

        console.debug(form_json.tts_gender + "," + form_json.tts_locale + "," + form_json.tts_speaker + "," + form_json.tts_voice);

        // Azure 特殊处理：渲染角色和风格
        render_azure_options_html();

        // 播放示例
        play_sample_by_provider(form_json.tts_provider);

        // 渲染页面
        form.render('select');
    });

    // 角色选择事件
    form.on('select(tts_role_filter)', function (data) {
        form_json.tts_role = data.elem.value;
        if (AZURE_PROVIDERS.includes(form_json.tts_provider)) {
            play_azure_sample("role", form_json.tts_role);
        }
    });

    // 风格选择事件
    form.on('select(tts_style_filter)', function (data) {
        form_json.tts_style = data.elem.value;
        if (AZURE_PROVIDERS.includes(form_json.tts_provider)) {
            play_azure_sample("style", form_json.tts_style);
        }
    });

    // 风格强度选择事件
    form.on('select(tts_styledegree_filter)', function (data) {
        form_json.tts_styledegree = data.elem.value;
    });

    // ================================ 试听功能 ================================

    // 收集当前表单数据
    var collect_form_data = function () {
        return {
            video_url: get_form_value('#video_url', form_json.video_url),
            locale: get_form_value('select[name="locale"]', form_json.locale),
            suffix: get_form_value('#suffix', form_json.suffix),
            tts_provider: get_form_value('#tts_provider', form_json.tts_provider),
            tts_server: get_form_value('input[name="tts_server"]', form_json.tts_server),
            tts_model: get_form_value('input[name="tts_model"]', form_json.tts_model),
            tts_volume: get_form_value('input[name="tts_volume"]', form_json.tts_volume),
            tts_rate: get_form_value('input[name="tts_rate"]', form_json.tts_rate),
            tts_pitch: get_form_value('input[name="tts_pitch"]', form_json.tts_pitch),
            tts_seed: get_form_value('input[name="tts_seed"]', form_json.tts_seed),
            tts_remarks: get_form_value('input[name="tts_remarks"]', form_json.tts_remarks),
            tts_text: get_form_value('#tts_text', form_json.tts_text)
        };
    };

    // 查找缓存的音频
    var find_cached_audio = function (data) {
        return table_json.find(function (item) {
            return item.provider === data.tts_provider &&
                item.voice === form_json.tts_voice &&
                item.volume === data.tts_volume &&
                item.rate === data.tts_rate &&
                item.pitch === data.tts_pitch &&
                item.text === data.tts_text &&
                item.remarks === data.tts_remarks;
        });
    };

    // 试听点击事件
    util.on('id', {
        "tts_preview": function (othis) {
            // 收集表单数据
            var formData = collect_form_data();
            Object.assign(form_json, formData);

            // 验证文本
            var isvalid = form.validate('.tts_text');
            if (!isvalid) return;

            // 查找缓存
            var cachedItem = find_cached_audio(form_json);
            if (cachedItem) {
                layer.msg(i18n.trans('正在播放缓存音频'), { icon: 6 });
                return voice_play(cachedItem.url, cachedItem.speaker);
            }

            // 生成文件名
            var output = [
                form_json.tts_provider,
                form_json.tts_locale,
                form_json.tts_speaker,
                form_json.tts_volume,
                form_json.tts_rate,
                form_json.tts_pitch,
                form_json.tts_text.length,
                form_json.tts_remarks == undefined ? 0 : form_json.tts_remarks
            ].join('_');

            // 发送请求
            tool.post("tts/generate", JSON.stringify({
                provider: form_json.tts_provider,
                model: form_json.tts_model,
                locale: form_json.locale,
                voice: form_json.tts_voice,
                volume: form_json.tts_volume,
                rate: form_json.tts_rate,
                pitch: form_json.tts_pitch,
                text: form_json.tts_text,
                output: output,
                extra: {
                    file: form_json.video_url,
                    suffix: form_json.suffix,
                    server: form_json.tts_server,
                    gender: parseInt(form_json.tts_gender),
                    role: form_json.tts_role,
                    style: form_json.tts_style,
                    styledegree: form_json.tts_styledegree,
                    seed: parseInt(form_json.tts_seed),
                    remarks: form_json.tts_remarks,
                }
            }), function (response) {
                if (response.code !== 0) {
                    return toast.error(response.message, i18n.trans('提示'));
                }

                toast.info(output, i18n.trans('语音试听'));
                console.debug(response.data);

                var url = '/file/download?path=' + response.data.path;
                var duration = response.data.duration;
                var seed = response.data.seed;

                // 播放（非原声音色）
                if (form_json.tts_voice !== "0") {
                    voice_play(url, form_json.tts_voice);
                }

                // 添加到表格
                table_json.unshift({
                    provider: find_provider(form_json.tts_provider).provider,
                    model: form_json.tts_model,
                    locale: form_json.tts_locale,
                    voice: form_json.tts_voice,
                    voice_type: form_json.tts_voice_type,
                    volume: form_json.tts_volume,
                    rate: form_json.tts_rate,
                    pitch: form_json.tts_pitch,
                    text: form_json.tts_text,
                    url: url,
                    duration: duration,
                    server: form_json.tts_server,
                    gender: form_json.tts_gender,
                    speaker: form_json.tts_speaker,
                    role: form_json.tts_role,
                    style: form_json.tts_style,
                    styledegree: form_json.tts_styledegree,
                    seed: seed,
                    remarks: form_json.tts_remarks,
                });

                swap_data(0, 0);
            });
        }
    });

    // ================================ 表格功能 ================================

    var sortable_instance = null;

    // 初始化说话人表格
    var table_init = function () {
        table.render({
            elem: '#tts_voices_table',
            data: table_json,
            page: false,
            text: {
                none: i18n.trans('无数据')
            },
            cols: [[
                { title: '', width: 30, align: "center", templet: function () { return '<i class="layui-icon layui-icon-slider drag-handle" style="cursor: move;"></i>'; } },
                { title: 'spk', width: 60, align: "center", templet: function (d) { return '<div title="' + d.voice + ' (' + d.seed + ')">' + d.LAY_INDEX + '</div>'; } },
                { title: i18n.trans('模型'), width: 80, align: "center", field: 'provider', templet: function (d) { return '<div title="' + d.model + '">' + d.provider + '</div>'; } },
                { title: i18n.trans('类型'), width: 80, align: "center", field: 'type', templet: function (d) { return render_cell_with_title(enums.voice(d.voice_type), d); } },
                { title: i18n.trans('性别'), width: 80, align: "center", field: 'gender', templet: function (d) { return render_cell_with_title(d.gender === 1 ? i18n.trans('男') : d.gender === 2 ? i18n.trans('女') : i18n.trans('未知'), d); } },
                { title: i18n.trans('地区'), width: 80, field: 'locale', templet: function (d) { return render_cell_with_title(d.locale, d); } },
                { title: i18n.trans('音色'), fixed: 'right', field: 'speaker', templet: function (d) { return render_cell_with_title(d.speaker, d); } },
                { title: i18n.trans('音量'), width: 80, align: "center", field: 'volume', templet: function (d) { return render_cell_with_title(d.volume, d); } },
                { title: i18n.trans('语速'), width: 80, align: "center", field: 'rate', templet: function (d) { return render_cell_with_title(d.rate, d); } },
                { title: i18n.trans('语调'), width: 80, align: "center", field: 'pitch', templet: function (d) { return render_cell_with_title(d.pitch, d); } },
                { title: i18n.trans('时长'), fixed: 'right', width: 90, align: "center", field: 'duration', templet: function (d) { return render_cell_with_title(d.duration, d); } },
                { title: i18n.trans('操作'), fixed: 'right', width: "160", align: "center", toolbar: "#TPL_tts_voices_table_tools" }
            ]],
            done: function () {
                // 表格渲染完成后初始化拖拽排序
                table_sortable();
            }
        });
    };

    // 初始化表格拖拽排序
    var table_sortable = function () {
        // 销毁旧的实例
        if (sortable_instance) {
            sortable_instance.destroy();
            sortable_instance = null;
        }

        // 获取表格 tbody
        var tbody = document.querySelector('#tts_voices_table + .layui-table-view .layui-table-body tbody');
        if (!tbody || typeof Sortable === 'undefined') {
            return;
        }

        // 创建 Sortable 实例
        sortable_instance = new Sortable(tbody, {
            animation: 150,
            handle: '.drag-handle',
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            onEnd: function (evt) {
                var oldIndex = evt.oldIndex;
                var newIndex = evt.newIndex;

                if (oldIndex === newIndex) return;

                // 更新数据数组
                var item = table_json.splice(oldIndex, 1)[0];
                table_json.splice(newIndex, 0, item);

                // 保存数据
                layui.data(CREATORBOX, { key: 'table', value: table_json });

                // 重新渲染表格以更新序号
                reload_table();
            }
        });
    };

    // 重新加载表格
    var reload_table = function () {
        layui.table.reload('tts_voices_table', {
            data: table_json
        });
    };

    // 表格工具事件
    table.on('tool(tts_voices_table)', function (obj) {
        var data = obj.data;
        var idx = table_json.findIndex(function (item) {
            return item.voice === data.voice && item.duration === data.duration && item.seed === data.seed;
        });

        if (obj.event === "preview") {
            voice_play(data.url, data.speaker);
        } else if (obj.event === "del") {
            layer.confirm(i18n.transFmt('format.confirm_delete', data.speaker), {
                icon: 3,
                title: i18n.trans('提示'),
                btn: [i18n.trans('确定'), i18n.trans('取消')]
            }, function (index) {
                obj.del();
                layer.close(index);
                if (idx >= 0 && idx < table_json.length) {
                    table_json.splice(idx, 1);
                }
                swap_data(0, 0);
            });
        }
    });

    // 交换表格数据并重载
    var swap_data = function (i, j) {
        if (i !== j && table_json[i] && table_json[j]) {
            var temp = table_json[i];
            table_json[i] = table_json[j];
            table_json[j] = temp;
        }

        reload_table();
        layui.data(CREATORBOX, { key: 'table', value: table_json });
    };

    // ================================ 界面切换 ================================

    // 根据提供商切换界面元素
    var switch_ui = function () {
        var provider = form_json.tts_provider;
        var model = form_json.tts_model;
        var server = form_json.tts_server;

        var divs = {
            azure: $('#azure_div'),
            edge: $('#edge_div'),
            elab: $('#elab_div'),
            voxm: $('#voxm_div'),
            itts: $('#itts_div'),
            cosy: $('#cosy_div'),
            gtts: $('#gtts_div'),
            optRate: $('#opt_rate'),
            optPitch: $('#opt_pitch'),
            optRole: $('#opt_role'),
            optStyle: $('#opt_style'),
            optStyleDegree: $('#opt_styledegree'),
            optSeed: $('#opt_seed'),
            optServer: $('#opt_server'),
        };

        // 隐藏所有
        Object.values(divs).forEach(function (div) { div.addClass('layui-hide'); });

        // 显示对应提供商
        if (divs[provider]) {
            divs[provider].removeClass('layui-hide');
        }

        // 根据提供商显示选项
        divs.optRate.toggleClass('layui-hide', !RATE_PROVIDERS.includes(provider));
        divs.optPitch.toggleClass('layui-hide', !PITCH_PROVIDERS.includes(provider));
        divs.optRole.toggleClass('layui-hide', provider !== TTS_AZUR);
        divs.optStyle.toggleClass('layui-hide', provider !== TTS_AZUR);
        divs.optStyleDegree.toggleClass('layui-hide', provider !== TTS_AZUR);
        divs.optSeed.toggleClass('layui-hide', !SEED_PROVIDERS.includes(provider));
        divs.optServer.toggleClass('layui-hide', !SERVER_PROVIDERS.includes(provider));

        // 禁用/启用输入框
        $('input[name="tts_model"]').prop("disabled", !model);
        $('input[name="tts_server"]').prop("disabled", !server);
    };

    // ================================ 模块导出 ================================

    var mod = {
        // 设置数据（首次加载）
        setData: function (formData, table_data) {
            // 将传入的表单数据合并到模块级 form_json
            Object.assign(form_json, formData);
            table_json = table_data;
            table_init();
            swap_data(0, 0);
            get_providers_by_locale(form_json.locale);
        },

        // 获取数据
        getData: function () {
            return {
                form: form_json,
                table: table_json,
                voice: voice_json,
                providers: providers
            };
        },

        // 根据语言获取提供商
        getProvidersByLocale: function (locale, callback) {
            // 先清空音色列表
            clear_voice_list();
            // 获取提供商列表
            get_providers_by_locale(locale, callback);
        },

        // 切换界面
        switch: function () {
            switch_ui();
        },

    };

    exports('tts', mod);
});
