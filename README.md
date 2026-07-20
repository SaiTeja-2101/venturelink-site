# VentureLink — Coming Soon

A standalone, premium coming-soon / holding page for **VentureLink Advisory Private Limited**,
with a 24-hour launch countdown, brand contact details, and tasteful motion.

Built with Next.js (App Router) + React 19 + TypeScript + Tailwind CSS v4 + `motion`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

## Configure

Everything editable lives in **`src/config/site.ts`**:

- `LAUNCH_AT` — the countdown target instant. Default is 2026-07-21 11:00 (India time).
  Change this one constant to move the launch.
- `CONTACT` — phone / WhatsApp / email shown at the bottom.
- `COPY` — headline and sub-copy.

Swap the logo by replacing `public/brand/venturelink-symbol.webp` (and `.png`) — no code change.

## Deploy to Vercel

```bash
npm i -g vercel     # if not installed
vercel              # preview deployment
vercel --prod       # production
```

Or push to a Git repo and import it in the Vercel dashboard.
