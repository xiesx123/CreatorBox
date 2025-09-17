i18njs = "static/js/jquery/jquery.i18n.properties.js"
// 加载回调
loadScript(i18njs, function () {
	layui.define([], function (exports) {
		var $ = layui.$;

		// 模块对象
		var mod = {
			lang: 'zh',
			// 初始化语言
			init: function (lang, callback) {
				$.i18n.properties({
					path: 'static/js/app/i18n',	// 文件路径
					mode: 'map',
					language: lang,
					callback: function () {
						mod.lang = lang;
						// 页面会有明显闪烁，只限于js动态执行时使用
						// $('[data-locale]').each(function () {
						// 	var key = $(this).data('locale');
						// 	// 获取原本所有子元素
						// 	var children = $(this).children();
						// 	// 清空文本节点，但保留子元素
						// 	$(this).contents().filter(function() {
						// 		return this.nodeType === 3; // 文本节点
						// 	}).remove();
						// 	// 在 label 开头插入国际化文本 + 一个空格
						// 	$(this).prepend($.i18n.prop(key) + ' ');
						// 	// 子元素保留，不受影响
						// });
						if (callback) callback();
					}
				});
			},

			// 获取翻译
			trans: function (key) {
				try {
					return $.i18n.prop(key) || key;
				} catch (error) {
					// console.error("i18n error -> "+ key)
					return key;
				}
			},

			// 获取翻译
			transFmt: function (key,...vals) {
				try {
					return $.i18n.prop(key,...vals) || key;
				} catch (error) {
					// console.error("i18n error -> "+ key)
					return key;
				}
			}
		};

		// 输出
		exports('i18n', mod);
	});
})

// 远程加载
function loadScript(url, callback) {
	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.async = 'async';
	script.src = url;
	document.body.appendChild(script);
	if (script.readyState) {
		script.onreadystatechange = function () {
			if (script.readyState == 'complete' || script.readyState == 'loaded') {
				script.onreadystatechange = null;
				callback && callback();
			}
		};
	} else {
		script.onload = function () {
			callback && callback();
		};
	}
}
