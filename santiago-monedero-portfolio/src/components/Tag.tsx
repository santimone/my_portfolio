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
        border: `1px solid ${c.lineStrong}`,
        color: bright ? c.textSoft : c.textMuted,
      }}
    >
      {children}
    </span>
  )
}
