/**
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  EDIT ME — everything personal lives here and nowhere else.              │
 * └──────────────────────────────────────────────────────────────────────────┘
 */
export const profile = {
  name: 'Santiago Monedero',
  handle: 'santiago.monedero',

  email: 'santiagomonedero122@gmail.com',

  /** Argentine mobile: +54 9 11 …  — wa.me wants digits only, no + and no spaces. */
  whatsapp: {
    e164: '5491127587037',
    label: '+54 9 11 2758-7037',
  },
  github: {
    url: 'https://github.com/santimone',
    label: 'santimone',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/santiago-maria-monedero-7a7a11182/',
    label: 'Santiago Monedero',
  },
  instagram: {
    url: 'https://www.instagram.com/santiagomonedero/',
    label: '@santiagomonedero',
  },

  /** IANA zone used for the footer clock, so it reads Buenos Aires time for everyone. */
  timeZone: 'America/Argentina/Buenos_Aires',
  utcOffsetLabel: 'UTC−3',

  year: 2026,
} as const

/** Skill graph nodes — names are proper nouns, so they are not translated. */
export const GRAPH_NODES = [
  { n: 'React Native', g: 0 },
  { n: 'Expo', g: 0 },
  { n: 'Android TV', g: 0 },
  { n: 'iOS', g: 0 },
  { n: 'Android', g: 0 },
  { n: 'React', g: 1 },
  { n: 'TypeScript', g: 1 },
  { n: 'JavaScript', g: 1 },
  { n: 'CSS3', g: 1 },
  { n: 'Bootstrap', g: 1 },
  { n: 'NestJS', g: 2 },
  { n: 'Express', g: 2 },
  { n: 'Node.js', g: 2 },
  { n: 'REST', g: 2 },
  { n: 'PostgreSQL', g: 3 },
  { n: 'Prisma', g: 3 },
  { n: 'Sanity', g: 3 },
  { n: 'Mercado Pago', g: 3 },
  { n: 'Git', g: 4 },
  { n: 'Bash', g: 4 },
  { n: 'Figma', g: 4 },
  { n: 'Python', g: 4 },
  { n: 'C++', g: 4 },
] as const

export const GRAPH_COLORS = [
  'oklch(0.82 0.15 152)',
  'oklch(0.80 0.13 220)',
  'oklch(0.82 0.14 95)',
  'oklch(0.78 0.14 320)',
  'oklch(0.70 0.01 250)',
]

/** Proficiency bars — the percentages are language-independent. */
export const DEPTH_LEVELS = [
  { key: 'rn', pct: 96 },
  { key: 'react', pct: 93 },
  { key: 'ts', pct: 91 },
  { key: 'node', pct: 88 },
  { key: 'nest', pct: 85 },
  { key: 'pg', pct: 84 },
  { key: 'tv', pct: 80 },
  { key: 'cms', pct: 76 },
  { key: 'git', pct: 82 },
  { key: 'systems', pct: 62 },
] as const

export type DepthKey = (typeof DEPTH_LEVELS)[number]['key']
