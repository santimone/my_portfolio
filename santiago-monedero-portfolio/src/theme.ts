/**
 * Design tokens for the kumiko redesign.
 * Every colour is a CSS variable defined per theme in index.css, so these
 * strings stay the same in both themes and the inline styles never re-render
 * on a theme switch — the browser repaints them.
 */

export const c = {
  /** page background */
  bg: 'var(--bg)',
  /** slightly darker band used to alternate sections */
  bgAlt: 'var(--bg-alt)',
  bgPanel: 'var(--panel)',
  bgPanelSoft: 'var(--panel-soft)',
  bgRaised: 'var(--raised)',
  bgInput: 'var(--input)',
  headerBg: 'var(--header-bg)',

  line: 'var(--line)',
  lineSoft: 'var(--line-soft)',
  lineStrong: 'var(--line-strong)',

  text: 'var(--text)',
  textSoft: 'var(--text-soft)',
  textMuted: 'var(--text-muted)',
  textDim: 'var(--text-dim)',
  textFaint: 'var(--text-faint)',
  textGhost: 'var(--text-ghost)',

  acc: 'var(--acc)',
  accHover: 'var(--acc-hover)',
  accInk: 'var(--acc-ink)',

  wood: 'var(--wood)',
  woodDark: 'var(--wood-dark)',
  woodGrain: 'var(--wood-grain)',
  rail: 'var(--rail)',

  paper: 'var(--paper)',
  glow: 'var(--glow)',
  glowSoft: 'var(--glow-soft)',
  slat: 'var(--slat)',
  slatHi: 'var(--slat-hi)',
  paperInk: 'var(--paper-ink)',
  paperInkSoft: 'var(--paper-ink-soft)',
  halo: 'var(--halo)',

  seal: 'var(--seal)',
  sealInk: 'var(--seal-ink)',
  ok: 'var(--ok)',
  warn: 'var(--warn)',
  danger: 'var(--danger)',

  codeBg: 'var(--code-bg)',
  codeLine: 'var(--code-line)',
  codeText: 'var(--code-text)',
  codeDim: 'var(--code-dim)',
  codeAcc: 'var(--code-acc)',
  codeError: 'var(--code-error)',
} as const

/** `color` at `pct`% opacity — works on the CSS variables above. */
export const mix = (color: string, pct: number) => `color-mix(in srgb, ${color} ${pct}%, transparent)`

export const mono = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
export const sans = "'Zen Kaku Gothic New', system-ui, -apple-system, sans-serif"
export const display = "'Shippori Mincho', Georgia, serif"

/** eyebrow label above every section heading */
export const eyebrow: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11.5,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: c.acc,
  marginBottom: 14,
}

export const h2: React.CSSProperties = {
  fontFamily: display,
  fontSize: 'clamp(30px, 4.2vw, 52px)',
  lineHeight: 1.1,
  letterSpacing: '-0.01em',
  fontWeight: 700,
  margin: 0,
  textWrap: 'balance',
}

export const shell: React.CSSProperties = {
  maxWidth: 1180,
  margin: '0 auto',
}

export const sectionPad = 'clamp(56px, 10vh, 120px) clamp(16px, 4vw, 56px)'

/**
 * A wooden top rail, like the frame bar of a shoji panel. Spread onto any card
 * that already has a 1px border.
 */
export const railTop: React.CSSProperties = {
  borderTop: `6px solid ${c.wood}`,
}

/** tab pill colours, driven by whether the tab is selected */
export const tab = (on: boolean) => ({
  background: on ? c.acc : 'transparent',
  color: on ? c.accInk : c.textDim,
})
