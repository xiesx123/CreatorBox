layui.define(['form', 'tool'], function (exports) {
    var form = layui.form;
    var tool = layui.tool;
    var $ = layui.jquery;

    // 数据
    var form_json = {}

    var providers = [];

    // 查找模型
    var find_provider = (provider) => {
        return providers.find(item => item.provider.toLowerCase() === provider.toLowerCase());
    };

    // 提供商
    form.on('select(asr_provider_filter)', function (data) {
        item = find_provider(data.elem.value);
        form_json.asr_provider = item.provider;
        form_json.asr_model = item.model;
        $('input[name="asr_model"]').val(form_json.asr_model);
        $('input[name="asr_model"]').prop("disabled", (item.model == ""));
        mod.switch()
    });

    // 上传
    tool.upload("#subtitle_upload", "file/upload", 'file', 'srt', null, function (response) {
        $('[name="subtitle_url"]').val(response.data.location)
    })

    // 方法
    var mod = {
        setData: function (data) {
            form_json = data;
            mod.switch();
        },
        setProviderData: function (data) {
            providers = data;
        },
        switch: function () {
            const provider = form_json.asr_provider;
            const sections = {
                Subtitle: '#subtitle_div',
                JyDraft: '#jydraft_div',
                FasterWhisper: '#whisper_div'
            };

            Object.keys(sections).forEach(key => {
                $(sections[key]).toggleClass('layui-hide', key !== provider);
            });
        },
    };

    // 输出
    exports('asr', mod);
});
