import type { ReactNode } from 'react'
import { c, mono } from '../theme'

/** The small outlined pill used for tech tags across the page. */
export function Tag({ children, bright = false }: { children: ReactNode; bright?: boolean }) {
  return (
    <span
      style={{
        fontFamily: mono,
        fontSize: 10.5,
        padding: '4px 9px',
        borderRadius: 3,
        border: `1px solid ${c.lineBright}`,
        color: bright ? 'oklch(0.68 0.01 250)' : 'oklch(0.66 0.01 250)',
      }}
    >
      {children}
    </span>
  )
}
