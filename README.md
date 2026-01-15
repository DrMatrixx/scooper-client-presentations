# Scooper Client Presentations

Presentation system for Scooper AI client proposals. Built with React, Vite, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

## Adding Presentations

Drop a `.tsx` file in `src/presentations/` — it's automatically available at that URL.

| File | URL |
|------|-----|
| `src/presentations/hos.tsx` | `/hos` |
| `src/presentations/acme.tsx` | `/acme` |

See [CLAUDE.md](./CLAUDE.md) for detailed documentation.

## Deployment

Connected to Vercel. Push to `master` to deploy:

```bash
git add . && git commit -m "Update" && git push
```

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- React Router (file-based routing)
