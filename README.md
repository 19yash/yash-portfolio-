# Yash Gupta · Portfolio

Personal portfolio of **Yash Gupta, Full Stack AI Engineer**: React and React Native apps, Python and Node.js APIs, and the RAG and agent systems behind them.

Built with **Vite, React 19, TypeScript and React Router**, styled with plain CSS. No UI framework, no CSS library.

## What's on the site

**Home page**

- **Hero** with a code-style title, a short tagline, a profile photo and links to projects and the résumé.
- **About**: a short introduction in a full-width blue band.
- **What I work with**: 18 skills with brand icons, each noting where it was used in production. Filter by Frontend, Backend, Cloud + Data or AI.
- **Projects I'm proud of**: four project cards, each linking to its own detail page.
- **Where I've worked**, a **contact card** and a footer with a copy-email button and social links.

**Project detail pages** (`/projects/<slug>`), each covering the project, the problem it solves, the tech stack, my role and the links:

| Project | What it is | Links |
|---|---|---|
| Patient Care Platform | Transitional Care Management (TCM) platform for US healthcare practices, with a RAG assistant over patient history | Private client project |
| AI Interview Prep Kit | Turns a job description, company URL and prep days into a personalised interview plan through a multi-step AI pipeline | [Live demo](https://interview-prep-kit-web-nine.vercel.app/) · [GitHub](https://github.com/19yash/interview-prep-kit) |
| Marble Advisory App | Offline-first React Native tablet app that sales executives use to guide clients through choosing stone | Private client project |
| Shiv Nadar School App (OneSNS) | Cross-platform app that coordinates school activities across campuses: attendance, fees, transport, lesson plans and more | [App Store](https://apps.apple.com/in/app/onesns/id6783798696) · [Google Play](https://play.google.com/store/apps/details?id=com.sns_mobile) |

**Responsive and accessible**

- Works from 320px phones up to wide desktops. On phones the skill filter becomes a swipeable row, and the screenshot gallery swipes too.
- Keyboard-friendly: a skip link, visible focus styles and real buttons and links throughout.
- Motion is kept small (hero fade-in, a blinking caret, hover lifts) and switches off when the visitor's device asks for reduced motion.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # type-check and build to dist/
npm run preview    # serve the production build locally
npm run lint
```

## Project structure

```text
src/
  data/
    content.ts      profile, intro, skills, experience
    projects.ts     project cards and detail-page content
    icons.ts        skill icon paths (Simple Icons)
  components/       Header, Hero, About, Skills, Projects, Experience, Footer, ...
  pages/
    HomePage.tsx
    ProjectPage.tsx
  styles/
    global.css      design tokens, layout, components and motion
public/
  photo.webp        profile photo
  projects/         project screenshots
```

## Editing content

All text lives in `src/data/`. Components only render it, so most updates don't touch any component code.

| To change | Edit |
|---|---|
| Name, tagline, email, social links, photo | `profile` in `src/data/content.ts` |
| Skills and where they were used | `skills` in `src/data/content.ts` |
| A project card or its detail page | `src/data/projects.ts` |
| Colours and fonts | Tokens at the top of `src/styles/global.css` |

Images go in `public/` and are referenced from the root, for example `'/projects/sns/cover.webp'`.

Each project supports these optional fields: `image` (16:9 card picture), `flow` (pipeline steps shown when there is no image), `gallery` (screenshots for a swipeable strip), `modules`, `howItWorks`, `decisions`, `links` (Live demo, GitHub, App Store or Google Play) and `linksNote`.

The résumé buttons point to `/Yash_Gupta_Resume.pdf`. Add that file to `public/`, or change `profile.resume`, to make them work.

## Deploying

The build is static, but the site uses client-side routes (`/projects/<slug>`), so the host must serve `index.html` for every path.

- **Vercel** (recommended): import this repo. The defaults work (build `npm run build`, output `dist`), and `vercel.json` already handles the routing.
- **Netlify:** same build settings, plus a `public/_redirects` file containing `/*  /index.html  200`.
- **GitHub Pages:** set `base` in `vite.config.ts` to `'/yash-portfolio-/'` (unless you use a custom domain), pass the same value to `<BrowserRouter basename>`, and copy `dist/index.html` to `dist/404.html` before publishing.

## Credits

- Skill and store icons: [Simple Icons](https://simpleicons.org) (CC0). Pinecone has no Simple Icons glyph, so it uses a simple placeholder shape.
- Fonts: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) from Google Fonts.
- OneSNS screenshots are from the app's public store listing.

## Contact

- Email: yashgupta19082000@gmail.com
- LinkedIn: [yash-gupta-a11063236](https://www.linkedin.com/in/yash-gupta-a11063236)
- GitHub: [@19yash](https://github.com/19yash)
