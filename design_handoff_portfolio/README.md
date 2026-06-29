# Handoff: Riva Fouzdar — Portfolio Landing Page

## Overview
A single-page personal portfolio landing page for Riva Fouzdar, a Senior Product Designer focused on AI & agentic experiences. The page presents a hero statement, a credibility strip, a six-item "selected work" grid, an "approach" section, a contact CTA, and a footer. The aesthetic is a warm, modern SaaS look: near-white ground, soft animated violet→blue gradient "blobs," rounded cards, Plus Jakarta Sans for display/body and JetBrains Mono for small labels.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing the intended look and behavior. They are **not production code to copy directly**. The `.dc.html` file uses a proprietary runtime (`support.js`) specific to the authoring environment; do **not** port that runtime.

Your task is to **recreate this design in a real codebase** using its established patterns — recommended stack: **React + Vite** (or Next.js / Astro), plain CSS or CSS Modules / Tailwind, no component library needed (the UI is simple and custom). If you adopt Tailwind, map the tokens below to your config. Treat `index.html` (the flattened, self-contained build) as the **visual source of truth** — open it in a browser to see exactly what to match.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions are specified below. Recreate the UI pixel-perfectly. Exact hex values, font sizes, and the responsive `clamp()` rules are given — use them verbatim.

---

## Layout System

- **Page max width:** `1240px`, horizontally centered (`margin: 0 auto`), with `40px` left/right padding on all sections (the dark contact panel and footer share the same `1240px / 40px` frame).
- **Vertical rhythm:** sections use generous top/bottom padding (hero `78px 0 64px`, work `88px 0 20px`, approach `96px 0`).
- **Stacking:** a fixed-position decorative blob layer sits at `z-index:0`; all real content is wrapped at `z-index:1` (`position:relative`) so it renders above the blobs.
- **Font smoothing:** `-webkit-font-smoothing:antialiased` on the root.
- **Global:** `* { margin:0; padding:0; box-sizing:border-box; }`, `html { scroll-behavior:smooth; }`, body background `#fcfcff`, text selection background `rgba(124,108,255,0.22)`.

### Decorative gradient blobs (signature element)
Four absolutely-positioned circles inside a full-bleed `position:absolute; inset:0; overflow:hidden; pointer-events:none; z-index:0` layer. Each is a `border-radius:50%` circle with a `radial-gradient(circle, <color>, transparent 68%)` fill, `filter:blur(8px)`, animated with the `drift` keyframe at staggered durations.

| # | size | position | fill color (center) | drift duration |
|---|------|----------|---------------------|----------------|
| 1 | 560×560 | top:-160 right:-120 | rgba(124,108,255,0.42) | 17s |
| 2 | 600×600 | top:340 left:-200 | rgba(46,139,255,0.34) | 21s (reverse) |
| 3 | 520×520 | top:1500 right:-140 | rgba(90,201,255,0.30) | 19s |
| 4 | 480×480 | top:2400 left:-120 | rgba(124,108,255,0.30) | 23s (reverse) |

`@keyframes drift { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(18px,-22px) scale(1.06); } }`

The blobs are tinted from the active gradient (see **Theming** below). In the React build, make them driven by the same two theme colors so a single theme switch recolors them.

---

## Screens / Views

This is a single scrolling page. Sections top to bottom:

### 1. Nav (sticky-feel top bar, not actually sticky in the prototype)
- **Layout:** flex row, `justify-content:space-between; align-items:center; padding:22px 0`.
- **Left:** wordmark "Riva Fouzdar" — Plus Jakarta Sans, `font-weight:700`, `font-size:14px`, `letter-spacing:-0.01em`.
- **Right:** flex row, `gap:30px`, `align-items:center`:
  - "Work" and "Approach" — text links, color `#1b1a2e`, `opacity:0.72`, `font-size:14px`, `font-weight:500`, anchor to `#work` / `#approach`.
  - "Get in touch" — pill button: text `#fff`, background `linear-gradient(100deg, var(--c1), var(--c2))`, `padding:9px 18px`, `border-radius:999px`, `font-weight:600`, `box-shadow:0 8px 20px -8px rgba(124,108,255,0.6)`, anchors to `#contact`.

### 2. Hero
- **Padding:** `78px 0 64px`.
- **Availability badge:** inline-flex pill, `gap:9px`, `font-family:JetBrains Mono`, `font-size:12px`, `letter-spacing:0.04em`, color `--muted` (#6e6a85), background `#fff`, `border:1px solid #eceaf8`, `padding:8px 15px`, `border-radius:999px`, `box-shadow:0 6px 18px -12px rgba(124,108,255,0.5)`, `margin-bottom:30px`. Contains a `7px` green dot (`#22c55e`, `border-radius:50%`) + text "Open to Senior Product Designer roles".
- **Headline (h1):** `font-weight:800`, `font-size:clamp(44px,7vw,90px)`, `line-height:1.02`, `letter-spacing:-0.035em`, `max-width:16ch`. Text: "I design AI products and write the **code** that ships them." The word **code** is wrapped in a span with the gradient-text treatment: `background:linear-gradient(100deg,var(--c1),var(--c2)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;`.
- **Sub-row:** CSS grid `grid-template-columns:1.6fr 1fr; gap:54px; margin-top:42px; align-items:end`.
  - **Left:** paragraph, `font-size:18px`, `line-height:1.6`, color `--muted`, `max-width:50ch`. Copy: *"Senior UX Designer at AWS, leading design for AWS Marketplace and the agentic experiences embedded inside Claude and ChatGPT. I work at the edge where design, engineering, and AI meet — not adjacent to it."*
  - **Right (stat panel):** flex column, `gap:13px`, JetBrains Mono `12px`, color `--muted`. Three rows, each `display:flex; justify-content:space-between`; first two have `border-bottom:1px solid #eceaf8; padding-bottom:11px`. Label left (muted), value right (color `#1b1a2e`):
    - LOCATION → SF Bay Area
    - EDUCATION → CMU · HCI + Bus.
    - STACK → React · Node.js

### 3. "Previously" strip
- Frosted card: `display:flex; flex-wrap:wrap; align-items:center; gap:13px 26px; padding:20px 26px`, `background:rgba(255,255,255,0.6); backdrop-filter:blur(8px); border:1px solid #eceaf8; border-radius:16px`.
- All text JetBrains Mono `12px`, `letter-spacing:0.08em; text-transform:uppercase`.
- "Previously" label in `--muted`; then company names in `#1b1a2e` separated by `/` dividers colored `#cdc7e6`: **Workday / SAP · SAP.iO / Ford / Groupon / Uber**.

### 4. Selected Work (`id="work"`)
- **Padding:** `88px 0 20px`.
- **Header row:** flex, `justify-content:space-between; align-items:baseline; margin-bottom:36px`. Left: "Selected Work" JetBrains Mono `14px`, `letter-spacing:0.16em; text-transform:uppercase`, color `--muted`. Right: "06 case studies" JetBrains Mono `13px`, `--muted`.
- **Grid:** `display:grid; grid-template-columns:repeat(2,1fr); gap:26px`.
- **Card:** `background:#fff; border:1px solid #eceaf8; border-radius:20px; overflow:hidden; cursor:pointer; box-shadow:0 1px 2px rgba(27,26,46,0.04)`.
  - **Hover:** `transform:translateY(-6px); box-shadow:0 30px 50px -28px rgba(124,108,255,0.5)`. Transition: `transform 0.4s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.4s ease`.
  - **Thumb:** `height:184px; position:relative; overflow:hidden`, background = a per-card soft gradient (see table). Inside it: a `130×130` blurred accent circle at `bottom:-30 right:-20`, `background:linear-gradient(120deg,var(--c1),var(--c2)); opacity:0.32; filter:blur(6px)`. Top-left: card number (JetBrains Mono `11px`, `rgba(27,26,46,0.5)`). Top-right: category chip — JetBrains Mono `10px` uppercase, white text on `rgba(27,26,46,0.28)` with `backdrop-filter:blur(4px)`, `padding:5px 11px; border-radius:999px`.
  - **Body:** `padding:20px 22px 22px`. Title row: flex space-between; title `font-weight:700; font-size:21px; line-height:1.15; letter-spacing:-0.02em`, plus a `↗` arrow `17px` in `var(--c1)`. Description below: `font-size:14.5px; line-height:1.5; color:--muted; margin-top:9px`.

**Work items (in order):**
| # | Title | Category chip | Thumb gradient | Description |
|---|-------|---------------|----------------|-------------|
| 01 | Marketplace in Claude & ChatGPT | Agentic · MCP | linear-gradient(125deg,#ece7ff,#dbe9ff) | An MCP connector bringing Marketplace discovery and actions into AI chat — a new paradigm with no existing playbook. |
| 02 | AI-Powered Search Redesign | AI Product | linear-gradient(125deg,#e2ecff,#d6f1ff) | Rebuilding Marketplace's highest-traffic surface on an agentic foundation for enterprise buyers. |
| 03 | Design-to-Production Workflow | Design Eng | linear-gradient(125deg,#efe9ff,#e4e0ff) | Prototyping in production React & Node.js with Claude Code and MCP — raising my own code reviews. |
| 04 | Cloudscape GenAI Components | Design Systems | linear-gradient(125deg,#e1edff,#ece7ff) | New agentic UI patterns shipped to AWS's design system, used across dozens of product teams. |
| 05 | Marketplace Solutions | 0→1 Product | linear-gradient(125deg,#e6eaff,#d9efff) | AWS's first multi-product Solutions capability, led from concept to launch. |
| 06 | International Expansion | Compliance UX | linear-gradient(125deg,#ede7ff,#dde9ff) | KYC, tax, and currency workflows that unlocked $1B+ in regional sales for the India launch. |

### 5. Approach (`id="approach"`)
- **Padding:** `96px 0`. Grid `grid-template-columns:1fr 1.35fr; gap:60px; align-items:start`.
- **Left column:** "Approach" eyebrow (JetBrains Mono `12px`, `letter-spacing:0.16em`, uppercase, `--muted`), then h3 `font-weight:800; font-size:clamp(30px,3.6vw,46px); line-height:1.06; letter-spacing:-0.03em; margin-top:18px`. Copy: "Most designers hand off specs. I write the code and **ship it.**" — "ship it." uses the gradient-text treatment.
- **Right column:** grid `grid-template-columns:1fr 1fr; gap:18px`. Four service cards: `background:#fff; border:1px solid #eceaf8; border-radius:16px; padding:22px; box-shadow:0 1px 2px rgba(27,26,46,0.04)`. Each has a `34×34` rounded-`10px` gradient icon tile (`linear-gradient(120deg,var(--c1),var(--c2))`, white JetBrains Mono `12px` number, `margin-bottom:14px`), a title (`font-weight:700; font-size:17px; letter-spacing:-0.01em; margin-bottom:8px`), and body (`font-size:14px; line-height:1.5; color:--muted`).

**Service cards:**
| # | Title | Body |
|---|-------|------|
| 01 | AI & Agentic Design | Agentic experiences, agent orchestration, MCP servers and connectors, and eval design. |
| 02 | Frontend Development | Production React and Node.js. I raise my own code reviews and ship UX to production. |
| 03 | End-to-End Product UX | Research, strategy, UX/UI, and prototyping — from zero-to-one to scaled platforms. |
| 04 | Research & Experiments | Usability testing, A/B tests, and model-improvement work alongside data science. |

### 6. Contact (`id="contact"`)
- Full-width within the `1240px` frame. Inner panel: `border-radius:28px; overflow:hidden; background:linear-gradient(120deg,var(--c1),var(--c2)); color:#fff; padding:84px 56px; position:relative`.
- Two decorative white radial circles inside (top:-100 right:-60, 360×360, `rgba(255,255,255,0.28)`; bottom:-120 left:-40, 320×320, `rgba(255,255,255,0.18)`).
- Eyebrow: JetBrains Mono `12px`, `letter-spacing:0.12em`, uppercase, `opacity:0.85`. Text: "Open to Senior Product Designer roles — AI companies".
- Headline link (`mailto:hello@rivafouzdar.com`): `font-weight:800; font-size:clamp(36px,5.6vw,72px); line-height:1.02; letter-spacing:-0.035em; color:#fff; margin-top:22px`. Two lines: "Let's build something" / "people use every day →".
- Button row (`margin-top:44px; gap:12px; flex-wrap:wrap`), JetBrains Mono `13px`:
  - "Email ↗" — solid: `background:#fff; color:#1b1a2e; padding:12px 22px; border-radius:999px; font-weight:500`.
  - "LinkedIn ↗" and "Résumé ↗" — outline: `border:1px solid rgba(255,255,255,0.5); color:#fff; padding:12px 22px; border-radius:999px`.

### 7. Footer
- `padding:24px 40px 40px; display:flex; flex-wrap:wrap; justify-content:space-between; gap:12px`, JetBrains Mono `12px`, color `--muted`. Three items: "© 2026 Riva Fouzdar" · "Designed & built in code" · "SF Bay Area".

---

## Interactions & Behavior
- **Nav links** smooth-scroll to `#work`, `#approach`, `#contact` (relies on `html { scroll-behavior:smooth }`).
- **Work cards** lift on hover (translateY(-6px) + larger shadow), `0.4s cubic-bezier(0.2,0.8,0.2,1)`. Whole card is a click target (in production, link each to a case-study route or external URL — currently non-navigating).
- **Gradient blobs** animate continuously via the `drift` keyframe (subtle float + scale). Honor `prefers-reduced-motion` by disabling the animation.
- **No entrance/scroll animations** — content is static on load by design (earlier scroll-reveal was intentionally removed for robustness; re-add tasteful fade-ins only if desired and reduced-motion-safe).
- **Responsive:** the prototype is desktop-first at ~1240px. For production add breakpoints: collapse the work grid and approach grids to a single column under ~720px, stack the hero sub-row to one column, and reduce section padding. The `clamp()` headline sizes already scale fluidly.

## State Management
- Effectively static. The only stateful concept is **theme** (see Theming) — a single source of two colors `--c1`/`--c2` (+ blob toggle), which in the prototype were author-time tweaks. In production this can be a constant; expose as a small theme object if you want it swappable.

## Theming (the "tweak" props from the prototype)
The design is driven by two CSS custom properties set on the root: `--c1` and `--c2`. Everything gradient (headline word, CTA pill, card accents, icon tiles, contact panel, blobs) references them. Default and alternates:
- **Violet → Blue (default):** `--c1:#7c6cff`, `--c2:#2e8bff`
- **Blue → Cyan:** `#3b7bff` → `#22c3e6`
- **Indigo → Sky:** `#6457f5` → `#3aa0ff`
There is also a **blobs on/off** toggle (default on). Ship with the default unless told otherwise.

## Design Tokens
**Colors**
- Ground / page bg: `#fcfcff`
- Ink (primary text): `#1b1a2e`
- Muted text: `#6e6a85`
- Card border / hairline: `#eceaf8`
- Divider (previously strip): `#cdc7e6`
- Accent 1 (`--c1`): `#7c6cff` · Accent 2 (`--c2`): `#2e8bff`
- Success dot: `#22c55e`
- White surfaces: `#ffffff`
- Selection: `rgba(124,108,255,0.22)`

**Typography**
- Display & body: **Plus Jakarta Sans** (weights 400/500/600/700/800)
- Labels & metadata: **JetBrains Mono** (weights 400/500)
- Both loaded from Google Fonts.
- Headline `clamp(44px,7vw,90px)` / 800 / -0.035em; h3 `clamp(30px,3.6vw,46px)` / 800 / -0.03em; contact headline `clamp(36px,5.6vw,72px)` / 800; body `18px`/1.6; card title `21px`/700; small body `14–14.5px`; labels `11–14px` mono.

**Radius:** cards `20px`; service cards / strip `16px`; icon tile `10px`; pills/chips `999px`; contact panel `28px`.

**Shadows:** card rest `0 1px 2px rgba(27,26,46,0.04)`; card hover `0 30px 50px -28px rgba(124,108,255,0.5)`; CTA pill `0 8px 20px -8px rgba(124,108,255,0.6)`; badge `0 6px 18px -12px rgba(124,108,255,0.5)`.

**Spacing:** page padding `40px`; grid gaps `26px` (work), `18px` (services), `54–60px` (hero/approach columns); section padding `78–96px` vertical.

## Assets
- **Fonts:** Plus Jakarta Sans + JetBrains Mono via Google Fonts (`<link>` in the head). No icon library — the only "icons" are Unicode glyphs (`↗`, `→`) and CSS-drawn shapes (dots, gradient circles). No raster images in the design.
- **User-supplied content still needed:** real case-study thumbnail imagery (currently soft gradients), real LinkedIn URL, résumé file/URL, and confirmed contact email (placeholder `hello@rivafouzdar.com`).

## Placeholders to replace before launch
- Email: `hello@rivafouzdar.com` (confirm real address)
- LinkedIn link: `#`
- Résumé link: `#`
- Work cards currently don't link anywhere — wire to case-study pages or external links.

## Files
- `index.html` — flattened, self-contained build. **Open this in a browser as the visual source of truth.**
- `Portfolio Aurora.dc.html` — the original authored source (proprietary `.dc.html` format; reference only, do not port the runtime).
- `support.js` — the authoring-environment runtime. **Reference only — do not include in the production build.**
