/**
 * Each of my own apps keeps its own identity on the page, in both site
 * themes: these are the apps' night palettes, copied from their design tokens.
 */
export interface ProjectPalette {
  bg: string
  panel: string
  line: string
  text: string
  textSoft: string
  muted: string
  accent: string
  accentInk: string
  tagBorder: string
  ok: string
  warn: string
}

/** Al Cierre — a cherry branch on dark bark. */
export const AL_CIERRE: ProjectPalette = {
  bg: '#17110e',
  panel: '#221915',
  line: '#3d2c25',
  text: '#f6e9e4',
  textSoft: '#e6d6cf',
  muted: '#c9b3aa',
  accent: '#f4b7c8',
  accentInk: '#2a1018',
  tagBorder: '#5a3e48',
  ok: '#b8cf96',
  warn: '#e6b358',
}

/** Creator Hub — floating lanterns on a starry night. */
export const CREATOR_HUB: ProjectPalette = {
  bg: '#05071a',
  panel: '#0d1230',
  line: '#1e2550',
  text: '#f4ead8',
  textSoft: '#d6d2cc',
  muted: '#a9aecb',
  accent: '#f2a541',
  accentInk: '#1a1206',
  tagBorder: '#3a3320',
  ok: '#5dd39e',
  warn: '#f5c04a',
}
