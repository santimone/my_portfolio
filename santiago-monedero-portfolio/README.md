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

## Before you publish

Everything personal lives in one file: [`src/data/profile.ts`](src/data/profile.ts)
— name, email, GitHub, Instagram, time zone.

Two things are still unfinished by design:

- **The contact form is front-end only.** It fakes a `201 Created` and says so
  in its own success state. Point it at your inbox or a form service
  (Formspree, Web3Forms, a Worker) before launch.
- **Rates in the availability section are formats, not numbers**, and the page
  admits it. Fill them in or delete the note.

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

## Layout

```
src/
  theme.ts              colour tokens, shared type styles
  index.css             globals, keyframes, hover/focus classes
  data/profile.ts       name, links, skill-graph nodes, proficiency numbers
  i18n/                 dictionaries, detection, provider, useI18n
  hooks/                viewport, scroll progress, in-view, typed list, reduced motion
  components/
    heroes/             three interchangeable hero treatments
    stack/              tree / depth / force-directed graph views
    ...                 services, trace, work, about, availability, contact
```

Three interactive pieces are hand-written canvas/scroll work rather than
libraries: the particle field behind the "field" hero, the draggable
force-directed skill graph, and the sticky scroll-driven request walkthrough.
All of them respect `prefers-reduced-motion`.
