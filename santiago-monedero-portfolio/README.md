# Santiago Monedero — portfolio

Personal portfolio site. React 19 + TypeScript + Vite, no UI framework and no CSS
framework — the design is implemented directly from the Claude Design canvas
(`Portfolio.dc.html`) as components with inline style objects plus a small
global stylesheet for hover/focus states.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build  → dist/
npm run preview
npm run lint
```

Everything personal lives in one file:
[`src/data/profile.ts`](src/data/profile.ts) — name, email, WhatsApp, GitHub,
LinkedIn, Instagram, time zone.

## Contact form

The form posts to [Web3Forms](https://web3forms.com), which forwards the message
to the registered inbox. No backend, no server to keep alive.

**Setup:** get a free access key (enter the destination email, confirm it), then

```bash
cp .env.example .env
# paste the key into VITE_WEB3FORMS_KEY
```

and add the same `VITE_WEB3FORMS_KEY` variable to the Cloudflare Pages project
(Settings → Variables) so production builds get it too.

The key is public by design — it only permits submitting to the address it was
registered with. A hidden honeypot field catches the bots that fill everything.

**Without a key the form still works**: it opens the visitor's mail client with
the message pre-filled and says so, rather than pretending to deliver. Same if
the POST fails — the error state offers the mail client as a one-click fallback.

## Languages

The site ships in English and Spanish, with a switch in the header. The initial
language is picked in [`src/i18n/detect.ts`](src/i18n/detect.ts), in this order:

1. a previous explicit choice (`localStorage`)
2. `?lang=en` / `?lang=es` in the URL
3. the browser's own language preference list (`navigator.languages`)
4. **location** — the IANA time zone from `Intl.DateTimeFormat()`, matched
   against Spanish-speaking zones, then the region subtag of the resolved locale
5. English

Location detection is entirely local: no geo-IP request, nothing to consent to,
and it works offline. Someone in Buenos Aires running an English OS still gets
English, because a stated preference beats a location guess.

The switch itself uses inline SVG flags (`src/components/Flags.tsx`) rather than
emoji, because Windows has no flag glyphs — 🇬🇧 renders there as the letters
"GB". Union Jack for English, Argentine flag for Spanish.

Copy lives in [`src/i18n/en.ts`](src/i18n/en.ts) and
[`src/i18n/es.ts`](src/i18n/es.ts); both satisfy the `Dict` interface in
[`src/i18n/types.ts`](src/i18n/types.ts), so a missing translation is a type
error rather than a blank spot on the page.

Header labels are wrapped in `StableLabel`, which stacks both languages in one
grid cell so the cell sizes to the wider of the two. Without it, switching to
Spanish ("services" → "servicios") pushes everything to its right along.

## Layout

```
src/
  theme.ts              colour tokens, shared type styles
  index.css             globals, keyframes, hover/focus classes
  data/profile.ts       name, links, skill-graph nodes, proficiency numbers
  lib/sendContact.ts    Web3Forms POST + mailto fallback
  i18n/                 dictionaries, detection, provider, useI18n
  hooks/                viewport, scroll progress, in-view, reduced motion
  components/
    heroes/             particle-field hero
    stack/              graph (default) / tree / depth views
    ...                 services, trace, work, about, availability, contact
```

Three interactive pieces are hand-written canvas/scroll work rather than
libraries: the particle field behind the hero, the draggable force-directed
skill graph, and the sticky scroll-driven request walkthrough. All three respect
`prefers-reduced-motion` — the graph in particular runs its simulation to a
settled layout and draws one still frame, then only redraws on hover or drag.
