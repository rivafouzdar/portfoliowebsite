(function () {
  // Change the password here.
  var PASSWORD = 'riva2026';
  var KEY = 'rf-case-unlocked';
  var EMAIL = 'rivafouzdar8@gmail.com';
  try { if (sessionStorage.getItem(KEY) === '1') return; } catch (e) {}

  var root = document.createElement('div');
  root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-labelledby', 'rf-gate-title');
  root.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:#fcfcff;display:flex;align-items:center;justify-content:center;padding:24px;font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#1b1a2e;-webkit-font-smoothing:antialiased;overflow:hidden;";
  root.innerHTML =
    '<div aria-hidden="true" style="position:absolute;top:-160px;right:-120px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(124,108,255,0.38),transparent 68%);filter:blur(8px);"></div>' +
    '<div aria-hidden="true" style="position:absolute;bottom:-200px;left:-160px;width:560px;height:560px;border-radius:50%;background:radial-gradient(circle,rgba(46,139,255,0.26),transparent 68%);filter:blur(8px);"></div>' +
    '<a href="Riva Portfolio Homepage.dc.html" style="position:absolute;top:22px;left:clamp(18px,5vw,40px);font-weight:700;font-size:14px;color:#1b1a2e;text-decoration:none;">Riva Fouzdar</a>' +
    '<form style="position:relative;width:100%;max-width:420px;background:rgba(255,255,255,0.82);backdrop-filter:blur(10px);border:1px solid #eceaf8;border-radius:24px;padding:clamp(28px,5vw,40px);display:flex;flex-direction:column;gap:18px;box-shadow:0 30px 60px -40px rgba(124,108,255,0.55);">' +
      '<div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(120deg,#7c6cff,#2e8bff);display:flex;align-items:center;justify-content:center;color:#fff;"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="9" width="12" height="8.5" rx="2"/><path d="M6.5 9V6.5a3.5 3.5 0 0 1 7 0V9"/></svg></div>' +
      '<div style="display:flex;flex-direction:column;gap:8px;"><h1 id="rf-gate-title" style="margin:0;font-weight:800;font-size:26px;line-height:1.15;letter-spacing:-0.025em;">This case study is password protected</h1>' +
      '<p style="margin:0;font-size:15px;line-height:1.6;color:#6e6a85;">Some of this work is confidential. Enter the password to view it.</p></div>' +
      '<label style="display:flex;flex-direction:column;gap:8px;font-size:13px;font-weight:600;">Password' +
        '<span style="position:relative;display:block;"><input type="password" autocomplete="current-password" style="font:inherit;font-weight:500;font-size:16px;padding:13px 52px 13px 14px;border-radius:12px;border:1px solid #dcd6f3;background:#fff;color:#1b1a2e;outline:none;min-height:48px;box-sizing:border-box;width:100%;">' +
        '<button type="button" data-eye aria-label="Show password" aria-pressed="false" style="position:absolute;top:50%;right:4px;transform:translateY(-50%);width:44px;height:44px;border:0;background:transparent;color:#6e6a85;border-radius:10px;display:flex;align-items:center;justify-content:center;cursor:pointer;"></button></span></label>' +
      '<p data-err role="alert" style="margin:-6px 0 0;font-size:13.5px;color:#c2344d;display:none;">That password isn\u2019t right. Try again.</p>' +
      '<button type="submit" style="font:inherit;font-weight:600;font-size:15px;color:#fff;background:linear-gradient(100deg,#7c6cff,#2e8bff);border:0;border-radius:999px;padding:13px 22px;min-height:48px;cursor:pointer;">Unlock</button>' +
      '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;font-size:14px;padding-top:4px;">' +
        '<a href="Riva Portfolio Homepage.dc.html#work" style="color:#6e6a85;text-decoration:none;">\u2190 All work</a>' +
        '<a href="mailto:' + EMAIL + '?subject=Portfolio%20password" style="color:#7c6cff;font-weight:600;text-decoration:none;">Contact for the password</a>' +
      '</div>' +
    '</form>';

  function mount() {
    // The page runtime can run this script twice; only ever show one dialog.
    if (document.getElementById('rf-gate-title')) return;
    try { if (sessionStorage.getItem(KEY) === '1') return; } catch (e) {}
    (document.body || document.documentElement).appendChild(root);
    document.documentElement.style.overflow = 'hidden';
    var input = root.querySelector('input'); setTimeout(function () { input.focus(); }, 50);
    var err = root.querySelector('[data-err]');
    input.addEventListener('focus', function () { input.style.borderColor = '#7c6cff'; input.style.boxShadow = '0 0 0 3px rgba(124,108,255,0.18)'; });
    input.addEventListener('blur', function () { input.style.borderColor = '#dcd6f3'; input.style.boxShadow = 'none'; });
    var EYE = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1.8 10S4.8 4.5 10 4.5 18.2 10 18.2 10 15.2 15.5 10 15.5 1.8 10 1.8 10z"/><circle cx="10" cy="10" r="2.6"/></svg>';
    var EYE_OFF = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1.8 10S4.8 4.5 10 4.5c1.6 0 3 .5 4.2 1.2M18.2 10s-3 5.5-8.2 5.5c-1.6 0-3-.5-4.2-1.2"/><path d="M8.2 8.2a2.6 2.6 0 0 0 3.6 3.6M3 3l14 14"/></svg>';
    var eye = root.querySelector('[data-eye]'); eye.innerHTML = EYE;
    eye.addEventListener('click', function (e) {
      e.preventDefault(); var show = input.type === 'password';
      input.type = show ? 'text' : 'password'; eye.innerHTML = show ? EYE_OFF : EYE;
      eye.setAttribute('aria-label', show ? 'Hide password' : 'Show password'); eye.setAttribute('aria-pressed', show ? 'true' : 'false');
      input.focus();
    });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); tryUnlock(); } });
    root.querySelector('button[type="submit"]').addEventListener('click', function (e) { e.preventDefault(); tryUnlock(); });
    root.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); tryUnlock(); });
    function tryUnlock() {
      if (input.value.trim() === PASSWORD) {
        try { sessionStorage.setItem(KEY, '1'); } catch (x) {}
        document.documentElement.style.overflow = '';
        root.style.transition = 'opacity .25s ease'; root.style.opacity = '0';
        setTimeout(function () { root.remove(); }, 260);
      } else {
        err.style.display = 'block'; input.value = ''; input.focus();
        input.style.borderColor = '#c2344d';
      }
    }
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
