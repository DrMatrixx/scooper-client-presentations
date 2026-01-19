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

### Step 3: Enhance the Title Slide
The title slide must be personalized and visually compelling. Follow this structure:

1. **Add the company logo** to `public/` folder (ask user for logo if not provided)
2. **Extract key stats** from the presentation content:
   - Annual value/savings (e.g., "$100K-$200K", "AED 2.4-3.2M", "40-60%")
   - 3 pain points with numbers (e.g., "23% calls unanswered", "7+ hrs daily admin")
   - Key outcomes promised (e.g., "60%+ time saved", "zero missed calls")

3. **Use this enhanced title slide template:**

```tsx
{
  id: 'title',
  render: () => (
    <div className="text-center w-full max-w-3xl px-4">
      {/* CSS for animations */}
      <style>{`
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.3)); }
          50% { filter: drop-shadow(0 0 40px rgba(251, 191, 36, 0.6)); }
        }
        @keyframes borderGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-border-glow { animation: borderGlow 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
        .animation-delay-100 { animation-delay: 0.1s; opacity: 0; }
        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animation-delay-300 { animation-delay: 0.3s; opacity: 0; }
        .animation-delay-400 { animation-delay: 0.4s; opacity: 0; }
        .glass { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
      `}</style>

      {/* Small badge */}
      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-5 animate-fade-in-up">
        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-gray-400 text-xs sm:text-sm">AI Automation Proposal</span>
      </div>

      {/* Company logo - centered */}
      <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-100">
        <img
          src="/client-logo.png"
          alt="Client Name"
          className="h-16 sm:h-20 md:h-24 w-auto mx-auto rounded-xl shadow-lg mb-3"
        />
        <p className="text-gray-500 text-sm">Prepared exclusively for your practice</p>
      </div>

      {/* Value proposition question */}
      <div className="mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
        <p className="text-gray-400 text-base sm:text-lg mb-2">What if you could recover</p>
        <span className="animate-glow inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
          $100K–$200K
        </span>
        <p className="text-gray-400 text-sm sm:text-base mt-1">per year in lost efficiency and missed patients?</p>
      </div>

      {/* Key pain points - 3 cards with icons */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
        {[
          { value: '23%', label: 'Calls unanswered', icon: Phone },
          { value: '7+ hrs', label: 'Daily admin work', icon: Clock },
          { value: '15-22%', label: 'No-show rate', icon: Calendar },
        ].map((item, i) => (
          <div key={i} className="group relative p-3 sm:p-4 glass bg-white/5 rounded-2xl border border-rose-500/20 shadow-lg shadow-rose-500/5 hover:shadow-rose-500/10 hover:border-rose-500/40 transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <item.icon size={16} className="text-rose-400/70 mx-auto mb-2 sm:w-5 sm:h-5" />
              <p className="text-rose-400 text-xl sm:text-2xl font-bold">{item.value}</p>
              <p className="text-gray-500 text-xs mt-1">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Solution preview - animated gradient border */}
      <div className="relative max-w-lg mx-auto mb-6 sm:mb-8 animate-fade-in-up animation-delay-400">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-2xl animate-border-glow opacity-60 blur-[1px]" />
        <div className="relative glass bg-gray-950/80 rounded-2xl p-4 sm:p-5 border border-emerald-500/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Zap size={14} className="text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">In this proposal</span>
          </div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            5 custom automations to cut admin time by <span className="text-white font-bold">60%+</span>, reduce no-shows by <span className="text-white font-bold">30-50%</span>, and ensure <span className="text-white font-bold">zero missed calls</span>
          </p>
        </div>
      </div>

      {/* Navigation hint */}
      <div className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm animate-fade-in-up animation-delay-400">
        <span>Press</span>
        <div className="px-2.5 py-1.5 bg-white/10 rounded-lg text-gray-400 font-mono text-xs border border-white/10 shadow-inner">→</div>
        <span>to see how</span>
      </div>
    </div>
  ),
},
```

**Key customizations per client:**
- Replace `/client-logo.png` with actual logo path
- Update the hero number (dollar amount or percentage)
- Update the 3 pain point cards with relevant stats from their presentation
- Update the solution preview text with their specific outcomes
- Choose appropriate icons for pain points (Phone, Clock, Calendar, Users, AlertCircle, etc.)

### Step 4: Save the Presentation
1. Determine filename from client name (lowercase, hyphenated): `client-name.tsx`
2. Save to `src/presentations/client-name.tsx`
3. Keep `new-presentation.tsx` as-is (do NOT delete it - user uses it as a staging area)

### Step 5: Update Link Preview Metadata
Add client-specific meta tags to `index.html` OR create a note that link previews will use defaults.

For custom previews per presentation, the current setup uses global defaults:
- Title: "Scooper AI"
- Description: "AI Automation Solutions for Business"
- Image: `/scoop.png`

### Step 6: Ensure "Book a Call" Button Has Link
Make sure any CTA button links to: `https://cal.com/scooper-ai/discover`

```tsx
<a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="...">
  Schedule Discovery Call
</a>
```

### Step 6b: Add "Book a Call" CTA to All Inner Slides
Add a small, persistent "Book a Call" button to all slides EXCEPT the first (title) and last (closing) slides. This allows viewers to book a call from any page in the presentation.

**Implementation:**
1. Add `relative` class to the slide's main container div
2. Add the CTA anchor element as the first child inside the container

**CTA Button Template:**
```tsx
<a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
  <Rocket size={12} />
  Book a Call
</a>
```

**Example - Adding CTA to a slide:**
```tsx
// BEFORE:
{
  id: 'reality',
  render: () => (
    <div className="w-full max-w-3xl px-4">
      <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Current Reality</p>
      {/* ... rest of slide content ... */}
    </div>
  ),
}

// AFTER:
{
  id: 'reality',
  render: () => (
    <div className="w-full max-w-3xl px-4 relative">
      <a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
        <Rocket size={12} />
        Book a Call
      </a>
      <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Current Reality</p>
      {/* ... rest of slide content ... */}
    </div>
  ),
}
```

**Notes:**
- Make sure `Rocket` is imported from `lucide-react`
- The button is positioned at top-right with `absolute -top-2 right-4`
- Uses amber color theme to match the presentation styling
- DO NOT add to title slide (first slide) or closing slide (last slide with main CTA)

### Step 7: Link Scooper AI Website
Ensure "Scooper AI" text in the About Us or closing slides links to: `https://scooperai.com`

```tsx
<a href="https://scooperai.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-amber-400 transition-colors">
  Scooper AI
</a>
```

### Step 8: Build and Push
```bash
npm run build                    # Verify no errors
git add .
git commit -m "Add [client-name] presentation"
git push                         # Auto-deploys to Vercel
```

### Step 9: Confirm to User
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
