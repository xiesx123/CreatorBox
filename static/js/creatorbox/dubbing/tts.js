layui.define(['layer', 'table', 'form', 'util', 'tool', 'notice'], function (exports) {
    var layer = layui.layer;
    var table = layui.table;
    var form = layui.form;
    var util = layui.util;
    var tool = layui.tool;
    var toast = layui.notice;
    var $ = layui.jquery;

    let CREATORBOX = "dubbing"

    // 数据
    var form_json = {}
    var table_json = []

    var providers = [];
    var player;

    // 类型
    var voice_type = function (type) {
        types = {
            1: "内置",
            2: "视频",
            3: "用戶"
        }
        return types[type] || "未知"
    };

    // 请求参数
    var voice_search_params = ({ provider, model, locale, gender, init = false } = {}) => {
        const tts_provider = provider || form_json?.tts_provider;
        const tts_model = model || form_json?.tts_model;
        const tts_locale = locale || form_json?.locale;
        const tts_gender = gender !== undefined ? parseInt(gender) : parseInt(form_json?.gender) || 1;
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
            toast.warning("暂无可用语音", "语音列表")
        } else {
            toast.success("已找到 " + response.data.length + " 条语音", "语音列表")
        }
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
            let html = '';
            list.forEach(obj => {
                html += `<optgroup id="${obj.type}" label="${obj.group}">\n`;
                obj.item.forEach(i => {
                    html += `  <option value="${i.speaker}">` + (parseInt(i.gender) === 1 ? '男' : parseInt(i.gender) === 2 ? '女' : '未知') + " - " + (i.duration ? i.locale + " - " + i.speaker + " - " + i.duration : i.speaker) + `</option>\n`;
                });
                html += `</optgroup>\n`;
            });
            return html;
        };
        $("#tts_voice").append(optionHtml(wrappedData))
        form.render('select');
        // 默认选择第一个
        if (response.data.length > 0) {
            form_json.tts_voice = response.data[0].speaker;
            form_json.tts_type = response.data[0].type;
            console.debug(form_json.tts_gender + "-" + form_json.tts_voice);
        }
    };

    // 查找模型
    var find_provider = (provider) => {
        return providers.find(item => item.provider.toLowerCase() === provider.toLowerCase());
    };

    // 提供商
    form.on('select(tts_provider_filter)', function (data) {
        item = find_provider(data.elem.value);
        form_json.tts_provider = item.provider;
        form_json.tts_model = item.model;
        $('input[name="tts_model"]').val(form_json.tts_model);
        mod.switch()
        tool.post("tts/search", voice_search_params({ provider: form_json.tts_provider, model: form_json.tts_model, gender: form_json.tts_gender }), voice_search_callback, true)
    });

    // 生成配置
    util.on('id', {
        "video_speaker": function (othis) {
            layer.prompt({ title: '确定生成说话人配置？', placeholder: '请输入片段长度(单位s)', value: form_json.speaker_len, maxlength: 5 }, function (value, index, elem) {
                if (value === '') return elem.focus();
                value = util.escape(value)
                form_json.speaker_len = isNaN(value) ? value : Number(value)
                tts_model = $('input[name="tts_model"]').val()
                locale = $('select[name="locale"] option:selected').val()
                tool.post("tts/search", voice_search_params({ provider: form_json.tts_provider, model: tts_model, locale: locale, gender: 0, init: true }), voice_search_callback, true)
                // 关闭 prompt
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
        console.debug(form_json.tts_gender + "-" + form_json.tts_voice);
    });

    // 试听点击
    util.on('id', {
        "tts_play": function (othis) {
            form_json.tts_provider = $('#tts_provider').val()
            form_json.tts_model = $('input[name="tts_model"]').val()
            form_json.locale = $('select[name="locale"] option:selected').val()
            form_json.tts_volume = $('input[name="tts_volume"]').val();
            form_json.tts_rate = $('input[name="tts_rate"]').val();
            form_json.tts_remarks = $('input[name="tts_remarks"]').val();
            form_json.tts_text = $("#tts_text").val()
            form_json.tts_step = $('input[name="tts_step"]').val()
            form_json.tts_instruct = $('input[name="tts_instruct"]').val()
            form_json.tts_vc = $('input[name="tts_vc"]').is(':checked')
            var isvalid = form.validate('.tts_text');
            if (isvalid) {
                const findItemByVoice = (data) =>
                    table_json.find(item =>
                        item.provider == data.tts_provider &&
                        item.voice == data.tts_voice &&
                        item.volume == data.tts_volume &&
                        item.rate == data.tts_rate &&
                        item.text == data.tts_text &&
                        item.remarks == data.tts_remarks
                    );
                var item = findItemByVoice(form_json)
                if (item != null) {
                    layer.msg('正在播放缓存音频', { icon: 1 });
                    return voice_play(item.url);
                }
                output = `${form_json.tts_provider}_${form_json.tts_voice}_${form_json.tts_volume}_${form_json.tts_rate}_${form_json.tts_text.length}_${form_json.tts_remarks.length}`
                tool.post("tts/generate", JSON.stringify({
                    "provider": form_json.tts_provider,
                    "model": form_json.tts_model,
                    "locale": form_json.locale,
                    "voice": form_json.tts_voice,
                    "volume": form_json.tts_volume,
                    "rate": form_json.tts_rate,
                    "remarks": form_json.tts_remarks,
                    "text": form_json.tts_text,
                    "output": output,
                    "extra": {
                        "gender": parseInt(form_json.tts_gender),
                        "nfe_step": parseInt(form_json.tts_step),
                        "instruct_text": form_json.tts_instruct,
                        "use_vc": form_json.tts_vc,
                        "file": $("#video_url").val(),
                        "suffix": $("#suffix").val()
                    }
                }), function (response) {
                    toast.info(output, "语音试听")
                    console.debug(response.data)
                    var url = '/file/local?url=' + response.data.path;
                    var duration = response.data.duration;
                    var seed = response.data.seed;
                    voice_play(url);
                    table_json.unshift({
                        provider: find_provider(form_json.tts_provider).provider,
                        model: form_json.tts_model,
                        type: voice_type(form_json.tts_type),
                        gender: form_json.tts_gender,
                        locale: form_json.locale,
                        voice: form_json.tts_voice,
                        volume: form_json.tts_volume,
                        rate: form_json.tts_rate,
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
    var inst = table.render({
        elem: '#tts_voices_table',
        data: table_json,
        page: false,
        cols: [[
            { title: 'spk', width: 80, align: "center", templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + d.LAY_INDEX + '</div>' },
            { title: '模型', width: 60, align: "center", field: 'provider', templet: d => '<div title="' + d.model + '">' + d.provider + '</div>' },
            { title: '类型', width: 60, align: "center", field: 'type', templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + d.type + '</div>' },
            { title: '性别', width: 60, align: "center", field: 'gender', templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + (d.gender == 1 ? '男' : d.gender == 2 ? '女' : '未知') + '</div>' },
            { title: '音色', field: 'voice', templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + d.voice + '</div>' },
            { title: '音量', width: 60, align: "center", field: 'volume', templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + d.volume + '</div>' },
            { title: '语速', width: 60, align: "center", field: 'rate', templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + d.rate + '</div>' },
            { title: '时长', width: 80, align: "center", field: 'duration', templet: d => '<div title="' + d.text + ' (' + d.remarks + ') ">' + d.duration + '</div>' },
            { title: "操作", fixed: 'right', width: "200", align: "center", toolbar: "#TPL_tts_voices_table_tools" }
        ]],
    });

    // 说话人表格工具事件
    table.on('tool(' + inst.config.id + ')', function (obj) {
        var data = obj.data;
        var idx = table_json.findIndex(item => { return item.voice == data.voice && item.duration == data.duration });
        if (obj.event === "preview") {
            voice_play(data.url);
        } else if (obj.event === "del") {
            layer.confirm(`确定删除【${data.voice}】么?`, { title: '提示', icon: 3 }, function (index) {
                obj.del();
                layer.close(index);
                if (idx < table_json.length) {
                    table_json.splice(idx, 1);
                }
                swapData(0, 0);
            });
        } else if (obj.event === 'up') {
            if (idx === 0) {
                layer.msg('已置顶');
                return;
            }
            swapData(idx, idx - 1);
        } else if (obj.event === 'down') {
            if (idx === table_json.length - 1) {
                layer.msg('已置底');
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
            html5: true
        });
    };

    // 方法
    var mod = {
        setData: function (data, data2) {
            form_json = data;
            table_json = data2;
            mod.switch();
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
                xtts: $('#xtts_div'),
                e2f5: $('#e2f5_div'),
                cosy: $('#cosy_div'),
                optVc: $('#opt_vc')
            };

            Object.values(divs).forEach(div => div.addClass('layui-hide'));
            if (provider in divs) {
                divs[provider].removeClass('layui-hide');
                divs.optVc.toggleClass('layui-hide', provider !== "xtts" && provider !== "cosy");
            }

            $('input[name="tts_model"]').prop("disabled", !model);
        }
    };
    // 输出
    exports('tts', mod);
});
