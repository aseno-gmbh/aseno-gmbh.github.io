# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm ci              # install dependencies
npm run dev         # start dev server (localhost:3000)
npm run build       # production build (outputs static site to /out)
npm run lint        # ESLint via Next.js
```

There are no tests. The site is deployed as a static export — `npm run build` runs `next export` and writes HTML to `out/`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/publish-page-ci.yml`), which builds and deploys the `out/` folder to the `public` branch via `JamesIves/github-pages-deploy-action`.

## Architecture

Next.js 15 app with the **App Router** (`app/` directory), configured for **static export** (`output: 'export'` in `next.config.js`). No server-side rendering — all pages are pre-rendered to HTML.

- `app/layout.jsx` — root layout wrapping every page with `<Header>`, `<Footer>`, and `<ScrollToTop>`. Theme is provided by `next-themes` (dark mode default) in `app/providers.jsx`.
- `app/page.jsx` — homepage, assembles section components.
- `components/` — one directory per section/widget; each has an `index.jsx` as the main export plus optional data files (e.g. `featuresData.jsx`, `menuData.jsx`).
- `components/Agent/ElevenLabsAgent.tsx` — loads the ElevenLabs voice widget via a `<Script>` tag and injects shadow-DOM CSS to hide the ElevenLabs branding link. The agent ID is hardcoded in `app/page.jsx`.

## Styling

Tailwind CSS with a custom color palette defined in `tailwind.config.js`. Key colors: `primary: #4A6CF7`, `dark: #1D2144`, `body-color: #959CB1`. Dark mode is enabled via the `class` strategy. Custom breakpoints differ from Tailwind defaults (e.g. `sm` is 575px, not 640px).

All content is in German (targeting German-speaking business customers).
