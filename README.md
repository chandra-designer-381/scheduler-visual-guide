# Job Scheduler Visual State Architecture

Internal design document for Sitetracker's Job Scheduler 2.0 visual state system. Shared with product, design, and engineering teams to align on how job states should be visually represented in the scheduler UI.

## What this communicates

Three teams are designing features that affect the same UI surface (the weekly schedule grid):

1. **Draft & Auto Scheduling** — draft mode + Scout AI auto-scheduling
2. **Execution Variance** — showing when field work diverges from the schedule
3. **Core Scheduler** — the existing live schedule

This document proposes a unified visual grammar based on competitive analysis of Salesforce FSL, Dynamics 365, and Google Calendar.

### The three rules

1. **Color = Lifecycle Status only** (Blue = Scheduled, Green = In Progress, Gray = Stale)
2. **Opacity/Hatching = Commitment Level** (Solid = Live, Hatched + dashed = Draft)
3. **Small Badge = Origin** (Scout "S" badge for auto-scheduled, nothing for manual)

## Tech stack

- Vite + React 18 + TypeScript
- Tailwind CSS v4

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

Add `base: '/scheduler-visual-guide/'` to `vite.config.ts` before deploying to GitHub Pages (the base path must match the repo name).
