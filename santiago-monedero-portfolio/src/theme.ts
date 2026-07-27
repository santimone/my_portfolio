/**
 * Design tokens lifted from the Portfolio design canvas.
 * Every colour is oklch so the accent can be re-hued by changing one number (152).
 */

export const ACC = 'oklch(0.82 0.15 152)'
export const ACC_HOVER = 'oklch(0.88 0.16 152)'

export const c = {
  /** page background */
  bg: 'oklch(0.15 0.006 250)',
  /** slightly darker band used to alternate sections */
  bgAlt: 'oklch(0.132 0.006 250)',
  bgPanel: 'oklch(0.163 0.006 250)',
  bgPanelSoft: 'oklch(0.175 0.007 250)',
  bgRaised: 'oklch(0.18 0.007 250)',
  bgTerminal: 'oklch(0.105 0.006 250)',
  bgCode: 'oklch(0.115 0.006 250)',
  bgInput: 'oklch(0.13 0.006 250)',

  line: 'oklch(0.26 0.008 250)',
  lineSoft: 'oklch(0.22 0.008 250)',
  lineDim: 'oklch(0.24 0.008 250)',
  lineStrong: 'oklch(0.28 0.008 250)',
  lineBright: 'oklch(0.3 0.008 250)',

  text: 'oklch(0.93 0.008 250)',
  textSoft: 'oklch(0.78 0.01 250)',
  textMuted: 'oklch(0.72 0.01 250)',
  textDim: 'oklch(0.62 0.01 250)',
  textFaint: 'oklch(0.5 0.01 250)',
  textGhost: 'oklch(0.4 0.01 250)',
  meta: 'oklch(0.58 0.01 250)',
  label: 'oklch(0.56 0.01 250)',

  acc: ACC,
  accHover: ACC_HOVER,
  accInk: 'oklch(0.15 0.006 250)',
  danger: 'oklch(0.68 0.16 25)',
} as const

export const mono = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
export const sans = "'IBM Plex Sans', system-ui, -apple-system, sans-serif"

/** eyebrow label above every section heading */
export const eyebrow: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: ACC,
  marginBottom: 14,
}

export const h2: React.CSSProperties = {
  fontSize: 'clamp(28px, 4.2vw, 52px)',
  lineHeight: 1.02,
  letterSpacing: '-0.03em',
  fontWeight: 600,
  margin: 0,
  textWrap: 'balance',
}

export const shell: React.CSSProperties = {
  maxWidth: 1180,
  margin: '0 auto',
}

export const sectionPad = 'clamp(56px, 10vh, 120px) clamp(16px, 4vw, 56px)'

/** tab pill colours, driven by whether the tab is selected */
export const tab = (on: boolean) => ({
  background: on ? ACC : 'transparent',
  color: on ? c.accInk : c.textDim,
})
