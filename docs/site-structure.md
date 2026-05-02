# Site Structure

## Current Brand Site

```text
everwild-runningclub/
  index.html
  404.html
  signup/
    index.html
  legal/
    index.html
  privacy/
    index.html
  terms/
    index.html
  robots.txt
  sitemap.xml
  assets/
    css/
      shared/
        site-core.css
      pages/
        home.css
        signup.css
        legal.css
    js/
      shared/
        site-i18n.js
        site-nav.js
      pages/
        home.js
        signup.js
        legal.js
        privacy.js
        terms.js
    images/
      hero/
      about/
      routes/
      runs/
      logo/
  docs/

../raw/
```

## Rule of Thumb

- `index.html` and route folders only keep page structure.
- Shared design language lives in `assets/css/shared` and `assets/js/shared`.
- Page-specific behavior and layout live in `assets/css/pages` and `assets/js/pages`.
- Final web assets stay in `assets/images`.
- Raw source materials stay in `../raw`.
- Optional: create a `backup/` folder when you need to park old exports or experiments (not required for the live site).

## Shared scripts

- **`site-i18n.js`**: `createSiteI18n`, and `initLegalPage` for legal/privacy/terms (wraps the same i18n helper with a copy bundle).
- **`site-nav.js`**: Mobile hamburger / drawer navigation (loaded after `site-i18n.js` on pages that include the standard header).

## Adding a New Page

For a new route such as `/partners`:

```text
partners/
  index.html
assets/css/pages/
  partners.css
assets/js/pages/
  partners.js
```

Recommended pattern:

1. Reuse `assets/css/shared/site-core.css`
2. Add only page-specific layout to `partners.css`
3. Reuse `assets/js/shared/site-i18n.js`
4. Put only page-specific copy and interaction in `partners.js`
5. If the page uses the standard header, also include `assets/js/shared/site-nav.js` after `site-i18n.js`

## If a Sister Brand Uses the Same Design Language

At the workspace level, move shared design language one level up and keep each brand separate:

```text
brands/
  everwild-runningclub/
  sister-brand-name/
shared/
  design-system/
    css/
    js/
    images/
```

Recommended split:

- `shared/design-system/css`
  Shared tokens, header, navigation, button, card, form, footer rules
- `shared/design-system/js`
  Shared i18n helper, modal helper, carousel helper, form helper
- `shared/design-system/images`
  Shared utility icons or system-level graphics

Each brand then keeps only:

- brand-specific copy
- brand-specific imagery
- route structure
- brand-specific page modules

This keeps the design language consistent while allowing each brand to evolve independently.
