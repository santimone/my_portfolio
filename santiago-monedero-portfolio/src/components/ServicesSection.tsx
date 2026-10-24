import { useI18n } from '../i18n/useI18n'
import { c, display, eyebrow, h2, mono, railTop, shell, sectionPad } from '../theme'
import { Tag } from './Tag'

export function ServicesSection() {
  const { t } = useI18n()

  return (
    <section
      id="build"
      style={{
        padding: sectionPad,
        background: c.bgAlt,
      }}
    >
      <div style={shell}>
        <div style={eyebrow}>{t.services.eyebrow}</div>
        <h2 style={{ ...h2, margin: '0 0 40px', maxWidth: '20ch' }}>{t.services.heading}</h2>

        {/* separate panels, each with a wooden top rail like a shoji frame */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))',
            gap: 18,
          }}
        >
          {t.services.items.map((s) => (
            <div
              key={s.num}
              className="service-cell"
              style={{
                background: c.bgPanel,
                border: `1px solid ${c.line}`,
                ...railTop,
                borderRadius: 4,
                padding: 'clamp(22px, 3vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                minHeight: 220,
              }}
            >
              <div style={{ fontFamily: mono, fontSize: 11, color: c.acc, letterSpacing: '0.1em' }}>
                {s.num}
              </div>
              <h3 style={{ fontFamily: display, fontSize: 21, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: c.textSoft,
                  margin: 0,
                  textWrap: 'pretty',
                }}
              >
                {s.body}
              </p>
              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                  paddingTop: 14,
                }}
              >
                {s.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
