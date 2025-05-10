layui.define(['colorpicker'], function (exports) {
    var os = layui.device("os").os
    var colorpicker = layui.colorpicker;
    var $ = layui.jquery;

    // 数据
    var form_json = {}

    // 方法
    var mod = {
        // 初始
        setData: function (data) {
            form_json = data
            // 配音字幕
            colorpicker.render({
                elem: '#draft_style_dtc_select',
                color: form_json.draft_style_dtc,
                done: function (color) {
                    $('[name="draft_style_dtc"]').val(color);
                }
            });
            colorpicker.render({
                elem: '#draft_style_dtbc_select',
                color: form_json.draft_style_dtbc,
                done: function (color) {
                    $('[name="draft_style_dtbc"]').val(color);
                }
            });

            // 原始字幕
            colorpicker.render({
                elem: '#draft_style_ntc_select',
                color: form_json.draft_style_ntc,
                done: function (color) {
                    $('[name="draft_style_ntc"]').val(color);
                }
            });
            colorpicker.render({
                elem: '#draft_style_ntbc_select',
                color: form_json.draft_style_ntbc,
                done: function (color) {
                    $('[name="draft_style_ntbc"]').val(color);
                }
            });
        },
    };

    // 初始
    $('input[name="draft_preview"]').attr('disabled', os == "linux");

    // 输出
    exports('draft', mod);
});
