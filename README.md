# Eleventy 3.1.2 Blog — MU CSS + Arial Black/Arial

A minimal Eleventy blog scaffold using **MU CSS** and **Arial Black for headings** with **Arial for body**.

## Quick start

```bash
npm install
npm run dev
```

This starts a local dev server with live reload at http://localhost:8080 and builds to `_site/`.

### Build for production

```bash
npm run build
```

## Tech choices

- Eleventy **3.1.2**
- CSS: `<link rel="stylesheet" href="https://unpkg.com/@bafs/mu@0.3/mu.min.css" />`
- Font overrides are applied inline in the base layout:
  - Headings → Arial Black
  - Body → Arial

## Project structure

```
.
├── eleventy.config.js
├── package.json
├── src
│   ├── _data/site.json
│   ├── _includes/layouts/base.njk
│   ├── _includes/layouts/post.njk
│   ├── feed.xml (generated from feed.njk)
│   ├── feed.njk
│   ├── index.njk
│   ├── posts.njk
│   └── posts
│       ├── hello-world.md
│       └── second-post.md
└── _site (generated)
```

## Notes

- No additional CSS files are included; MU CSS is pulled from the CDN and we inline a tiny `<style>` block to set the fonts.
- Feel free to add static assets under `src/assets/` — they will be copied to `_site/assets/`.
