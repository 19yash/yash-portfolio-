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

Copy lives in two files, and components in `src/components/` and `src/pages/` only render it:

- [`src/data/content.ts`](src/data/content.ts): profile, intro, skills and experience.
- [`src/data/projects.ts`](src/data/projects.ts): the project cards and each project's detail page at `/projects/<slug>` (overview, the problem it solves, tech stack, your role, links). Optional fields: `modules`, `howItWorks`, `decisions`, `gallery` (screenshots for a swipeable strip), `linksNote`. Link labels can be Live demo, GitHub, App Store or Google Play.

| To add | Put the file in `public/` and set |
|---|---|
| Your photo | `profile.photo`, e.g. `'/photo.jpg'` (square, at least 400×400) |
| Résumé PDF | `public/Yash_Gupta_Resume.pdf`, or change `profile.resume` |
| Project screenshots | `image` on each project (16:9 works best). Without one, a project with `flow` shows its pipeline stages instead |
| Project links | `links` on each project, e.g. `[{ label: 'Live demo', href: 'https://…' }]`; links only show when set |
| Company logo | `experience.logo` |

Skill icons come from [Simple Icons](https://simpleicons.org) (CC0) and live in `src/data/icons.ts`. Pinecone has no Simple Icons glyph, so it uses a placeholder shape.

## Design notes

- Colours and fonts are tokens at the top of [`src/styles/global.css`](src/styles/global.css). Fonts: Plus Jakarta Sans and JetBrains Mono from Google Fonts.
- Motion is limited to: hero fade-up on load, a caret that blinks five times, hover lift on tiles and cards, and a short fade when skill filters change. All of it switches off under `prefers-reduced-motion`.
- On phones the skill filter becomes a swipeable row with no scrollbar. Chip widths are set so the fourth chip is cut off at the screen edge, which signals that the row scrolls.

## Deploy

The build output in `dist/` is static, so any static host works:

The site has client-side routes (`/projects/<slug>`), so the host must serve `index.html` for unknown paths.

- **Vercel:** import the repo; build command `npm run build`, output directory `dist`. `vercel.json` already rewrites all paths to `index.html`.
- **Netlify:** same build settings, plus a `public/_redirects` file containing `/*  /index.html  200`.
- **GitHub Pages:** set `base` in `vite.config.ts` to `'/<repo-name>/'` unless you use a custom domain, pass the same base to `<BrowserRouter basename>`, and copy `dist/index.html` to `dist/404.html` before publishing so deep links load.
