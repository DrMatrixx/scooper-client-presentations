# Scooper Client Presentations

A file-based routing system for client presentations. Drop a `.tsx` file and it's automatically available at a URL.

## Agent Workflow: Processing New Presentations

When the user adds code to `new-presentation.tsx`, follow these steps:

### Step 1: Read and Analyze
1. Read `new-presentation.tsx` in the project root
2. Identify the client name from the content (look for title, company name, etc.)
3. Identify all slides (look for `if (s === 'slideName')` patterns or similar)

### Step 2: Convert to Presentation Format
Transform the code to match this structure:

```tsx
import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
// Import only the icons actually used in the presentation
import { Rocket, Users, Clock, /* etc */ } from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Client Name',
  description: 'Brief description for link previews',
  slides: [
    {
      id: 'title',
      render: () => (
        // Slide JSX content here
      ),
    },
    // More slides...
  ],
};

export default presentation;
```

**Conversion rules:**
- Each `if (s === 'slideName') return (...)` becomes `{ id: 'slideName', render: () => (...) }`
- Replace inline `G` component with imported `<GradientText>`
- Remove unused icon imports
- Keep all Tailwind classes and styling intact
- Preserve the exact slide content/JSX

### Step 3: Save the Presentation
1. Determine filename from client name (lowercase, hyphenated): `client-name.tsx`
2. Save to `src/presentations/client-name.tsx`
3. Keep `new-presentation.tsx` as-is (do NOT delete it - user uses it as a staging area)

### Step 4: Update Link Preview Metadata
Add client-specific meta tags to `index.html` OR create a note that link previews will use defaults.

For custom previews per presentation, the current setup uses global defaults:
- Title: "Scooper AI"
- Description: "AI Automation Solutions for Business"
- Image: `/scoop.png`

### Step 5: Ensure "Book a Call" Button Has Link
Make sure any CTA button links to: `https://cal.com/scooper-ai/discover`

```tsx
<a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="...">
  Schedule Discovery Call
</a>
```

### Step 6: Link Scooper AI Website
Ensure "Scooper AI" text in the About Us or closing slides links to: `https://scooperai.com`

```tsx
<a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-amber-400 transition-colors">
  Scooper AI
</a>
```

### Step 7: Build and Push
```bash
npm run build                    # Verify no errors
git add .
git commit -m "Add [client-name] presentation"
git push                         # Auto-deploys to Vercel
```

### Step 8: Confirm to User
Tell the user:
- URL: `https://[vercel-domain]/client-name`
- Presentation is live after Vercel deploys (~30 seconds)

---

## How It Works

- `src/presentations/hos.tsx` → `yoursite.com/hos`
- `src/presentations/acme.tsx` → `yoursite.com/acme`
- `/` redirects to scooperai.com

## Adding a New Presentation (Manual)

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

## Deployment

- **Vercel URL:** https://automate.scooperai.com
- **GitHub:** https://github.com/DrMatrixx/scooper-client-presentations
- Push to `master` → auto-deploys
