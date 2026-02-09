layui.define(['form', 'layer', 'i18n'], function (exports) {
    var form = layui.form;
    var layer = layui.layer;
    var i18n = layui.i18n;
    var $ = layui.$;

    i18n.init('{{request.state.lang}}');

    var example = {
        examples: {
            "example1": {
                name: i18n.trans('合成'),
                form: {
                    "video_url": "",
                    "json_file": "webapp/sample/video_product.json",
                    "locale": "zh-CN",
                    "mode_type": 1,
                    "align_type": 0,
                    "suffix": "zh",
                    "tts_provider": "edge",
                    "tts_model": "",
                    "tts_gender": 1,
                    "tts_voice": "zh-CN-YunxiNeural",
                    "tts_volume": 1.0,
                    "tts_rate": 1.0,
                    "tts_pitch": 1.0,
                    "tts_text": i18n.trans('creatorbox'),
                    "tts_role": "Default",
                    "tts_style": "general",
                    "tts_styledegree": 1.0,
                    "tts_seed": 0,
                    "tts_dubbing": [],
                }
            },
            "example2": {
                name: i18n.trans('翻译'),
                form: {
                    "video_url": "webapp/sample/video_product.mp4",
                    "json_file": "webapp/sample/video_product1.json",
                    "locale": "zh-CN",
                    "mode_type": 2,
                    "align_type": 0,
                    "suffix": "zh1",
                    "tts_provider": "edge",
                    "tts_model": "",
                    "tts_gender": 1,
                    "tts_voice": "zh-CN-YunxiNeural",
                    "tts_volume": 1.0,
                    "tts_rate": 1.0,
                    "tts_pitch": 1.0,
                    "tts_text": i18n.trans('creatorbox'),
                    "tts_role": "Default",
                    "tts_style": "general",
                    "tts_styledegree": 1.0,
                    "tts_seed": 0,
                    "tts_dubbing": [],
                }
            },
            "example3": {
                name: i18n.trans('配音'),
                form: {
                    "video_url": "webapp/sample/video_product.mp4",
                    "json_file": "webapp/sample/video_product2.json",
                    "locale": "zh-CN",
                    "mode_type": 3,
                    "align_type": 0,
                    "suffix": "zh2",
                    "tts_provider": "edge",
                    "tts_model": "",
                    "tts_gender": 1,
                    "tts_voice": "zh-CN-YunxiNeural",
                    "tts_volume": 1.0,
                    "tts_rate": 1.0,
                    "tts_pitch": 1.0,
                    "tts_text": i18n.trans('creatorbox'),
                    "tts_role": "Default",
                    "tts_style": "general",
                    "tts_styledegree": 1.0,
                    "tts_seed": 0,
                    "tts_dubbing": [],
                }
            },
        },

        /**
         * 初始化示例选择器
         * @param {string} selector - 按钮选择器
         */
        init: function (selector) {
            var that = this;

            $(selector).on('click', function () {
                that.showSelector();
            });
        },

        /**
         * 显示示例选择器弹窗
         */
        showSelector: function () {
            var that = this;
            var html = '';
            var firstKey = '';

            // 生成单选按钮
            var index = 0;
            for (var key in that.examples) {
                var example = that.examples[key];
                var displayName = i18n.trans(example.name);
                var checked = index === 0 ? 'checked' : '';
                if (index === 0) firstKey = key;
                
                html += `
                    <input type="radio" name="example_radio" value="${key}" title="${displayName}" ${checked} lay-filter="example_radio">
                `;
                index++;
            }

            // 打开弹窗
            layer.open({
                type: 1,
                title: i18n.trans('选择示例'),
                area: ['400px', 'auto'],
                content: `
                    <div style="padding: 20px;">
                        <form class="layui-form" lay-filter="example_form">
                            <div class="layui-form-item" pane>
                                <div class="layui-input-block" style="margin-left: 0;">
                                    ${html}
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <div class="layui-input-block" style="margin-left: 0;">
                                    <button type="button" class="layui-btn layui-btn-fluid" id="example-load-btn">${i18n.trans('加载')}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                `,
                success: function (layero, index) {
                    form.render('radio');

                    // 监听加载按钮点击
                    $('#example-load-btn').on('click', function () {
                        var selectedValue = $('input[name="example_radio"]:checked').val();
                        if (selectedValue && that.examples[selectedValue]) {
                            that.load(selectedValue, index);
                        }
                    });
                }
            });
        },

        load: function (key, layerIndex) {
            var selectedExample = this.examples[key];

            // 使用 form.val 更新表单
            form.val('form_filter', selectedExample.form);

            // 更新表单显示状态
            $('#align_type_div').toggleClass('layui-hide', selectedExample.form.mode_type != 3);
            $('#video_url_div').toggleClass('layui-hide', selectedExample.form.mode_type == 1);

            // 触发试听预览
            if (selectedExample.form.tts_voice) {
                // 延迟触发，确保表单已更新
                setTimeout(function () {
                    // 触发 tts_preview 点击事件
                    $('#tts_preview').trigger('click');
                }, 500);
            }

            // 关闭弹窗
            if (layerIndex) {
                layer.close(layerIndex);
            }
        },

        add: function (key, config) {
            this.examples[key] = config;
        },

        get: function () {
            return this.examples;
        }
    };

    exports('example', example);
});
