import { useI18n } from '../i18n/useI18n'
import { c, display, eyebrow, h2, mix, mono, railTop, shell, sectionPad } from '../theme'

export function AvailabilitySection() {
  const { t } = useI18n()

  return (
    <section
      id="rates"
      style={{ padding: sectionPad, background: c.bgAlt }}
    >
      <div style={shell}>
        <div style={eyebrow}>{t.availability.eyebrow}</div>
        <h2 style={{ ...h2, margin: '0 0 40px', maxWidth: '22ch' }}>{t.availability.heading}</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: 16,
          }}
        >
          {t.availability.items.map((e) => {
            const border = e.featured ? c.acc : c.line
            return (
              <div
                key={e.kind}
                style={{
                  border: `${e.featured ? 2 : 1}px solid ${border}`,
                  ...(e.featured ? { borderTop: `6px solid ${c.acc}` } : railTop),
                  borderRadius: 4,
                  background: e.featured ? c.bgRaised : c.bgPanel,
                  padding: 'clamp(22px, 3vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 12,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: e.featured ? c.acc : c.textMuted,
                    }}
                  >
                    {e.kind}
                  </span>
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 10,
                      padding: '3px 8px',
                      borderRadius: 999,
                      border: `1px solid ${e.featured ? mix(c.acc, 60) : c.lineStrong}`,
                      color: c.textDim,
                    }}
                  >
                    {e.status}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: display,
                    fontSize: 'clamp(24px, 2.6vw, 30px)',
                    fontWeight: 700,
                    color: e.featured ? c.acc : c.text,
                  }}
                >
                  {e.price}
                </div>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: c.textSoft,
                    margin: 0,
                    textWrap: 'pretty',
                  }}
                >
                  {e.body}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 4 }}>
                  {e.points.map((p) => (
                    <div
                      key={p}
                      style={{
                        display: 'flex',
                        gap: 9,
                        alignItems: 'baseline',
                        fontSize: 13.5,
                        color: c.textSoft,
                      }}
                    >
                      <span style={{ color: c.acc, fontFamily: mono, fontSize: 11 }}>→</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
