layui.define(['layer', 'table', 'form', 'element', 'upload', 'i18n', 'notice'], function (exports) {
    var layer = layui.layer;
    var table = layui.table;
    var form = layui.form;
    var element = layui.element;
    var upload = layui.upload;
    var toast = layui.notice;
    var i18n = layui.i18n;
    var $ = layui.jquery;

    var mod = {

        // 语音类型
        voice: function (type) {
            const types = {
                1: i18n.trans('内置'),
                2: i18n.trans('视频'),
                3: i18n.trans('用户')
            }
            return types[type] || i18n.trans('未知')
        },

        // 性别
        gender: function (type) {
            const types = {
                0: i18n.trans('未知'),
                1: i18n.trans('男'),
                2: i18n.trans('女')
            };
            const reverseTypes = {
                [i18n.trans('未知')]: 0,
                [i18n.trans('男')]: 1,
                [i18n.trans('女')]: 2
            };
            // 如果是数字key，返回i18n文本
            if (types[type] !== undefined) return types[type];
            // 如果是i18n文本 key，返回数字
            if (reverseTypes[type] !== undefined) return reverseTypes[type];
            return null;
        }
    };

    // 输出
    exports('enums', mod);
});
