import type { DepthKey } from '../data/profile'

export type Lang = 'en' | 'es'

export interface HeroFieldCopy {
  kicker: string
  headline: [string, string]
  body: string
  /** accessible name for the interactive shoji panel */
  panelLabel: string
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

export interface KeyValue {
  k: string
  v: string
}

/** One block of a case-study dialog: a paragraph, a list of labelled points, or both. */
export interface CaseDetailSection {
  heading: string
  body?: string
  items?: KeyValue[]
}

/** A project of my own — shown openly, with a full case study in a dialog. */
export interface OwnProject {
  id: 'al-cierre' | 'creator-hub'
  kicker: string
  title: string
  tagline: string
  problem: string
  approach: string
  tags: string[]
  /** small print next to the "view case" button */
  note: string
  detail: {
    meta: KeyValue[]
    sections: CaseDetailSection[]
    tradeoffs?: {
      heading: string
      prosHeading: string
      pros: KeyValue[]
      consHeading: string
      cons: KeyValue[]
      verdict: string
    }
  }
}

/** Labels for the Al Cierre card's interactive spending branch. */
export interface AlCierreDemo {
  cycle: string
  range: string
  start: string
  close: string
  /** "{day}" and "{total}" are replaced */
  todaySummary: string
  daySpent: string
  dayNone: string
  dayFuture: string
  todayTag: string
  bud: string
  hint: string
}

/** Labels for the Creator Hub card's publish walkthrough. */
export interface CreatorHubDemo {
  clip: string
  publish: string
  publishing: string
  restart: string
  cloudNote: string
  status: {
    ready: string
    preparing: string
    uploading: string
    processing: string
    published: string
  }
  notes: {
    ready: string
    preparing: string
    uploading: string
    processing: string
    publishedYouTube: string
    publishedInstagram: string
    privateTikTok: string
  }
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
  web: string[]
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
  doom: {
    boot: string[]
    title: string
    controls: string
    close: string
    failed: string
  }
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
  appearance: {
    night: string
    day: string
    toDay: string
    toNight: string
  }
  cta: {
    primary: string
    secondary: string
  }
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
    own: {
      heading: string
      sub: string
      viewCase: string
      close: string
      sampleData: string
      projects: OwnProject[]
      alCierre: AlCierreDemo
      creatorHub: CreatorHubDemo
    }
    clientsHeading: string
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
    items: EngagementEntry[]
  }
  contact: {
    eyebrow: string
    headline: [string, string]
    body: string
    labels: {
      email: string
      whatsapp: string
      github: string
      linkedin: string
      instagram: string
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
      sending: string
      sentRoute: string
      sentStatus: string
      sentGreeting: string
      sentBody: string
      /** shown when the browser hands off to the visitor's mail client instead */
      handoffBody: string
      sendAnother: string
      errorStatus: string
      errorBody: string
      errorRetry: string
      errorMailto: string
    }
  }
  footer: {
    built: string
  }
}
