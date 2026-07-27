import { useI18n } from '../i18n/useI18n'
import { c, eyebrow, h2, mono, shell, sectionPad } from '../theme'
import { Tag } from './Tag'

export function ServicesSection() {
  const { t } = useI18n()

  return (
    <section
      id="build"
      style={{
        padding: sectionPad,
        borderTop: `1px solid ${c.lineSoft}`,
        background: c.bgAlt,
      }}
    >
      <div style={shell}>
        <div style={eyebrow}>{t.services.eyebrow}</div>
        <h2 style={{ ...h2, margin: '0 0 40px', maxWidth: '20ch' }}>{t.services.heading}</h2>

        {/* 1px gaps over a lined background give the grid its hairline rules */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 1,
            background: c.lineDim,
            border: `1px solid ${c.lineDim}`,
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          {t.services.items.map((s) => (
            <div
              key={s.num}
              className="service-cell"
              style={{
                background: 'oklch(0.16 0.006 250)',
                padding: 'clamp(22px, 3vw, 34px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                minHeight: 220,
              }}
            >
              <div style={{ fontFamily: mono, fontSize: 11, color: c.acc, letterSpacing: '0.1em' }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, margin: 0, letterSpacing: '-0.015em' }}>
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: 'oklch(0.68 0.01 250)',
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
