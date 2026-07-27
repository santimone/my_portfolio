import { c, mono } from '../theme'
import { useI18n } from '../i18n/useI18n'

const base: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  padding: '13px 22px',
  borderRadius: 5,
  fontFamily: mono,
  fontSize: 13,
}

/** The "start a project" / "see the stack" pair, shared by all three heroes. */
export function HeroActions({
  align = 'flex-start',
  stacked = false,
}: {
  align?: React.CSSProperties['justifyContent']
  stacked?: boolean
}) {
  const { t } = useI18n()

  const layout: React.CSSProperties = stacked
    ? { display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'stretch' }
    : { display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: align }

  const wide = stacked ? { width: '100%', textAlign: 'center' as const } : null

  return (
    <div style={layout}>
      <a
        href="#contact"
        className="btn-primary"
        style={{
          ...base,
          ...wide,
          background: c.acc,
          color: c.accInk,
          fontWeight: 700,
          letterSpacing: '0.02em',
        }}
      >
        {t.cta.primary}
      </a>
      <a
        href="#stack"
        className="btn-secondary"
        style={{
          ...base,
          ...wide,
          border: `1px solid ${c.lineStrong}`,
          color: 'oklch(0.86 0.01 250)',
        }}
      >
        {t.cta.secondary}
      </a>
    </div>
  )
}
