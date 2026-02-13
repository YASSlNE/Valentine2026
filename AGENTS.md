# AGENTS.md

## Purpose
This repository is a private Valentine website for Mahmoud -> Farah.
Protect privacy, keep the experience cute and soft-lux, and preserve mobile-first performance.

## Non-Negotiables
- Keep the whole site password-gated.
- Do not add analytics, trackers, ad scripts, or third-party embeds.
- Keep anti-indexing in place:
  - `app/robots.ts` must disallow all.
  - Root metadata robots must stay `noindex, nofollow`.
  - `next.config.ts` must keep `X-Robots-Tag: noindex, nofollow`.
- Never hardcode private secrets in code.
  - Passcode comes from `PASSCODE`.
  - Session encryption secret comes from `SESSION_SECRET`.

## Content Rules
- All user-facing copy must stay in content files:
  - `content/site.ts`
  - `content/photos.ts`
- Components should render content from these files only.
- If adding a new section/page, add its strings to `content/site.ts` first.

## Tech Stack
- Next.js 15 App Router + TypeScript
- TailwindCSS
- Framer Motion
- `next/image` for all photos

## Photo Workflow
- Source originals: `Photos/`
- Optimized output: `public/photos/`
- Regenerate optimized photos and update `content/photos.ts` with:
  - `npm run photos:optimize`
- Do not bypass this pipeline for gallery photos.

## UX and Animation Requirements
- Mobile-first layouts.
- Warm cream + lily-yellow soft-lux theme.
- Animations should remain subtle and smooth.
- Respect reduced motion:
  - Use Framer Motion `useReducedMotion()`.
  - Keep CSS `prefers-reduced-motion` fallback behavior.

## Security/Auth Expectations
- Passcode gate page: `/unlock`
- Session cookie name: `valentine_session`
- Protected routes enforced by `middleware.ts`
- Unauthenticated users must be redirected to `/unlock`.

## Dev Commands
- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Optimize photos: `npm run photos:optimize`

## Definition of Done for Changes
Before finishing work, run:
1. `npm run build`
2. `npm run lint`

Then manually verify:
1. `/unlock` accepts valid passcode and rejects invalid passcode.
2. Protected routes redirect to `/unlock` when logged out.
3. Gallery renders via `next/image` and lightbox works.
4. No privacy protections were removed.

## Deployment Notes
- Deploy on Vercel.
- Required environment variables:
  - `PASSCODE`
  - `SESSION_SECRET`
- Keep GitHub and Vercel project visibility private.
