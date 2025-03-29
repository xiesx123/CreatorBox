const args = new URLSearchParams(location.search);

const next = () => {
  const s = document.createElement('script');
  s.src = '/static/js/editor/inject.js';
  document.documentElement.append(s);
};

if (args.has('content')) {
  document.querySelector('pre').textContent = args.get('content');
  next();
} 
else if (args.has('remote')) {
  fetch(args.get('remote'))
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.querySelector('pre').textContent = data;
      document.title = args.get('title') || 'JSON Viewer';
      next();
    })
    .catch(error => {
      console.error('Fetch error:', error);
      location.href = args.get('href') || '/';
    });
} 
else {
  next();
}
