# ShipYard

A small product-catalog storefront built with Next.js (App Router) and TypeScript: a home page with a responsive product grid, and a statically generated detail page for every product.

**Repository (public):** https://github.com/Abhi200926/shipyard

**Live site:** https://abhi200926.github.io/shipyard/

**Lighthouse Performance (Mobile):** _TODO: fill in after measuring the live site_ / 100

## What's inside

- Typed data (`app/data/products.ts`) and a reusable `ProductCard`
- Dynamic route `app/products/[id]` with `generateStaticParams`, `notFound()` and per-product `generateMetadata`
- `next/image` (explicit sizes, `priority` on above-the-fold images), `next/font`, and a lazy-loaded Reviews panel via `next/dynamic`
- `loading.tsx`, `error.tsx` (client boundary with retry) and `not-found.tsx`
- Static export (`output: "export"`) deployed to GitHub Pages by GitHub Actions

## Run locally

```bash
npm install
npm run dev          # development server at http://localhost:3000
```

To check the production build (use this, not `npm run dev`, for Lighthouse):

```bash
npm run build        # writes the static site to out/
npx serve out        # serve it locally
```

Local builds have no base path. The deploy workflow sets `GITHUB_ACTIONS=true`, which makes `next.config.ts` build with `basePath: "/shipyard"` to match the repository name.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the app and publishes `out/` to GitHub Pages. One-time setup: **Settings > Pages > Source: GitHub Actions**.
