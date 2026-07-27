import { useI18n } from '../i18n/useI18n'
import { c, eyebrow, h2, mono, shell, sectionPad } from '../theme'

export function AvailabilitySection() {
  const { t } = useI18n()

  return (
    <section
      id="rates"
      style={{ padding: sectionPad, borderTop: `1px solid ${c.lineSoft}`, background: c.bgAlt }}
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
            const border = e.featured ? 'oklch(0.82 0.15 152 / 0.5)' : c.line
            return (
              <div
                key={e.kind}
                style={{
                  border: `1px solid ${border}`,
                  borderRadius: 10,
                  background: e.featured ? 'oklch(0.18 0.02 152)' : c.bgPanel,
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
                      color: e.featured ? c.acc : 'oklch(0.7 0.01 250)',
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
                      border: `1px solid ${border}`,
                      color: 'oklch(0.6 0.01 250)',
                    }}
                  >
                    {e.status}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(22px, 2.6vw, 30px)',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {e.price}
                </div>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'oklch(0.68 0.01 250)',
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
                        color: 'oklch(0.76 0.01 250)',
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
