// 顶部进度条
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

// 监听主题变化
var darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkThemeMediaQuery.addEventListener('change', function (e) {
  setTheme(e.matches ? 'dark' : 'light');
});

// 手动切换主题
var themeToggle = document.getElementById('change-theme');
if (themeToggle != null) {
  themeToggle.addEventListener('click', function () {
    var newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// 初始化时检查主题
var savedTheme = localStorage.getItem('theme') || (darkThemeMediaQuery.matches ? 'dark' : 'light');
setTheme(savedTheme);

// 设置主题
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// 节流函数
throttleTimeout = null
function throttle(callback, delay) {
  if (throttleTimeout) return; // 如果定时器已经存在，则不执行
  throttleTimeout = setTimeout(function () {
    callback();
    throttleTimeout = null; // 清除定时器
  }, delay);
}

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

// // 百度统计
// var _hmt = _hmt || [];
// (function () {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?0f28a627b93e9c2e599680e1827e1314";
//   var s = document.getElementsByTagName("script")[0];
//   s.parentNode.insertBefore(hm, s);
// })();