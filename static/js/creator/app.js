layui.config({
	base: '../../static/js/creator/'
}).extend({
	// 信息提示
	notice: 'mod/toastr',
	// 常用操作
	tool: 'mod/tools',
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

	// 浮動按钮
	var floatingDiv = document.getElementById('floating-div');
	var offset = 100;
	window.addEventListener('scroll', function () {
		throttle(function () {
			const scrollHeight = document.documentElement.scrollHeight; // 页面总高度
			const scrollTop = window.scrollY; // 当前滚动高度
			const windowHeight = window.innerHeight; // 当前视窗高度
			// 判断是否接近底部 (距离底部 100px 以内)
			if (scrollHeight - (scrollTop + windowHeight) <= offset) {
				floatingDiv.classList.remove('floating-div');
			} else {
				floatingDiv.classList.add('floating-div');
			}
		}, 500);
	});

	// 百度统计
	// var _hmt = _hmt || [];
	// (function () {
	//   var hm = document.createElement("script");
	//   hm.src = "https://hm.baidu.com/hm.js?0f28a627b93e9c2e599680e1827e1314";
	//   var s = document.getElementsByTagName("script")[0];
	//   s.parentNode.insertBefore(hm, s);
	// })();
});

