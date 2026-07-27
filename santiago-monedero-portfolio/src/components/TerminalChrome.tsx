import { c, mono } from '../theme'

/** The three traffic-light dots plus a window title. */
export function TerminalChrome({ title }: { title: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 14px',
        borderBottom: `1px solid ${c.lineDim}`,
        background: c.bgRaised,
      }}
    >
      {['oklch(0.62 0.16 25)', 'oklch(0.76 0.14 85)', 'oklch(0.78 0.15 152)'].map((dot) => (
        <span key={dot} style={{ width: 10, height: 10, borderRadius: '50%', background: dot }} />
      ))}
      <span style={{ marginLeft: 8, fontFamily: mono, fontSize: 11, color: c.label }}>{title}</span>
    </div>
  )
}
