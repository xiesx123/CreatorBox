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
    form.on('select(llm_provider_filter)', function (data) {
        if (data.elem.value == 0) {
            return $('input[name="llm_model"]').val("");
        }
        item = find_provider(data.elem.value);
        if (item != null) {
            form_json.llm_provider = item.provider;
            form_json.llm_model = item.model;
            if (form_json.llm_provider == "Deeplx") {
                $('input[name="deeplx_server"]').val(form_json.llm_model);
            } else {
                $('input[name="llm_model"]').val(form_json.llm_model);
            }
        } else {
            form_json.llm_provider = "ignore";
        }
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
            const provider = form_json.llm_provider;
            const divs = {
                Deeplx: ['#deeplx_div', '#opt_div'],
                Gemini: ['#llm_div', '#opt_div'],
                DashScope: ['#llm_div', '#opt_div'],
                ignore: []
            };
            ['#deeplx_div', '#llm_div', '#opt_div'].forEach(selector => {
                $(selector).toggleClass('layui-hide', !divs[provider]?.includes(selector));
            });
        },
    };

    // 输出
    exports('llm', mod);
});
