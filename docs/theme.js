(function () {
  if (window.__rfTheme) return; window.__rfTheme = true;
  var KEY = 'rf-theme';
  var saved = null; try { saved = localStorage.getItem(KEY); } catch (e) {}
  var initial = saved || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initial);

  function sel(prop, hex, rgb) {
    var out = [], forms = [prop + ':' + hex, prop + ': ' + hex];
    if (rgb) forms.push(prop + ': ' + rgb, prop + ':' + rgb);
    forms.forEach(function (f) { out.push('html[data-theme="dark"] [style*="' + f + '"]'); });
    return out.join(',');
  }
  var D = 'html[data-theme="dark"]';
  var css = [
    D + '{color-scheme:dark;}',
    D + ' body{background:#0f0e17 !important;}',
    D + ' [style*="--muted"]{--muted:#a7a2c2 !important;--ink:#ecebf5 !important;}',
    sel('background', '#fcfcff', 'rgb(252, 252, 255)') + '{background:#0f0e17 !important;}',
    sel('background', '#fff', 'rgb(255, 255, 255)') + '{background:#1a1826 !important;}',
    sel('background', 'rgba(255,255,255,0.', 'rgba(255, 255, 255, 0.') + '{background:rgba(26,24,38,0.82) !important;}',
    sel('background', '#f1eeff', 'rgb(241, 238, 255)') + '{background:#2a2448 !important;}',
    sel('background', '#f7f5ff', 'rgb(247, 245, 255)') + '{background:#221e38 !important;}',
    sel('background', '#faf9ff', 'rgb(250, 249, 255)') + '{background:#1d1a2e !important;}',
    sel('background', '#eef0fb', 'rgb(238, 240, 251)') + '{background:#1d1a2e !important;}',
    sel('background', '#e8f2ff', 'rgb(232, 242, 255)') + '{background:#172640 !important;}',
    D + ' [style*="linear-gradient(125deg"]{background:#1d1a30 !important;}',
    sel('color', '#1b1a2e', 'rgb(27, 26, 46)') + '{color:#ecebf5 !important;}',
    sel('color', '#6e6a85', 'rgb(110, 106, 133)') + '{color:#a7a2c2 !important;}',
    sel('color', '#1f6fd6', 'rgb(31, 111, 214)') + '{color:#86b6ff !important;}',
    sel('color', '#7c6cff', 'rgb(124, 108, 255)') + '{color:#a597ff !important;}',
    sel('color', '#8a82b8', 'rgb(138, 130, 184)') + '{color:#a7a2c2 !important;}',
    [D + ' [style*="#eceaf8"]', D + ' [style*="rgb(236, 234, 248)"]', D + ' [style*="#e4e0f3"]', D + ' [style*="rgb(228, 224, 243)"]', D + ' [style*="#dcd6f3"]', D + ' [style*="rgb(220, 214, 243)"]', D + ' [style*="rgba(27, 26, 46, 0.08)"]', D + ' [style*="rgba(27,26,46,0.08)"]'].join(',') + '{border-color:rgba(255,255,255,0.1) !important;}',
    D + ' a{color:#a597ff;}',
    '.rf-theme-btn{position:fixed;right:18px;bottom:18px;z-index:9000;width:44px;height:44px;border-radius:999px;border:1px solid rgba(27,26,46,0.1);background:rgba(255,255,255,0.92);backdrop-filter:blur(8px);color:#1b1a2e;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 20px rgba(27,26,46,0.16);transition:transform .15s ease;}',
    '.rf-theme-btn:hover{transform:scale(1.06);}',
    D + ' .rf-theme-btn{background:rgba(34,31,52,0.92) !important;color:#ecebf5 !important;border-color:rgba(255,255,255,0.12) !important;}'
  ].join('\n');
  var st = document.createElement('style'); st.id = 'rf-theme-css'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  var MOON = '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16.5 12.2A7 7 0 0 1 7.8 3.5a7 7 0 1 0 8.7 8.7z"/></svg>';
  var SUN = '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="10" cy="10" r="3.6"/><path d="M10 1.8v2M10 16.2v2M1.8 10h2M16.2 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4"/></svg>';
  function render(btn) {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.innerHTML = dark ? SUN : MOON;
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }
  function mount() {
    if (document.querySelector('.rf-theme-btn')) return;
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'rf-theme-btn';
    render(btn);
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      render(btn);
    });
    document.body.appendChild(btn);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
