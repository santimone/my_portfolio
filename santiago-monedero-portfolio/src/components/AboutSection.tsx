import { useI18n } from '../i18n/useI18n'
import { c, display, eyebrow, mono, shell, sectionPad } from '../theme'
import { Terminal } from './Terminal'

export function AboutSection() {
  const { t, lang } = useI18n()

  return (
    <section id="about" style={{ padding: sectionPad }}>
      <div
        style={{
          ...shell,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(28px, 4vw, 56px)',
          alignItems: 'start',
        }}
      >
        <div>
          <div style={eyebrow}>{t.about.eyebrow}</div>
          <h2
            style={{
              fontFamily: display,
              fontSize: 'clamp(28px, 3.8vw, 46px)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              fontWeight: 700,
              margin: '0 0 22px',
              textWrap: 'balance',
            }}
          >
            {t.about.heading}
          </h2>

          {t.about.paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 15.5,
                lineHeight: 1.7,
                color: c.textSoft,
                margin: i === 0 ? '0 0 16px' : '0 0 28px',
                maxWidth: '52ch',
                textWrap: 'pretty',
              }}
            >
              {para}
            </p>
          ))}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 14,
            }}
          >
            {t.about.facts.map((f) => (
              <div key={f.k} style={{ borderLeft: `3px solid ${c.wood}`, paddingLeft: 14 }}>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: c.textFaint,
                    marginBottom: 6,
                  }}
                >
                  {f.k}
                </div>
                <div style={{ fontSize: 14.5, color: c.text }}>{f.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* keyed by language: a fresh shell rather than a bilingual transcript */}
        <Terminal key={lang} />
      </div>
    </section>
  )
}
