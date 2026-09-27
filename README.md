# Riva Fouzdar — Portfolio

Personal portfolio site, hosted on GitHub Pages.

**Live:** https://rivafouzdar.github.io/portfoliowebsite/

## How it's hosted

GitHub Pages serves the static site from the `docs/` folder on the `main`
branch (Settings → Pages → Source: `main` / `/docs`).

## What's in `docs/`

- `index.html` — homepage (Riva Portfolio Homepage)
- `Case Study - Multi-Product Solutions.dc.html`
- `Case Study - Auto-Renewals.dc.html`
- `Case Study - Search Redesign.dc.html`
- `support.js`, `image-slot.js`, `image-slots.state.json` — page runtime
- `uploads/` — images and media
- `.nojekyll` — tells GitHub Pages to serve files as-is (no Jekyll)

To preview locally, serve the folder and open it in a browser:

```bash
cd docs && python3 -m http.server 8000
# then visit http://localhost:8000/
```
