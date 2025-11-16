(function(){
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    function toggle() {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch(e) {}
    }

    window.toggleTheme = toggle; // optional global

    document.addEventListener('click', function(e) {
      var btn = e.target && e.target.closest && e.target.closest('[data-toggle-theme]');
      if (btn) {
        e.preventDefault();
        toggle();
      }
    });
  } catch (e) {
    // fail silently
  }
})();
