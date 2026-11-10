// Applies the saved theme before first paint so the page never flashes the wrong colours.
try {
  var saved = localStorage.getItem('vt-theme');
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
} catch (e) {}
