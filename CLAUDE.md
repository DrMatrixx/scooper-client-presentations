# Scooper Client Presentations

A file-based routing system for client presentations. Drop a file in `src/presentations/` and it's automatically available at a URL.

- `.tsx` files → slide-based presentations (legacy format, for converting existing code)
- `.jsx` files → full-page scrollable briefs (new format, for all new presentations)

---

## Primary Workflow: Creating a New Presentation from a URL

When the user provides a company website URL and asks to create a presentation, follow these steps in order:

### Step 1: Research the Company

Read `research_guide.md` in the project root and follow it completely. This includes:

1. **Crawl the website** — homepage, about page, team page, services/products, case studies
2. **Search the web** — LinkedIn, press mentions, news, awards
3. **Extract key data** — founder name, company detail, industry, team size, specifics (2-4 verifiable facts)
4. **Estimate pain numbers** — painNumber, painPercent, annualCost based on team size and industry
5. **Research competitive landscape** — AI adoption stats + named competitors using AI
6. **Generate 3-5 automation ideas** — specific to their business, using AI agent language (never NLP/ML/LLM/GPT jargon)
7. **Calculate summary metrics** — hours freed, capacity value, growth multiplier, cost of inaction

Output: a structured PROSPECT data object and metrics matching the schema in the research guide.

### Step 2: Build the Brief

Read `builder_guide.md` and `boilerplate.jsx` in the project root. Then:

1. **Copy the boilerplate.jsx** as the starting point
2. **Replace the PROSPECT object** with the researched data from Step 1
3. **Replace the metrics** (summary + cost of inaction) with calculated values from Step 1
4. **Update the cost-of-inaction note** — replace "Agencies" with the appropriate industry term
5. **Use `/scooperai-logo.png`** for the SCOOPER_LOGO constant (not base64)
6. **Make the nav logo + name clickable** — wrap in `<a href="https://scooperai.com" target="_blank">`
7. **Customize** layout, animations, or sections if the prospect's story calls for it (the boilerplate is a starting point, not rigid)

The builder guide has the full Scooper design system, language rules, metric calculations, and quality checklist. Follow all of it.

### Step 3: Save the File

Save as `src/presentations/[company-name-kebab-case].jsx`

### Step 4: Build and Push

```bash
npm run build                    # Verify no errors
git add src/presentations/[company-name].jsx
git commit -m "Add [Company Name] presentation"
git push                         # Auto-deploys to Vercel
```

### Step 5: Confirm to User

Tell the user:
- URL: `https://automate.scooperai.com/[company-name]`
- Presentation is live after Vercel deploys (~30 seconds)

### Step 6: Create Fibery Task for Outreach

After every successful push, create a task in Fibery to track sending the presentation to the client. Use the Fibery MCP tools.

**Fibery IDs (stable references):**
- **Project "Send Presentation":** `a035bce0-0986-11f1-8c87-89b3169bc778`
- **User "Varun R":** `0d64c333-1f51-490f-afb6-aad8d36d732d`
- **Status "To Do":** `64424c5f-dac9-4b25-9907-437dfdc4e8f0`
- **Priority "High":** `1f1634e0-fae1-11f0-8a1b-f7b71fb33898`

**Steps:**

1. **Create the task** using `mcp__fibery__create_entity` with type `Management Space/Task`:
   ```json
   {
     "Management Space/Name": "Send Presentation — [Client Name]",
     "Management Space/Status": {"fibery/id": "64424c5f-dac9-4b25-9907-437dfdc4e8f0"},
     "Management Space/Related Project": {"fibery/id": "a035bce0-0986-11f1-8c87-89b3169bc778"},
     "Management Space/Priority": {"fibery/id": "1f1634e0-fae1-11f0-8a1b-f7b71fb33898"}
   }
   ```

2. **Write the description** (Markdown) with three sections:

   ```markdown
   ## Presentation Link

   [Client Name — AI Automation Proposal](https://automate.scooperai.com/client-name)

   ---

   ## Email Body

   **Subject:** [Compelling subject referencing the client's key opportunity/pain point]

   Hi [Name],

   [2-3 sentences showing you understand their business — reference specific details
   from the presentation like company size, customer count, industry, current tools, etc.]

   I put together a personalized proposal showing how AI automation could help your team
   [key value prop from the presentation — e.g., "recover $250K–$600K annually"]. It covers:

   - **[Module 1]** — [one-line benefit]
   - **[Module 2]** — [one-line benefit]
   - **[Module 3]** — [one-line benefit]
   - [... list all automation modules from the presentation]

   Here's the proposal: https://automate.scooperai.com/client-name

   It's a 3-minute read. Would love to hear your thoughts — happy to hop on a quick call
   if any of this resonates.

   Best,
   Varun
   Scooper AI
   https://scooperai.com

   ---

   ## LinkedIn Connection Message

   Hi [Name] — [1-2 sentences showing familiarity with their business]. I put together a
   short AI automation proposal tailored to your team — covers [2-3 key areas]. Would love
   to share it if you're open to it!
   ```

   **Key rules for the description content:**
   - Extract real details from the presentation (company size, pain points, dollar amounts, modules)
   - Email subject should be specific and compelling, not generic
   - LinkedIn message must be under 300 characters
   - Both messages should feel personalized, not templated

3. **Assign to Varun** using `mcp__fibery__add_collection_items` (Assigned To is a collection field):
   ```json
   {
     "type": "Management Space/Task",
     "field": "Management Space/Assigned To",
     "entity": {"fibery/id": "<new-task-id>"},
     "items": [{"fibery/id": "0d64c333-1f51-490f-afb6-aad8d36d732d"}]
   }
   ```

4. **Confirm to user** with the Fibery task link returned from the create call.

---

## Key Reference Files

| File | Purpose |
|---|---|
| `research_guide.md` | How to research a prospect — crawl, extract, estimate pain, find competitors, generate automations |
| `builder_guide.md` | How to build the brief — design system, language rules, metric calculations, quality checklist |
| `boilerplate.jsx` | Template for new briefs — copy this and customize the PROSPECT data + metrics |

Always read these files before creating a new presentation. They contain critical rules about language (no NLP/ML/LLM jargon), design (dark theme, amber accents), required sections, and metric formulas.

---

## Legacy Workflow: Converting `new-presentation.tsx`

When the user adds code to `new-presentation.tsx` (an existing slide-based presentation), convert it to the `.tsx` PresentationConfig format:

### Step 1: Read and Analyze
1. Read `new-presentation.tsx` in the project root
2. Identify the client name and all slides (`if (s === 'slideName')` patterns)

### Step 2: Convert to PresentationConfig Format
```tsx
import type { PresentationConfig } from '../types/presentation';
import { GradientText } from '../components/GradientText';
import { Rocket, Users, Clock } from 'lucide-react';

const presentation: PresentationConfig = {
  title: 'Client Name',
  description: 'Brief description',
  slides: [
    { id: 'title', render: () => (<div>...</div>) },
    { id: 'reality', render: () => (<div>...</div>) },
  ],
};

export default presentation;
```

**Conversion rules:**
- Each `if (s === 'slideName') return (...)` becomes `{ id: 'slideName', render: () => (...) }`
- Replace inline `G` component with imported `<GradientText>`
- Remove unused icon imports
- Keep all Tailwind classes and styling intact

### Step 3: Add "Book a Call" CTA to Inner Slides
Add to all slides EXCEPT the first (title) and last (closing):
```tsx
<a href="https://cal.com/scooper-ai/discover" target="_blank" rel="noopener noreferrer" className="absolute -top-2 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium transition-all">
  <Rocket size={12} />
  Book a Call
</a>
```
Add `relative` to the slide's main container div.

### Step 4: Link Scooper AI Website
Ensure "Scooper AI" text links to: `https://scooperai.com`

### Step 5: Save, Build, Push
1. Save to `src/presentations/client-name.tsx`
2. Keep `new-presentation.tsx` as-is (staging area)
3. `npm run build && git add . && git commit && git push`

### Step 6: Create Fibery Task
Follow the same Fibery task creation steps as the primary workflow above.

---

## How It Works

- `src/presentations/hos.tsx` → `automate.scooperai.com/hos` (slide-based)
- `src/presentations/armance.jsx` → `automate.scooperai.com/armance` (full-page brief)
- `/` redirects to scooperai.com

The router (`src/routes/router.tsx`) auto-discovers both `.tsx` and `.jsx` files:
- Files exporting a `PresentationConfig` (with `slides` array) → rendered via `PresentationRoute` with keyboard nav, swipe, progress bar
- Files exporting a React component → rendered via `FullPageRoute` as a standalone scrollable page

## Mobile Responsiveness Rules

For **slide-based presentations (.tsx)**:
1. Never use `overflow-hidden` on the slide container
2. Keep slide content concise — mobile is ~375px wide, ~587px usable height
3. Always use responsive text sizes (`text-sm sm:text-base`) and spacing (`mb-3 sm:mb-5`)
4. Never use `truncate` on text content
5. If a slide has 5+ cards or 6+ list items, it will overflow on mobile

For **full-page briefs (.jsx)**:
- The boilerplate is already mobile-optimized with inline responsive styles
- Follow the builder guide's design system rules

## Project Structure

```
src/
  presentations/     # Drop presentation files here (.tsx or .jsx)
    hos.tsx          # Slide-based presentation
    armance.jsx      # Full-page brief
  components/        # Shared UI components
    GradientText.tsx
    PresentationShell.tsx
    SlideNavigation.tsx
  routes/            # Auto-discovery router
    router.tsx       # Routes both .tsx and .jsx files
    PresentationRoute.tsx  # Slide-based renderer
    FullPageRoute.tsx      # Full-page renderer
  types/
    presentation.ts  # TypeScript interfaces

research_guide.md    # Prospect research methodology
builder_guide.md     # Brief building methodology
boilerplate.jsx      # Template for new briefs
```

## Commands

```bash
npm run dev      # Local dev server
npm run build    # Production build
git push         # Deploy to Vercel
```

## Deployment

- **Vercel URL:** https://automate.scooperai.com
- **GitHub:** https://github.com/DrMatrixx/scooper-client-presentations
- Push to `master` → auto-deploys
