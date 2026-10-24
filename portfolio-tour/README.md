# Portfolio tour (Remotion)

Video tour of [dsolisp.github.io](https://dsolisp.github.io) — hero, CI Lab, Gavel, architecture, projects, about, outro.

## Compositions

| ID | Format | Use |
| --- | --- | --- |
| `PortfolioTour` | 1920×1080 (16:9) | YouTube / LinkedIn / site |
| `PortfolioTourMobile` | 1080×1920 (9:16) | TikTok / Instagram Reels |

Scenes adapt via `useTourLayout()` — vertical keeps copy clear of TikTok/IG chrome (top status + bottom caption UI).

## Preview

```bash
cd portfolio-tour
npm install
npm run dev
```

- Landscape: `http://localhost:3000/PortfolioTour`
- Vertical: `http://localhost:3000/PortfolioTourMobile`

## Render (files on your machine)

From a local clone of this repo:

```bash
cd portfolio-tour
npm i

# Landscape (YouTube / LinkedIn)
npx remotion render PortfolioTour out/portfolio-tour.mp4

# TikTok / Instagram Reels — 1080×1920
npx remotion render PortfolioTourMobile out/portfolio-tour-mobile.mp4
```

Outputs land in `portfolio-tour/out/` on **your disk** (that folder is gitignored — not on GitHub).
Studio preview: `npm run dev` → `/PortfolioTourMobile`.

## Scenes

| Scene | Content |
| --- | --- |
| Title | Brand + role |
| Hero | Orbits + CLI screenshot |
| CI Lab | Live Actions / Allure |
| Gavel | Case study |
| Architecture | Pipeline diagram |
| Projects | Multi-stack grid |
| About | Core skills |
| Outro | dsolisp.github.io |
