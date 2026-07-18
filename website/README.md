# Dafa — Personal Branding Website

Single-page BD asset positioning Dafa as the builder of the verification and
intelligence layer for sustainable trade. Built per the PRD (Phase 1).

## Stack

Next.js (App Router) · Tailwind CSS v4 · Vercel Analytics · Resend (contact
email) · Cal.com (booking embed).

## Run locally

```bash
npm install
npm run dev
```

## Deploy (Vercel)

Set the project root to `website/`. Environment variables for the contact form:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key — required in production for form delivery |
| `CONTACT_TO` | Destination inbox (defaults to the email in `src/content/site.ts`) |
| `CONTACT_FROM` | Verified sender, e.g. `Site <noreply@yourdomain.com>` |

Without `RESEND_API_KEY` the form returns a clear "email me directly" error in
production (and logs the submission in development).

## Editing content

All copy, links, and section content live in **`src/content/site.ts`** — edit
there, no component changes needed. Items marked `[PLACEHOLDER]` are pending
real content:

- Real domain (`siteUrl`) and LinkedIn URL
- Cal.com booking handle (`calLink`)
- Medium bio from the Personal Brand Kit
- Real headshot → replace `public/headshot.svg` and update `headshotSrc`
- Competition win years/placements

## Open decisions (resolved as defaults, easy to change)

1. **Accent**: verification green (`--color-accent` in `globals.css`)
2. **Language**: EN-only (Phase 1)
3. **Ventures**: 3 featured + Tier 2 row
4. **Booking**: Cal.com (swap `calLink` for Calendly if preferred)
5. **Build**: Next.js

## Phase 2 (not yet built)

`/work` portfolio page, EN/ID toggle.
