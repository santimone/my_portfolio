import { useId } from 'react'

export type LanternTone = 'amber' | 'youtube' | 'instagram' | 'tiktok'

/** Creator Hub's lantern: dark paper on top, light pooling at the bottom. */
const LANTERN_TONES: Record<LanternTone, { top: string; bottom: string; base: string; glow: string }> = {
  amber: { top: '#c9622e', bottom: '#ffd58a', base: '#5a2a14', glow: 'rgb(242 165 65 / 0.6)' },
  youtube: { top: '#8e1f1d', bottom: '#ff8a7a', base: '#4a1416', glow: 'rgb(255 110 90 / 0.5)' },
  instagram: { top: '#a0206a', bottom: '#ff9ed2', base: '#4a0f30', glow: 'rgb(255 110 180 / 0.5)' },
  tiktok: { top: '#0b6f68', bottom: '#8fede3', base: '#0b3b38', glow: 'rgb(110 230 215 / 0.5)' },
}

export function Lantern({ tone, size }: { tone: LanternTone; size: number }) {
  const t = LANTERN_TONES[tone]
  const id = `lantern${useId().replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <svg
      viewBox="0 0 60 80"
      width={Math.round(size * 0.75)}
      height={size}
      aria-hidden
      style={{ display: 'block', overflow: 'visible', filter: `drop-shadow(0 0 ${Math.round(size / 3)}px ${t.glow})` }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={t.top} />
          <stop offset="1" stopColor={t.bottom} />
        </linearGradient>
      </defs>
      <path d="M12 10 Q30 2 48 10 L53 60 Q30 68 7 60 Z" fill={`url(#${id})`} />
      <path d="M22 6 L19 63 M38 6 L41 63" stroke="#000" strokeOpacity={0.18} strokeWidth={1.2} fill="none" />
      <path d="M18 64 Q30 69 42 64 L41 69 Q30 73 19 69 Z" fill={t.base} />
      <ellipse cx="30" cy="74" rx="3" ry="4.5" fill="#fff1c2" />
    </svg>
  )
}
