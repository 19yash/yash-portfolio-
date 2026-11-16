# Yash Gupta · Portfolio

Personal portfolio site for Yash Gupta, Full Stack AI Engineer. Built with Vite, React and TypeScript, with plain CSS.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
npm run lint
```

## Editing content

All copy lives in [`src/data/content.ts`](src/data/content.ts): profile, intro, skills, projects and experience. Components in `src/components/` only render it.

| To add | Put the file in `public/` and set |
|---|---|
| Your photo | `profile.photo`, e.g. `'/photo.jpg'` (square, at least 400×400) |
| Résumé PDF | `public/Yash_Gupta_Resume.pdf`, or change `profile.resume` |
| Project screenshots | `image` on each project (16:9 works best) |
| Project links | `link` on each project; the "View project →" link only shows when it is set |
| Company logo | `experience.logo` |

Skill icons come from [Simple Icons](https://simpleicons.org) (CC0) and live in `src/data/icons.ts`. Pinecone has no Simple Icons glyph, so it uses a placeholder shape.

## Design notes

- Colours and fonts are tokens at the top of [`src/styles/global.css`](src/styles/global.css). Fonts: Plus Jakarta Sans and JetBrains Mono from Google Fonts.
- Motion is limited to: hero fade-up on load, a caret that blinks five times, hover lift on tiles and cards, and a short fade when skill filters change. All of it switches off under `prefers-reduced-motion`.
- On phones the skill filter becomes a swipeable row with no scrollbar. Chip widths are set so the fourth chip is cut off at the screen edge, which signals that the row scrolls.

## Deploy

The build output in `dist/` is static, so any static host works:

- **Vercel / Netlify:** import the repo; build command `npm run build`, output directory `dist`.
- **GitHub Pages:** set `base` in `vite.config.ts` to `'/<repo-name>/'` unless you use a custom domain, then publish `dist/`.
