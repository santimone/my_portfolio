import { useId } from 'react'

/**
 * Inline SVG flags rather than emoji: Windows ships no flag glyphs at all, so
 * 🇬🇧 renders as the letters "GB" there. These are drawn, so they look the same
 * on every platform.
 */

const box: React.CSSProperties = {
  display: 'block',
  width: 20,
  height: 14,
  borderRadius: 2,
  // hairline keeps the white bands from bleeding into the dark chrome
  boxShadow: 'inset 0 0 0 1px oklch(1 0 0 / 0.18)',
  flexShrink: 0,
}

/** Union Jack — the conventional mark for "English" in a language picker. */
export function FlagEn() {
  const id = useId()

  return (
    <svg viewBox="0 0 60 30" style={box} aria-hidden focusable="false">
      <clipPath id={id}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id})`} stroke="#c8102e" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
    </svg>
  )
}

/** Bandera argentina — celeste, blanca, celeste, con el sol de mayo. */
export function FlagEs() {
  return (
    <svg viewBox="0 0 60 30" style={box} aria-hidden focusable="false">
      <rect width="60" height="30" fill="#fff" />
      <rect width="60" height="10" fill="#74acdf" />
      <rect y="20" width="60" height="10" fill="#74acdf" />
      <circle cx="30" cy="15" r="3.9" fill="#f6b40e" stroke="#85340a" strokeWidth="0.5" />
    </svg>
  )
}
