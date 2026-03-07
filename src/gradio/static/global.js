() => {
	// body
	var body = document.querySelector('body');

	// 监听主题
	var darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	darkThemeMediaQuery.addEventListener('change', function (e) {
		setTheme(e.matches ? 'dark' : 'light');
	});

	// 监听存储数据变化
	window.addEventListener('storage', (event) => {
		if (event.key === 'theme') {
			// console.debug('Theme changed in another tab:', event.oldValue, '→', event.newValue);
			setTheme(event.newValue);
		}
	});

	// 手动切换
	var themeToggle = document.getElementById('dark_mode');
	if (themeToggle != null) {
		themeToggle.addEventListener('click', function () {
			var newTheme = body.classList.contains('dark') ? 'light' : 'dark';
			setTheme(newTheme);
			localStorage.setItem('theme', newTheme);
		});
	}

	// 设置主题
	function setTheme(theme) {
		// console.debug(theme)
		if (theme === 'dark') {
			body.classList.add('dark');
		} else {
			body.classList.remove('dark');
		}
        if(themeToggle){
        	// const textNode = Array.from(themeToggle.childNodes).reverse().find(n => n.nodeType === Node.TEXT_NODE);
			// if (textNode) textNode.textContent = (theme =='dark') ? '深色' : '浅色';
        }
	}
    
    // 初始检查
	var savedTheme = localStorage.getItem('theme') || (darkThemeMediaQuery.matches ? 'dark' : 'light');
	setTheme(savedTheme);
}
