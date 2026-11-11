# Satyan Infotech — Next.js migration

This project is a static Next.js App Router migration of the public-facing CodeIgniter website in `/Users/jaykumar/Downloads/satyanci`. The original visual system and frontend assets are preserved under `public/frontend`, including the responsee grid, icon fonts, imagery, and `final.css` bundle.

## Public route map

| CodeIgniter URL | Next.js route | Status |
| --- | --- | --- |
| `/` | `/` | Migrated |
| `/dedicated-resource-model` | `/dedicated-resource-model/` | Migrated |
| `/project-model` | `/project-model/` | Migrated |
| `/contact-us` | `/contact-us/` | Migrated; direct email and phone contact |
| `/job-us` | `/job-us/` | Migrated; direct email and phone contact |

The original `/sign-in`, `/admin/*`, `contact/submit`, and `careers/submit` endpoints are not public static pages. They rely on CodeIgniter sessions, a database, and PHP file uploads, so they are intentionally not exported as Next.js routes.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate and build

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build` uses `output: "export"` and writes the deployable static site to `out/`. Serve that directory from any static host or with a local static file server. The build does not require PHP, CodeIgniter, MySQL, or a Node.js runtime after export.

## Contact flow

The contact and career pages currently show direct email addresses and phone numbers instead of displaying forms. Backend submission and resume upload can be added later without changing the public routes.

```bash
NEXT_PUBLIC_SITE_URL=https://satyaninfotech.com
```

## SEO and hosting

- Metadata is defined with the Next.js Metadata API.
- Canonical, Open Graph, and Twitter URLs default to `https://satyaninfotech.com` because that domain is present in the source `app/Config/App.php`. Override it with `NEXT_PUBLIC_SITE_URL` if deployment uses another domain.
- `sitemap.xml` includes only the five public pages.
- `robots.txt` disallows `/admin/` and `/sign-in/`.
- The clean URLs use trailing slashes. Configure hosting redirects from legacy URLs without trailing slashes if the host does not normalize them automatically.
- Deploy the contents of `out/`; do not use SPA fallback rewrites for missing pages because the static 404 page is included.

## Migration checklist

- [x] Audited controllers, routes, shared views, assets, CSS, and frontend JavaScript.
- [x] Reused original branding, images, fonts, icon classes, grid CSS, and content.
- [x] Converted shared header, dropdown navigation, footer, map, and hero layouts into components.
- [x] Added responsive mobile navigation and portfolio/testimonial interactions.
- [x] Converted the dedicated resource and project model pages.
- [x] Converted contact and career pages to direct email and phone contact while backend functionality is pending.
- [x] Added static metadata, sitemap, robots, and 404 handling.
- [x] Verified TypeScript, ESLint, production build, static output, routes, and a key image through a local static server.

## Known limitations

The original admin portal, authentication, database-backed message/job lists, PHP form handlers, resume storage, and session flash messages remain backend functionality and require a separately hosted service if they must continue after the static migration.
