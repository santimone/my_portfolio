import { c, mono } from '../theme'
import { Seal } from './Seal'

/** Window title bar: the title, and the seal where the traffic lights used to be. */
export function TerminalChrome({ title }: { title: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        padding: '10px 14px',
        borderBottom: `1px solid ${c.codeLine}`,
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 11, color: c.codeDim }}>{title}</span>
      <Seal size={22} />
    </div>
  )
}
