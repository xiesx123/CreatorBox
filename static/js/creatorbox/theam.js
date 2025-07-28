// 监听主题
var darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkThemeMediaQuery.addEventListener('change', function (e) {
  setTheme(e.matches ? 'dark' : 'light');
});

// 手动切换
var themeToggle = document.getElementById('change-theme');
if (themeToggle != null) {
  themeToggle.addEventListener('click', function () {
    var newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// 初始化检查主题
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