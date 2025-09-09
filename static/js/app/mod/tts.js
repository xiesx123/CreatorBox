layui.define(['layer', 'table', 'form', 'util', 'tool', 'i18n', 'notice'], function (exports) {
    var layer = layui.layer;
    var table = layui.table;
    var form = layui.form;
    var util = layui.util;
    var tool = layui.tool;
    var toast = layui.notice;
    var i18n = layui.i18n;
    var $ = layui.jquery;

    // 基础
    let CREATORBOX = "dubbing"
    let TTS_AZUR = "azure"
    let TTS_EDGE = "edge"
    let TTS_ELAB = "elab"
    let TTS_COSY = "cosy"
    let TTS_CTTS = "ctts"
    let TTS_FTTS = "f5e2"

    // 数据
    var form_json = {}
    var table_json = []
    var voice_json = {}

    var providers = [];
    var player;

    // 类型
    var voice_type = function (type) {
        const types = {
            1: i18n.trans('type_builtin'),
            2: i18n.trans('type_video'),
            3: i18n.trans('type_user')
        }
        return types[type] || i18n.trans('type_unknown')
    };

    // 性别
    var gender_type = function (type) {
        const types = {
            0: i18n.trans('gender_unknown'),
            1: i18n.trans('gender_male'),
            2: i18n.trans('gender_female')
        };
        const reverseTypes = {
            [i18n.trans('gender_unknown')]: 0,
            [i18n.trans('gender_male')]: 1,
            [i18n.trans('gender_female')]: 2
        };
        // 如果是数字key，返回i18n文本
        if (types[type] !== undefined) return types[type];
        // 如果是i18n文本 key，返回数字
        if (reverseTypes[type] !== undefined) return reverseTypes[type];
        return null;
    };

    // 示例
    var play_azure_sample = function (key, val) {
        const voice = voice_json[form_json.tts_voice]
        const k = key;
        const v = val;
        const array = voice.samples[k] || [];
        const value = array.find(item => item.k === v)?.v;
        const url = `https://ai.azure.com/speechassetscache/ttsvoice/Masterpieces/${value}.wav`
        voice_play(url)
    };

    var play_spk_sample = function () {
        const voice = voice_json[form_json.tts_voice]
        const path = voice["path"];
        const url = '/file/local?url=' + path;
        voice_play(url)
    };

    // 请求参数
    var voice_search_params = ({ provider, model, locale, gender, init = false } = {}) => {
        const tts_provider = provider || form_json?.tts_provider;
        const tts_model = model || form_json?.tts_model;
        const tts_locale = locale || form_json?.locale;
        const tts_gender = gender !== undefined ? parseInt(gender) : parseInt(form_json?.tts_gender) || 1;
        const video_url = $("#video_url").val();
        const suffix = $("#suffix").val();
        const duration = form_json?.speaker_len || 5;

        return JSON.stringify({
            provider: tts_provider,
            model: tts_model,
            locale: tts_locale,
            isinit: init,
            extra: {
                gender: tts_gender,
                file: video_url,
                suffix: suffix,
                duration: duration
            }
        });
    };

    // 请求回调
    var voice_search_callback = function (response) {
        // 清空原有选项
        $("#tts_voice").empty();
        if (response.data.length == 0) {
            toast.warning(i18n.trans('tts_voice_no_data'), i18n.trans('tts_voice_list_title'));
        } else {
            toast.success(i18n.transFmt('tts_voice_found', response.data.length), i18n.trans('tts_voice_list_title'));
        }
        // 记录音色数据
        response.data.forEach(obj => {
            voice_json[obj.id] = obj
        });
        // 转换显示对象
        const wrappedData = response.data.reduce((acc, item) => {
            let group = voice_type(item.type);
            let existingGroup = acc.find(g => g.group === group);
            if (existingGroup) {
                existingGroup.item.push(item);
            } else {
                acc.push({
                    type: item.type, group: group, item: [item]
                });
            }
            return acc;
        }, []);
        // 动态条件选项
        const optionHtml = (list) => {
            selected_locale = $('select[name="locale"] option:selected').val()
            let html = '';
            let idx = 1;
            list.forEach(obj => {
                html += `<optgroup id="${obj.type}" label="${obj.group} (${obj.item.length})">\n`;
                obj.item.forEach(i => {
                    locale = i.locale || selected_locale || i18n.trans('type_unknown')
                    html += `  <option value="${i.id}">` + (idx++) + "." + gender_type(i.gender) + " - " + locale + " - " + i.speaker + `</option>\n`;
                });
                html += `</optgroup>\n`;
            });
            return html;
        };
        $("#tts_voice").append(optionHtml(wrappedData))
        // 渲染页面
        form.render('select');

        // 切换语言、提供商时
        if(!form_json.tts_voice){
            form_json.tts_voice = $("#tts_voice").val()
        }

        // 恢复音色选中
        $('#tts_voice option[value="' + form_json.tts_voice + '"]').prop('selected', true);
        // 恢复音色选中，主动触发事件
        $('#tts_voice').siblings('.layui-form-select').find('dl dd[lay-value="' + form_json.tts_voice + '"]').click();
    };

    // 查找模型
    var find_provider = (provider) => {
        return providers.find(item => item.provider.toLowerCase() === provider.toLowerCase());
    };

    // 提供商
    form.on('select(tts_provider_filter)', function (data) {
        const item = find_provider(data.elem.value);
        form_json.tts_provider = item.provider;
        form_json.tts_model = item.model;
        form_json.tts_voice = null
        $('input[name="tts_model"]').val(form_json.tts_model);
        mod.switch()
        tool.post("tts/search", voice_search_params({ provider: form_json.tts_provider, model: form_json.tts_model, gender: form_json.tts_gender }), voice_search_callback, true)
        // 
        if (form_json.tts_provider == TTS_AZUR) {
            $("#tts_voice_icon").attr("class", "layui-icon layui-icon-mike");
        }
        else if (form_json.tts_provider == TTS_EDGE) {
            $("#tts_voice_icon").attr("class", "layui-icon layui-icon-mike");
        }
        else if (form_json.tts_provider == TTS_ELAB) {
            $("#tts_voice_icon").attr("class", "layui-icon layui-icon-mike");
        }
        else if (form_json.tts_provider == TTS_COSY) {
            $("#tts_voice_icon").attr("class", "layui-icon layui-icon-headset");
        }
        else if (form_json.tts_provider == TTS_CTTS) {
            $("#tts_voice_icon").attr("class", "layui-icon layui-icon-mike");
        }
        else if (form_json.tts_provider == TTS_FTTS) {
            $("#tts_voice_icon").attr("class", "layui-icon layui-icon-headset");
        }
    });

    // 生成配置
    util.on('id', {
        "video_speaker": function (othis) {
            layer.prompt({
                title: i18n.trans('tts_spk_config_prompt_title'),
                placeholder: i18n.trans('tts_spk_config_prompt_placeholder'),
                value: form_json.speaker_len,
                maxlength: 5
            }, function (value, index, elem) {
                if (value === '') return elem.focus();
                value = util.escape(value)
                form_json.speaker_len = isNaN(value) ? value : Number(value)
                const tts_model = $('input[name="tts_model"]').val()
                const locale = $('select[name="locale"] option:selected').val()
                tool.post("tts/search", voice_search_params({ provider: form_json.tts_provider, model: tts_model, locale: locale, gender: 0, init: true }), voice_search_callback, true)
                layer.close(index);
            });
        }
    });

    // 性别选择
    form.on('radio(tts_gender_filter)', function (data) {
        form_json.tts_model = $('input[name="tts_model"]').val()
        form_json.tts_gender = data.elem.value;
        tool.post("tts/search", voice_search_params({ model: form_json.tts_model, gender: form_json.tts_gender }), voice_search_callback, true)
    });

    // 语音选择
    form.on('select(tts_voice_filter)', function (data) {
        var selectedOption = data.elem.options[data.elem.selectedIndex]; // 获取选中的 option
        var selectedOptgroup = selectedOption.closest('optgroup');  // 获取该选项所在的 optgroup
        form_json.tts_voice = data.elem.value;
        form_json.tts_type = selectedOptgroup.id
        const cleaned = selectedOption.text.replace(/^\d+\./, "").trim();
        const [gender, locale, speaker] = cleaned.split(" - ").map(s => s.trim());
        form_json.tts_gender = gender_type(gender);
        form_json.tts_locale = locale;
        form_json.tts_speaker = speaker;
        console.debug(form_json.tts_gender + "-" + form_json.tts_locale + "-" + form_json.tts_speaker + "-" + form_json.tts_voice);
        // 
        if (form_json.tts_provider == TTS_AZUR) {
            // 动态渲染说话风格/角色扮演
            const optionHtml = (list, prefix) => {
                let html = '';
                let idx = 1;
                list.forEach(obj => {
                    html += `  <option value="${obj}">` + (idx++) + "." + i18n.trans(`azure.${prefix}.${obj}`) + `</option>\n`;
                    html += `</optgroup>\n`;
                });
                return html;
            };
            $("#tts_role").empty();
            $("#tts_role").append(optionHtml(voice_json[form_json.tts_voice].role, "role"));
            $('#tts_role option[value="' + form_json.tts_role + '"]').prop('selected', true);

            $("#tts_style").empty();
            $("#tts_style").append(optionHtml(voice_json[form_json.tts_voice].style, "style"));
            $('#tts_style option[value="' + form_json.tts_style + '"]').prop('selected', true);

            $('#tts_styledegree option[value="' + form_json.tts_styledegree + '"]').prop('selected', true);
        }
        else if (form_json.tts_provider == TTS_EDGE) {
        }
        else if (form_json.tts_provider == TTS_ELAB) {
        }
        else if (form_json.tts_provider == TTS_COSY) {
            play_spk_sample()
        }
        else if (form_json.tts_provider == TTS_CTTS) {
        }
        else if (form_json.tts_provider == TTS_FTTS) {
            play_spk_sample()
        }
        // 渲染页面
        form.render('select');
    });

    // 角色选择
    form.on('select(tts_role_filter)', function (data) {
        form_json.tts_role = data.elem.value
        play_azure_sample("role", form_json.tts_role)
    });

    // 风格选择
    form.on('select(tts_style_filter)', function (data) {
        form_json.tts_style = data.elem.value
        play_azure_sample("style", form_json.tts_style)
    });

    // 风格强度
    form.on('select(tts_styledegree_filter)', function (data) {
        form_json.tts_styledegree = data.elem.value
    });

    // 试听点击
    util.on('id', {
        "tts_preview": function (othis) {
            form_json.tts_provider = $('#tts_provider').val()
            form_json.tts_model = $('input[name="tts_model"]').val()
            form_json.locale = $('select[name="locale"] option:selected').val()
            form_json.tts_volume = $('input[name="tts_volume"]').val();
            form_json.tts_rate = $('input[name="tts_rate"]').val();
            form_json.tts_pitch = $('input[name="tts_pitch"]').val();
            form_json.tts_remarks = $('input[name="tts_remarks"]').val();
            form_json.tts_text = $("#tts_text").val()
            form_json.tts_step = $('input[name="tts_step"]').val()
            form_json.tts_instruct = $('input[name="tts_instruct"]').val()
            form_json.tts_vc = $('input[name="tts_vc"]').is(':checked')
            form_json.tts_seed = $('input[name="tts_seed"]').val()
            var isvalid = form.validate('.tts_text');
            if (isvalid) {
                // 查找缓存
                const findItemByVoice = (data) =>
                    table_json.find(item =>
                        item.provider == data.tts_provider &&
                        item.voice == data.tts_voice &&
                        item.volume == data.tts_volume &&
                        item.rate == data.tts_rate &&
                        item.pitch == data.tts_pitch &&
                        item.text == data.tts_text &&
                        item.remarks == data.tts_remarks
                    );
                const item = findItemByVoice(form_json)
                if (item != null) {
                    layer.msg(i18n.trans('tts_previewing_cached_audio'), { icon: 1 });
                    return voice_play(item.url);
                }
                // 文件名
                const output = `${form_json.tts_provider}_${form_json.tts_locale}_${form_json.tts_speaker}_${form_json.tts_volume}_${form_json.tts_rate}_${form_json.tts_pitch}_${form_json.tts_text.length}_${form_json.tts_remarks.length}`
                // 生成试听
                tool.post("tts/gen", JSON.stringify({
                    "provider": form_json.tts_provider,
                    "model": form_json.tts_model,
                    "locale": form_json.locale,
                    "voice": form_json.tts_voice,
                    "volume": form_json.tts_volume,
                    "rate": form_json.tts_rate,
                    "pitch": form_json.tts_pitch,
                    "remarks": form_json.tts_remarks,
                    "text": form_json.tts_text,
                    "output": output,
                    "extra": {
                        "gender": parseInt(form_json.tts_gender),
                        // azure
                        "role": form_json.tts_role,
                        "style": form_json.tts_style,
                        "styledegree": form_json.tts_styledegree,
                        // cosy
                        "instruct_text": form_json.tts_instruct,
                        // f5e2
                        "nfe_step": parseInt(form_json.tts_step),
                        // other
                        "use_vc": form_json.tts_vc,
                        "seed": parseInt(form_json.tts_seed),
                        "file": $("#video_url").val(),
                        "suffix": $("#suffix").val()
                    }
                }), function (response) {
                    if (response.code != 0) {
                        return toast.error(response.message, i18n.trans('confirm_title'));
                    }
                    toast.info(output, i18n.trans('tts_previewing_preview'))
                    console.debug(response.data)
                    const url = '/file/local?url=' + response.data.path;
                    const duration = response.data.duration;
                    const seed = response.data.seed;
                    voice_play(url);
                    table_json.unshift({
                        provider: find_provider(form_json.tts_provider).provider,
                        // 
                        model: form_json.tts_model,
                        voice: form_json.tts_voice,
                        type: voice_type(form_json.tts_type),
                        gender: form_json.tts_gender,
                        locale: form_json.tts_locale,
                        speaker: form_json.tts_speaker,
                        volume: form_json.tts_volume,
                        rate: form_json.tts_rate,
                        pitch: form_json.tts_pitch,
                        remarks: form_json.tts_remarks,
                        text: form_json.tts_text,
                        // 
                        url: url,
                        duration: duration,
                        seed: seed,
                        // 
                        nfe_step: form_json.tts_step,
                        instruct_text: form_json.tts_instruct,
                        use_vc: form_json.tts_vc,
                    })
                    swapData(0, 0)
                }, true)
            }
        }
    });

    // 说话人表格
    var tableInit = function () {
        table.render({
            elem: '#tts_voices_table',
            data: table_json,
            page: false,
            text: {
                none: i18n.trans('tts_table_empyt')
            },
            cols: [[
                { title: i18n.trans('tts_table_col_spk'), width: 60, align: "center", templet: d => '<div title="' + d.voice + ' (' + d.seed + ')">' + d.LAY_INDEX + '</div>' },
                { title: i18n.trans('tts_table_col_model'), width: 80, align: "center", field: 'provider', templet: d => '<div title="' + d.model + '">' + d.provider + '</div>' },
                { title: i18n.trans('tts_table_col_type'), width: 80, align: "center", field: 'type', templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + d.type + '</div>' },
                { title: i18n.trans('tts_table_col_gender'), width: 80, align: "center", field: 'gender', templet: d => '<div title="' + d.text + ' (' + d.remarks + ')">' + (d.gender == 1 ? i18n.trans('gender_male') : d.gender == 2 ? i18n.trans('gender_female') : i18n.trans('gender_unknown')) + '</div>' },
                { title: i18n.trans('tts_table_col_locale'), width: 80, field: 'locale', templet: d => '<div title="' + d.text + ' (' + d.remarks + ')">' + d.locale + '</div>' },
                { title: i18n.trans('tts_table_col_speaker'), fixed: 'right', field: 'speaker', templet: d => '<div title="' + d.text + ' (' + d.remarks + ')">' + d.speaker + '</div>' },
                { title: i18n.trans('tts_table_col_volume'), width: 80, align: "center", field: 'volume', templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + d.volume + '</div>' },
                { title: i18n.trans('tts_table_col_rate'), width: 80, align: "center", field: 'rate', templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + d.rate + '</div>' },
                { title: i18n.trans('tts_table_col_pitch'), width: 80, align: "center", field: 'pitch', templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + d.pitch + '</div>' },
                { title: i18n.trans('tts_table_col_duration'), fixed: 'right', width: 90, align: "center", field: 'duration', templet: d => '<div title="' + d.text + ' (' + d.remarks + ')">' + d.duration + '</div>' },
                { title: i18n.trans('tts_table_col_action'), fixed: 'right', width: "220", align: "center", toolbar: "#TPL_tts_voices_table_tools" }
            ]],
        });
    }

    // 说话人表格工具事件
    table.on('tool(tts_voices_table)', function (obj) {
        var data = obj.data;
        var idx = table_json.findIndex(item => { return item.voice == data.voice && item.duration == data.duration });
        if (obj.event === "preview") {
            voice_play(data.url);
        } else if (obj.event === "del") {
            layer.confirm(i18n.transFmt('confirm_delete_select_fmt', data.speaker), { title: i18n.trans('confirm_title'), icon: 3 }, function (index) {
                obj.del();
                layer.close(index);
                if (idx < table_json.length) {
                    table_json.splice(idx, 1);
                }
                swapData(0, 0);
            });
        } else if (obj.event === 'up') {
            if (idx === 0) {
                layer.msg(i18n.trans('tts_table_pinned_top'));
                return;
            }
            swapData(idx, idx - 1);
        } else if (obj.event === 'down') {
            if (idx === table_json.length - 1) {
                layer.msg(i18n.trans('tts_table_pinned_bottom'));
                return;
            }
            swapData(idx, idx + 1);
        }
    });

    // 说话人表格移动并重载
    var swapData = function swapData(i, j) {
        var temp = table_json[i];
        if (temp) {
            table_json[i] = table_json[j];
            table_json[j] = temp;
        }
        // 重载表格数据
        layui.table.reload('tts_voices_table', {
            data: table_json
        });
        // 本地存储
        layui.data(CREATORBOX, { key: 'table', value: table_json });
    }

    // 配音-音频播放
    var voice_play = function (url) {
        if (player) {
            player.unload();
        }
        player = new Howl({
            src: [url],
            format: ['wav'],
            autoplay: true,
            html5: true,
            onload: function () {
                console.debug('audio loaded');
            },
            onloaderror: function () {
                toast.error(i18n.trans('onload_error'));
                // console.debug('audio onloaderror');
            },
            onplay: function () {
                console.debug('audio playing');
            },
            onplayerror: function () {
                toast.error(i18n.trans('onplay_error'));
                // console.debug('audio onplayerror');
            },
            onpause: function () {
                console.debug('audio paused');
            },
            onstop: function () {
                console.debug('audio stopped');
            },
            onend: function () {
                console.debug('audio ended');
            },
        });
    };

    // 方法
    var mod = {
        setData: function (data, data2) {
            form_json = data;
            table_json = data2;
            mod.switch();
            tableInit()
            swapData(0, 0);
            tool.post("tts/search", voice_search_params(), voice_search_callback, true);
        },
        setProviderData: function (data) {
            providers = data;
        },
        switch: function () {
            const provider = form_json.tts_provider;
            const model = form_json.tts_model;
            const divs = {
                azure: $('#azure_div'),
                cosy: $('#cosy_div'),
                ctts: $('#ctts_div'),
                f5e2: $('#f5e2_div'),
                optVc: $('#opt_vc'),
                optSeed: $('#opt_seed')
            };
            Object.values(divs).forEach(div => div.addClass('layui-hide'));
            if (provider in divs) {
                divs[provider].removeClass('layui-hide');
                divs.optVc.toggleClass('layui-hide', provider !== TTS_COSY && provider !== TTS_CTTS);
                divs.optSeed.toggleClass('layui-hide', provider !== TTS_COSY && provider !== TTS_CTTS && provider !== TTS_FTTS);
            }
            $('input[name="tts_model"]').prop("disabled", !model);
        }
    };

    // 输出
    exports('tts', mod);
});
