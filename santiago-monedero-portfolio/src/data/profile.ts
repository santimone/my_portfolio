/**
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  EDIT ME — everything personal lives here and nowhere else.              │
 * │  The email / github / linkedin values below are PLACEHOLDERS. Swap them  │
 * │  for the real ones before you put this online.                           │
 * └──────────────────────────────────────────────────────────────────────────┘
 */
export const profile = {
  name: 'Santiago Monedero',
  handle: 'santiago.monedero',

  // TODO: replace with the address you actually want clients writing to.
  email: 'hola@santiagomonedero.dev',

  github: {
    url: 'https://github.com/santiagomonedero',
    label: 'github.com/santiagomonedero',
  },
  linkedin: {
    url: 'https://linkedin.com/in/santiagomonedero',
    label: 'in/santiagomonedero',
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

/** Ticker strip in the "statement" hero — tool names, identical in both languages. */
export const MARQUEE = [
  'React Native',
  'Expo',
  'Android TV',
  'TypeScript',
  'React',
  'NestJS',
  'Express',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Sanity.io',
  'Mercado Pago',
  'Git',
  'Bash',
  'Figma',
  'Python',
  'C++',
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
