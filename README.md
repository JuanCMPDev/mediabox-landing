# Mediabox MCP — Landing & Docs

Landing page and documentation site for [Mediabox MCP](https://github.com/JuanCMPDev/mediabox-mcp), the AI-powered self-hosted media server stack.

## Stack

- **[Astro](https://astro.build/)** v6 — Static site generation
- **[Tailwind CSS](https://tailwindcss.com/)** v4 — Styling
- **[MDX](https://mdxjs.com/)** — Documentation content via Content Collections
- **[React](https://react.dev/)** — Interactive islands (Tabs, CopyButton)
- **Nginx** — Production serving via Docker

## Features

- Dark theme with glassmorphism (inspired by Linear)
- 8-section landing page with terminal mockup, architecture diagram, tool categories
- 44 documentation pages (22 EN + 22 ES)
- i18n with automatic browser language detection (EN/ES)
- Mobile-responsive with drawer navigation for docs
- Pagefind-ready static search
- Docker multi-stage build for production

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Build

```bash
npm run build
npm run preview
```

## Docker

```bash
docker build -t mediabox-landing .
docker run -p 8080:80 mediabox-landing
```

## Deploy

Designed for deployment with [Coolify](https://coolify.io/) on a VPS. Coolify auto-detects the Dockerfile and handles HTTPS via Traefik.

## Project Structure

```
src/
├── components/
│   ├── landing/     # Hero, Features, Architecture, Tools, Deploy, QuickStart, Stats, CTA
│   ├── docs/        # Sidebar, TOC, Pagination, Breadcrumb
│   ├── ui/          # Button, Card, Tabs, CopyButton
│   └── common/      # Header, Footer
├── content/docs/    # MDX documentation (en/ + es/)
├── data/            # Tools, features, services, navigation data
├── i18n/            # EN/ES translations
├── layouts/         # Base, Landing, Docs layouts
├── pages/           # Routes
└── styles/          # Global CSS + Tailwind theme
```

## License

MIT — [Mediabox MCP](https://github.com/JuanCMPDev/mediabox-mcp)
