layui.config({
	base: '../../static/js/creatorbox/'
}).extend({
	// 信息提示
	notice: 'mod/toastr',
	// 常用操作
	tool: 'mod/tools',
	// 网页翻译
	translate: 'mod/translate',
	// 字幕
	asr: 'dubbing/asr',
	// 翻译
	llm: 'dubbing/llm',
	// 配音
	tts: 'dubbing/tts',
	// 草稿
	draft: 'dubbing/draft',
});

// 节流函数
throttleTimeout = null
function throttle(callback, delay) {
	if (throttleTimeout) return;
	throttleTimeout = setTimeout(function () {
		callback();
		throttleTimeout = null;
	}, delay);
}

// 顶部条
NProgress.configure({
	speed: 500,
	showSpinner: false
});
$().ready(function () {
	NProgress.start();
});
$(window).load(function () {
	NProgress.done();
});

$(window).load(function () {

	// 指示条
	$(document).on("mouseenter", "*[lay-tips]", function () {
		var e = $(this),
			i = lay.options(this, {
				attr: "lay-tips"
			}),
			t = layer.tips(i.content, this, {
				tips: i.direction || 1,
				time: -1,
				success: function (e, t) {
					e.css("margin", i.margin)
				}
			});
		e.data("index", t)
	}).on("mouseleave", "*[lay-tips]", function () {
		layer.close($(this).data("index"))
	});

	// 浮动按钮
	var floatingDiv = document.getElementById('floating-div');
	var offset = 100;
	window.addEventListener('scroll', function () {
		throttle(function () {
			const scrollHeight = document.documentElement.scrollHeight; // 页面总高度
			const scrollTop = window.scrollY; // 当前滚动高度
			const windowHeight = window.innerHeight; // 当前视窗高度
			if (!floatingDiv) {
				return  // 忽略
			}
			// 判断是否接近底部 (距离底部 100px 以内)
			if (scrollHeight - (scrollTop + windowHeight) <= offset) {
				floatingDiv.classList.remove('floating-div');
			} else {
				floatingDiv.classList.add('floating-div');
			}
		}, 500);
	});
	if (floatingDiv) {
		floatingDiv.classList.add('floating-div');
	}

	// 折叠状态
	layui.use(['element'], function () {
		var element = layui.element;

		// 恢复折叠状态
		function restoreCollapseState() {
			var collapseState = JSON.parse(localStorage.getItem('collapse')) || {};
			Object.keys(collapseState).forEach(function (filter) {
				var state = collapseState[filter];
				var collapseContent = document.querySelector('[lay-filter="' + filter + '"] .layui-colla-content');
				if (!collapseContent) {
					return  // 忽略
				}
				if (state) {
					collapseContent.classList.add('layui-show'); // 展开
				} else {
					collapseContent.classList.remove('layui-show'); // 折叠
				}
			});
		}

		// 保存折叠状态
		function saveCollapseState(filter, isShow) {
			var collapseState = JSON.parse(localStorage.getItem('collapse')) || {};
			collapseState[filter] = isShow;
			localStorage.setItem('collapse', JSON.stringify(collapseState));
		}

		// 初始化所有折叠面板的点击事件
		function initCollapseEvent() {
			// 给每个折叠面板绑定事件
			document.querySelectorAll('.layui-collapse').forEach(function (collapse) {
				var filter = collapse.getAttribute('lay-filter');
				element.on('collapse(' + filter + ')', function (data) {
					// 记录每个面板的展开状态
					saveCollapseState(filter, data.show);
					// 显示状态，仅用于演示
					console.debug(filter + ' collapse status:' + data.show);
				});
			});
		}
		// 恢复状态并绑定事件
		restoreCollapseState();
		initCollapseEvent();
	});

	// // 百度统计
    // var _hmt = _hmt || [];
    // (function () {
    //   var hm = document.createElement("script");
    //   hm.src = "https://hm.baidu.com/hm.js?0f28a627b93e9c2e599680e1827e1314";
    //   var s = document.getElementsByTagName("script")[0];
    //   s.parentNode.insertBefore(hm, s);
    // })();	
});

