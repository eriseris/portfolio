# Editable creative-studio portfolio

A React, Vite, and Motion portfolio inspired by the editorial structure and visual rhythm of the supplied Framer reference. All imagery is original placeholder artwork.

## Edit content

Open `src/data.js`. Projects, clients, services, process steps, team members, posts, and testimonials are plain arrays. Duplicate an item to add another one. Put new images in `assets/` and update its `image` value.

The content layer is CMS-ready. See `docs/CMS.md` to connect a future headless CMS by setting one environment variable; the page components do not need to be rewritten.

Global colors, spacing, and typography are CSS variables at the top of `styles.css`. Main page copy and contact details live in `index.html`.

## Preview locally

Install dependencies and run Vite:

```powershell
npm install
npm run dev
```

Then open the URL printed by Vite, normally `http://localhost:5173`.

## Publish with GitHub Pages

Run `npm run build` to create `dist/`. A GitHub Pages workflow is included at `.github/workflows/deploy-pages.yml`; pushing `main` builds and deploys automatically after **Settings → Pages → Source** is set to **GitHub Actions**. Hash-based routing keeps every page refresh-safe on GitHub Pages.
My 2026 Web Portfolio
