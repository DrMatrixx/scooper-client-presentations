# Scooper Client Presentations

A file-based routing system for client presentations. Drop a `.tsx` file and it's automatically available at a URL.

## How It Works

- `src/presentations/hos.tsx` → `yoursite.com/hos`
- `src/presentations/acme.tsx` → `yoursite.com/acme`
- `/` redirects to scooperai.com

## Adding a New Presentation

1. Create a file in `src/presentations/` (e.g., `client-name.tsx`)
2. Use this template:

```tsx
import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';

const presentation: PresentationConfig = {
  title: 'Client Name',
  description: 'Optional description',
  slides: [
    {
      id: 'title',
      render: () => (
        <div className="text-center w-full max-w-2xl px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Title Slide</h1>
          <p className="text-gray-400">With <GradientText>highlighted text</GradientText></p>
        </div>
      ),
    },
    {
      id: 'slide2',
      render: () => (
        <div className="w-full max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Another Slide</h2>
          <p className="text-gray-300">Content here...</p>
        </div>
      ),
    },
    // Add more slides...
  ],
};

export default presentation;
```

3. Push to GitHub → Vercel auto-deploys

## Converting Existing Presentation Code

If you have a presentation with this format:

```tsx
if (s === 'title') return (<div>...</div>);
if (s === 'reality') return (<div>...</div>);
```

Convert each block to:

```tsx
slides: [
  { id: 'title', render: () => (<div>...</div>) },
  { id: 'reality', render: () => (<div>...</div>) },
]
```

## Available Components

### GradientText
Amber-to-orange gradient text effect.
```tsx
import { GradientText } from '../components/GradientText';
<GradientText>Highlighted text</GradientText>
```

### Icons (lucide-react)
```tsx
import { Rocket, Users, Clock } from 'lucide-react';
<Rocket size={16} className="text-amber-400" />
```

## Styling

Uses Tailwind CSS. Common patterns:

- Dark background: `bg-gray-950`
- Cards: `bg-white/5 rounded-xl border border-white/10`
- White text: `text-white`
- Muted text: `text-gray-400`, `text-gray-500`
- Accent: `text-amber-400`, `bg-amber-500/20`
- Success: `text-emerald-400`, `bg-emerald-500/10`
- Error: `text-rose-400`, `bg-rose-500/10`

## Project Structure

```
src/
  presentations/     # Drop presentation files here
    hos.tsx
  components/        # Shared UI components
    GradientText.tsx
    PresentationShell.tsx
    SlideNavigation.tsx
  routes/            # Auto-discovery router
    router.tsx
    PresentationRoute.tsx
  types/
    presentation.ts  # TypeScript interfaces
```

## Commands

```bash
npm run dev      # Local dev server
npm run build    # Production build
git push         # Deploy to Vercel
```

## Features

- Keyboard navigation (← → arrows, spacebar)
- URL-based slide tracking (`/hos?slide=3`)
- Responsive design (mobile + desktop)
- Auto-discovery of presentation files
