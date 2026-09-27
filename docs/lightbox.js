(function () {
  if (window.__rfLightbox) return; window.__rfLightbox = true;
  var ICON = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 2.5h4v4M6.5 13.5h-4v-4M13.5 2.5 9 7M2.5 13.5 7 9"/></svg>';
  function srcOf(el) {
    if (el.tagName === 'IMG') return el.currentSrc || el.src;
    var i = (el.shadowRoot && el.shadowRoot.querySelector('img')) || el._img;
    if (i && i.getAttribute('src')) return i.src;
    var a = el.getAttribute('src'); return a ? new URL(a, location.href).href : '';
  }
  var overlay, big;
  function open(src, alt) {
    if (!src) return;
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.setAttribute('role', 'dialog'); overlay.setAttribute('aria-modal', 'true');
      overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(18,16,36,0.88);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:clamp(16px,4vw,48px);cursor:zoom-out;opacity:0;transition:opacity .18s ease;';
      big = document.createElement('img');
      big.style.cssText = 'max-width:100%;max-height:100%;object-fit:contain;border-radius:12px;box-shadow:0 30px 80px rgba(0,0,0,0.45);background:#fff;cursor:default;';
      big.addEventListener('click', function (e) { e.stopPropagation(); });
      var x = document.createElement('button');
      x.setAttribute('aria-label', 'Close');
      x.innerHTML = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9"/></svg>';
      x.style.cssText = 'position:absolute;top:18px;right:18px;width:44px;height:44px;border-radius:999px;border:0;background:rgba(255,255,255,0.14);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;';
      overlay.appendChild(big); overlay.appendChild(x);
      overlay.addEventListener('click', close);
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    }
    big.src = src; big.alt = alt || '';
    document.body.appendChild(overlay);
    document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(function () { overlay.style.opacity = '1'; });
  }
  function close() {
    if (!overlay || !overlay.parentNode) return;
    overlay.style.opacity = '0';
    document.documentElement.style.overflow = '';
    setTimeout(function () { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 180);
  }
  function attach(el) {
    if (el.__lb) return; el.__lb = true;
    var box = el.parentElement; if (!box) return;
    if (getComputedStyle(box).position === 'static') box.style.position = 'relative';
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('aria-label', 'View image full screen'); b.innerHTML = ICON;
    b.style.cssText = 'position:absolute;right:12px;bottom:12px;z-index:5;width:34px;height:34px;border-radius:10px;border:1px solid rgba(27,26,46,0.1);background:rgba(255,255,255,0.92);backdrop-filter:blur(6px);color:#1b1a2e;display:flex;align-items:center;justify-content:center;cursor:zoom-in;box-shadow:0 4px 14px rgba(27,26,46,0.14);transition:transform .15s ease, background .15s ease;';
    b.onmouseenter = function () { b.style.transform = 'scale(1.08)'; b.style.background = '#fff'; };
    b.onmouseleave = function () { b.style.transform = ''; b.style.background = 'rgba(255,255,255,0.92)'; };
    b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); open(srcOf(el), el.getAttribute('alt') || el.getAttribute('placeholder')); });
    box.appendChild(b);
  }
  function scan() { document.querySelectorAll('main img, image-slot, section img, header img, #dc-root img').forEach(function (el) { if (el.closest('[role="dialog"]')) return; if (el.tagName === 'IMG' && el.closest('image-slot')) return; attach(el); }); }
  new MutationObserver(function () { clearTimeout(scan._t); scan._t = setTimeout(scan, 120); }).observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
})();
