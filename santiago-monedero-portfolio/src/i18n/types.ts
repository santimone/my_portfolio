import type { DepthKey } from '../data/profile'

export type Lang = 'en' | 'es'

export interface StatItem {
  value: string
  label: string
}

export interface HeroBootCopy {
  badge: string
  headline: string[]
  headlineAccent: string
  body: string
  stats: [StatItem, StatItem]
  /** terminal window title, e.g. ~/boot.sh */
  file: string
  /** the lines that type themselves out, tagged by role */
  lines: BootLine[]
}

export type BootLineKind = 'prompt' | 'plain' | 'accent' | 'punct' | 'blank'

export interface BootLine {
  kind: BootLineKind
  text?: string
}

export interface HeroStatementCopy {
  kickerRole: string
  kickerStatus: string
  headlineTop: string
  headlineDim: string
  headlineMid: string
  headlineEnd: string
  body: string
}

export interface HeroFieldCopy {
  kicker: string
  headline: [string, string]
  body: string
}

export interface StackGroup {
  dir: string
  items: { name: string; note: string }[]
}

export interface DepthEntry {
  key: DepthKey
  name: string
  label: string
  note: string
}

export interface ServiceEntry {
  num: string
  title: string
  body: string
  tags: string[]
}

export interface StageEntry {
  num: string
  name: string
  tech: string
  headline: string
  body: string
  file: string
  code: string
}

export interface CaseEntry {
  num: string
  title: string
  meta: string
  problem: string
  approach: string
  tags: string[]
}

export interface EngagementEntry {
  kind: string
  status: string
  price: string
  body: string
  points: string[]
  featured?: boolean
}

export interface HelpRow {
  cmd: string
  desc: string
}

export interface TerminalCopy {
  title: string
  welcome: string
  helpIntro: string
  help: HelpRow[]
  whoami: string[]
  mobile: string[]
  stackHint: string
  projectsNote: string
  rates: string[]
  contactLocation: string
  sudoPrompt: string
  sudoGranted: string
  sudoWhere: string
  ls: string
  exit: string
  notFound: string
  tryHelp: string
  hints: string[]
}

export interface Dict {
  meta: {
    title: string
    description: string
  }
  nav: {
    stack: string
    services: string
    how: string
    work: string
    hire: string
  }
  lang: {
    /** aria-label on the switch */
    switchLabel: string
    en: string
    es: string
  }
  cta: {
    primary: string
    secondary: string
  }
  treatments: {
    label: string
    boot: string
    statement: string
    field: string
  }
  heroBoot: HeroBootCopy
  heroStatement: HeroStatementCopy
  heroField: HeroFieldCopy
  stack: {
    eyebrow: string
    heading: string
    views: { tree: string; depth: string; graph: string }
    itemsSuffix: string
    graphHint: string
    groups: StackGroup[]
    depth: DepthEntry[]
  }
  services: {
    eyebrow: string
    heading: string
    items: ServiceEntry[]
  }
  trace: {
    eyebrow: string
    heading: string
    stages: StageEntry[]
  }
  work: {
    eyebrow: string
    heading: string
    intro: string
    labels: { problem: string; approach: string; stack: string }
    cases: CaseEntry[]
  }
  about: {
    eyebrow: string
    heading: string
    paragraphs: [string, string]
    facts: { k: string; v: string }[]
    terminalEyebrow: string
  }
  terminal: TerminalCopy
  availability: {
    eyebrow: string
    heading: string
    note: string
    items: EngagementEntry[]
  }
  contact: {
    eyebrow: string
    headline: [string, string]
    body: string
    labels: {
      email: string
      github: string
      linkedin: string
      based: string
      languages: string
    }
    basedValue: string
    languagesValue: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      needs: string
      needOptions: string[]
      project: string
      projectPlaceholder: string
      submit: string
      sentRoute: string
      sentStatus: string
      sentGreeting: string
      sentBody: string
      sendAnother: string
    }
  }
  footer: {
    built: string
  }
}
