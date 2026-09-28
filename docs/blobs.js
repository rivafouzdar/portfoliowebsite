// Subtle organic drift for background gradient blobs, powered by Motion (MIT, motion.dev).
// Falls back to the inline CSS `drift` keyframes if the library can't load.
import { animate } from 'https://cdn.jsdelivr.net/npm/motion@12/+esm';

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const seen = new WeakSet();
const rnd = (a, b) => a + Math.random() * (b - a);

function drift(el) {
  if (seen.has(el)) return;
  seen.add(el);
  el.style.animation = 'none';
  if (reduce) return;
  const r = rnd(180, 260), x = [0], y = [0], scale = [1], opacity = [1];
  for (let i = 0; i < 4; i++) { x.push(rnd(-r, r)); y.push(rnd(-r, r)); scale.push(rnd(0.8, 1.3)); opacity.push(rnd(0.55, 1)); }
  x.push(0); y.push(0); scale.push(1); opacity.push(1);
  animate(el, { x, y, scale, opacity }, { duration: rnd(12, 18), repeat: Infinity, ease: 'easeInOut' });
}

function scan() {
  document.querySelectorAll('[aria-hidden="true"] > div').forEach(el => {
    if (!seen.has(el) && getComputedStyle(el).animationName === 'drift') drift(el);
  });
}

scan();
new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
