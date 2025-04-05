'use strict';

document.documentElement.classList.add('jsb');
// 参数
const args = new URLSearchParams(location.search);

// 主题存储方式替换 `chrome.storage.local`
const theme = () => {
  theme.alter(theme.m);

  const storedTheme = localStorage.getItem('theme') || 'system-theme';

  theme.m.removeEventListener('change', theme.alter);

  if (storedTheme === 'light-theme') {
    document.documentElement.classList.remove('jse-theme-dark');
  }
  else if (storedTheme === 'dark-theme') {
    document.documentElement.classList.add('jse-theme-dark');
  }
  else if (storedTheme === 'system-theme') {
    theme.m.addEventListener('change', theme.alter);
  }
};

theme.m = window.matchMedia('(prefers-color-scheme: dark)');
theme.alter = e => {
  document.documentElement.classList[e.matches ? 'add' : 'remove']('jse-theme-dark');
};

// 监听 `localStorage` 变化，模拟 `chrome.storage.onChanged`
window.addEventListener('storage', (event) => {
  if (event.key === 'theme') {
    theme();
  }
});

let editor;

const buttons = {
  title(name) {
    if (name === 'refresh') {
      return 'Refresh JSON from the server\n\n' + 'Last Update: ' + (new Date()).toString();
    }
    return 'Button';
  }
};

// 刷新 JSON
buttons.refresh = {
  className: 'jse-refresh-json',
  disabled: location.href.startsWith('http') === false,
  icon: {
    prefix: 'fas',
    iconName: 'jsoneditor-refresh',
    icon: [60, 60, [], '', `M 52.7 31.1 a 21.6 21.6 90 1 1 -24.4865 -21.384 v 5.8198 a 15.8551 15.8551 90 1 0 14.0458 4.3862 l -5.6268 5.629 a 0.72 0.72 90 0 1 -1.229 -0.509 V 10.94 a 1.44 1.44 90 0 1 1.44 -1.44 h 14.099 a 0.72 0.72 90 0 1 0.509 1.229 l -5.0954 5.0954 A 21.5093 21.5093 90 0 1 52.7 31.1 Z`]
  },
  async onClick(e) {
    e.target.classList.add('rotating');
    if (args.has('remote')) {
      location.reload(true);
    } else {
      try {
        const [r] = await Promise.all([
          fetch(location.href, { signal: AbortSignal.timeout(5000) }),
          new Promise(resolve => setTimeout(resolve, 1000))
        ]);
        const text = await r.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const preElement = doc.querySelector('pre');
        const content = preElement ? preElement.textContent : null;
        editor.update({ text: content });
        // e.target.parentElement.title = buttons.title('refresh');}
      } catch (e) {
        console.error(e);
        alert(e.message || 'Unknown Error');
      }
      e.target.classList.remove('rotating');
    }
  },
  title: "刷新",
  type: 'button'
};

// 保存 JSON
buttons.save = {
  className: 'jse-save-json',
  icon: {
    prefix: 'fas',
    iconName: 'jsoneditor-save',
    icon: [48, 48, [], '', `M34 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V14l-8-8zM24 38c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm6-20H10v-8h20v8z`]
  },
  onClick() {
    const o = editor.get();
    const json = o.json || JSON.parse(o.text);
    const content = JSON.stringify(json, null, 2);
    const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
    // 远程上传
    if (args.has('remote') && args.has('upload')) {
      const params = new URLSearchParams(args.get('remote').split('?')[1]);
      let url = params.get('url')
      let lastIndex = url.lastIndexOf("/");
      let formData = new FormData();
      formData.append("file", blob, url.substring(lastIndex + 1));
      formData.append("path", url.substring(0, lastIndex));
      fetch(args.get('upload'), { method: "POST", body: formData })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          console.debug(data)
          location.reload(true);
        })
        .catch(error => console.error("Fetch 错误:", error));
    }
    else {
      // 本地下载
      const a = document.createElement('a');
      a.download = (document.title || location.pathname.split('/').pop() || 'content') + '.json';
      const href = URL.createObjectURL(blob);
      a.href = href;
      a.click();
      URL.revokeObjectURL(href);
    }
  },
  title: '保存',
  type: 'button'
};

async function render() {
  const container = document.querySelector('body > pre') || document.body;
  let raw = container.innerText.trim();

  try {
    JSON.parse(raw);
  } catch (e) {
    raw = await fetch(location.href).then(r => r.text());
    console.info('Re-fetch a fresh copy', e);
  }

  const prefs = {
    mode: localStorage.getItem('editor') || 'tree',
    expandLevel: parseInt(localStorage.getItem('expandLevel') || '2', 10),
    autoFormat: localStorage.getItem('auto-format') === 'true'
  };

  if (prefs.mode === 'code') {
    prefs.mode = 'text';
  }

  container.textContent = '';

  const target = document.createElement('div');
  target.id = 'json-editor';
  document.body.append(target);

  theme();

  try {
    const { createJSONEditor } = await import('/static/js/creator/editor/standalone.js');

    const props = {
      mode: prefs.mode,
      parser: JSON,
      content: {},
      askToFormat: true,
      onRenderMenu(items, context) {
        localStorage.setItem('editor', context.mode);

        items.filter(o => o.text === 'text').forEach(o => o.title += ' (Ctrl + Shift + C)');
        items.filter(o => o.text === 'tree').forEach(o => o.title += ' (Ctrl + Shift + R)');
        items.filter(o => o.text === 'table').forEach(o => o.title += ' (Ctrl + Shift + E)');

        items.push({ type: 'separator' }, buttons.refresh, buttons.save);
        return items;
      },
      onSelect(selection) {
        editor.selection = selection;
      }
    };

    if (prefs.autoFormat) {
      try {
        props.content.json = JSON.parse(raw);
      } catch (e) {
        console.info('[Error]', 'Cannot Parse JSON', e);
        props.content.text = raw;
      }
    } else {
      props.content.text = raw;
    }

    editor = createJSONEditor({ target, props });

    requestAnimationFrame(() => {
      if (prefs.mode === 'tree') {
        if (prefs.expandLevel === -1) {
          editor.expand([], () => true);
        } else {
          editor.collapse([], path => path.length > prefs.expandLevel);
          editor.expand([], path => path.length <= prefs.expandLevel);
        }
      }
      editor.focus();
    });
  } catch (e) {
    console.error('[JSON Editor]', e);
    document.documentElement.classList.remove('jsb');
    alert('JSON Editor: ' + e.message);
  }

  document.documentElement.dataset.loaded = true;
}

/* 启动 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render, { once: true });
} else {
  render();
}

// 监听快捷键切换模式
document.addEventListener('keydown', e => {
  const meta = e.metaKey || e.ctrlKey;

  if (e.code === 'KeyC' && e.shiftKey && meta) {
    e.preventDefault();
    editor.updateProps({ mode: 'text' });
  } else if (e.code === 'KeyE' && e.shiftKey && meta) {
    e.preventDefault();
    editor.updateProps({ mode: 'table' });
  } else if (e.code === 'KeyR' && e.shiftKey && meta) {
    e.preventDefault();
    editor.updateProps({ mode: 'tree' });
  }
}, true);
