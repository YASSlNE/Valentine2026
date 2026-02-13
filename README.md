# Private Valentine Site (Mahmoud -> Farah)

A private, mobile-first Valentine website built with Next.js 15 App Router, TypeScript, TailwindCSS, and Framer Motion.

## Stack
- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- `next/image` with optimized local photos

## Privacy Defaults
- Passcode gate with encrypted cookie session
- Middleware route protection
- `robots.txt` disallow all
- Meta robots: `noindex, nofollow`
- `X-Robots-Tag: noindex, nofollow`
- No analytics or third-party trackers

## Quick Start
1. Install dependencies:
```bash
npm install
```
2. Add environment variables:
```bash
cp .env.example .env.local
```
3. Start dev server:
```bash
npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables
- `PASSCODE`: passcode required on `/unlock`
- `SESSION_SECRET`: long random secret used to encrypt the session cookie token

Example:
```env
PASSCODE=05052024
SESSION_SECRET=your-very-long-random-secret-value
```

## Content Editing
All site copy lives in editable files:
- `content/site.ts`: headings, labels, letter text, reasons list, page captions
- `content/photos.ts`: photo records and photo captions

Update text in those files without touching UI components.

## Adding or Replacing Photos
Source directory expected by the optimizer:
- `Photos/` (project root)

Optimized destination:
- `public/photos/`

To regenerate optimized images and update `content/photos.ts`:
```bash
npm run photos:optimize
```

What the script does:
- Reads all `.jpg`, `.jpeg`, `.png`, `.webp`, `.heic` files from `Photos/`
- Auto-rotates and resizes large images (max edge 1800px)
- Exports optimized `.webp` files to `public/photos/`
- Rebuilds `content/photos.ts` with `id`, `src`, placeholder `caption`, `alt`, `orientation`

## Route Overview
- `/unlock`: passcode page
- `/home`: envelope open intro
- `/letter`: letter page
- `/gallery`: polaroid grid + lightbox
- `/valentine`: final question
- `/reasons`: swipeable 23 reasons
- `/golden`: golden retriever mini interaction
- `/dream-home`: decor moodboard grid
- `/boutique`: fashion taste cards

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import project in Vercel.
3. In Vercel Project Settings -> Environment Variables, set:
   - `PASSCODE`
   - `SESSION_SECRET`
4. Deploy.

Recommended:
- Keep project visibility private.
- Share URL only with intended recipient.

## Validation Checklist
Run before deploy:
```bash
npm run photos:optimize
npm run build
```

Then verify:
- Unauthenticated access redirects to `/unlock`
- Valid passcode sets cookie and opens `/home`
- `/robots.txt` disallows all
- No analytics scripts are included
