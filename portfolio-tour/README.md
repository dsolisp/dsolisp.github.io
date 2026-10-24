# Portfolio tour (Remotion)

Video tour of [dsolisp.github.io](https://dsolisp.github.io) — hero, CI Lab, Gavel, architecture, projects, about, outro.

## Download (committed MP4s)

| File | Format | Direct download |
| --- | --- | --- |
| [`exports/portfolio-tour.mp4`](./exports/portfolio-tour.mp4) | 1920×1080 | [raw](https://github.com/dsolisp/dsolisp.github.io/raw/main/portfolio-tour/exports/portfolio-tour.mp4) |
| [`exports/portfolio-tour-mobile.mp4`](./exports/portfolio-tour-mobile.mp4) | 1080×1920 | [raw](https://github.com/dsolisp/dsolisp.github.io/raw/main/portfolio-tour/exports/portfolio-tour-mobile.mp4) |

Clone also works: after `git pull`, open those paths locally.

## Compositions

| ID | Format | Use |
| --- | --- | --- |
| `PortfolioTour` | 1920×1080 (16:9) | YouTube / LinkedIn / site |
| `PortfolioTourMobile` | 1080×1920 (9:16) | TikTok / Instagram Reels |

## Preview

```bash
cd portfolio-tour
npm install
npm run dev
```

- Landscape: `http://localhost:3000/PortfolioTour`
- Vertical: `http://localhost:3000/PortfolioTourMobile`

## Re-render

```bash
cd portfolio-tour
npm i
npx remotion render PortfolioTour exports/portfolio-tour.mp4
npx remotion render PortfolioTourMobile exports/portfolio-tour-mobile.mp4
```

Scratch renders can go to `out/` (gitignored). Ship updates via `exports/`.

## Scenes

| Scene | Content |
| --- | --- |
| Title | Brand + role |
| Hero | Native orbits + Gavel CLI |
| CI Lab | Live Actions / Allure |
| Gavel | Case study |
| Architecture | Pipeline diagram |
| Projects | Multi-stack grid |
| About | Core skills |
| Outro | dsolisp.github.io |
