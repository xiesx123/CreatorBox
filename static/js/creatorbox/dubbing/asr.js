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

        // 初始
        setData: function (data) {
            form_json = data
            // 初始    
            mod.switch()
        },

        // 提供商
        setProviderData: function (data) {
            providers = data
        },

        // 切换
        switch: function () {
            provider = form_json.asr_provider
            divSubtitle = $('#sutitle_div')
            divWhisper = $('#whisper_div')
            if (provider == "Subtitle") {
                divSubtitle.removeClass('layui-hide');
                divWhisper.addClass('layui-hide');
            }

            else if (provider == "FasterWhisper") {
                divSubtitle.addClass('layui-hide');
                divWhisper.removeClass('layui-hide');
            }

            else {
                divSubtitle.addClass('layui-hide');
                divWhisper.addClass('layui-hide');
            }
        },
    };

    // 输出
    exports('asr', mod);
});
