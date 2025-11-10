// 监听页面主题变化
var darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkThemeMediaQuery.addEventListener('change', function (e) {
  setTheme(e.matches ? 'dark' : 'light');
});

// 监听存储数据变化
window.addEventListener('storage', (event) => {
  if (event.key === 'theme') {
    console.debug('Theme changed in another tab:', event.oldValue, '→', event.newValue);
    setTheme(event.newValue);
  }
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

// 设置主题
function setTheme(theme) {
  console.debug(theme)
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// 初始检查
var savedTheme = localStorage.getItem('theme') || (darkThemeMediaQuery.matches ? 'dark' : 'light');
setTheme(savedTheme);