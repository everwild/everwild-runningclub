# Everwild Running Club — Next.js site

Static Next.js 16 + Tailwind 4 migration of the brand site, built for **GitHub Pages** (`output: "export"`). Content and styling are aligned with the legacy `everwild-runningclub` static site: shared `site-core.css` / page CSS live under `src/styles/`, images under `public/assets/`.

## Routes

- `/` → redirects to `/ja/`
- `/{lang}/` — home (`ja` | `en` | `zh`)
- `/{lang}/signup/` — Formspree signup form
- `/{lang}/legal/`, `/{lang}/privacy/`, `/{lang}/terms/`

Canonical / SEO base: `https://www.everwild-runningclub.com` (see `src/lib/site.ts`). Update if the production host changes.

## Scripts

```bash
npm run dev    # local dev
npm run build  # static export → out/
npm run lint
```

Preview the static bundle: `npx serve out` (or any static server).

## Environment

Copy `.env.example` to `.env.local` if you need to override Formspree:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — defaults to the same endpoint as the legacy site.

## GitHub Pages

1. Repo **Settings → Pages**: source **GitHub Actions**.
2. Workflow: `.github/workflows/deploy-gh-pages.yml` (build on push to `main`, deploy artifact `out/`).
3. **Custom domain**: `public/CNAME` is set to `everwild-runningclub.com`; add the same in Pages settings and configure DNS per GitHub docs.

## Regenerating copy from legacy JS

If the static site’s `home.js` / `signup.js` / legal scripts change, you can refresh extracted dictionaries:

```bash
node scripts/extract-home-copy.mjs
node scripts/extract-signup-copy.mjs
node scripts/extract-signup-labels.mjs
node scripts/extract-legal-page.mjs
```

(Paths assume this repo sits next to `everwild-runningclub` as on disk.)

## Relation to `everwild-runningclub`

The original static project remains the reference for pixel-level checks. After DNS points at this export, you can archive or retire the old deployment path.
