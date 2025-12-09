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
        item = find_provider(data.elem.value);
        if (item != null) {
            form_json.llm_provider = item.provider;
        } else {
            form_json.llm_provider = "ignore";
        }
        mod.switch()
    });

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
            const provider = form_json.llm_provider.toLowerCase();
            $('#ignore_div').toggleClass('layui-hide', (provider != 'ignore'));
            const divs = {
                llm: ['#llm_div', '#opt_div'],
                ignore: []
            };
            ['#llm_div', '#opt_div'].forEach(selector => {
                $(selector).toggleClass('layui-hide', !divs[provider]?.includes(selector));
            });
        },
    };

    // 输出
    exports('trans', mod);
});
