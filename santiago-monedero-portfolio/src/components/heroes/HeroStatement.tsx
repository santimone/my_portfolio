import { MARQUEE, profile } from '../../data/profile'
import { useI18n } from '../../i18n/useI18n'
import { c, mono } from '../../theme'
import { HeroActions } from '../HeroActions'

/** Treatment B — oversized type over a scrolling ticker of tools. */
export function HeroStatement() {
  const { t } = useI18n()
  const hero = t.heroStatement

  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(56px, 12vh, 140px) clamp(16px, 4vw, 56px) clamp(40px, 7vh, 80px)',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.82 0.15 152 / 0.09), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: c.meta,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 18,
            marginBottom: 34,
          }}
        >
          <span>{profile.name}</span>
          <span style={{ color: 'oklch(0.34 0.01 250)' }}>/</span>
          <span>{hero.kickerRole}</span>
          <span style={{ color: 'oklch(0.34 0.01 250)' }}>/</span>
          <span style={{ color: c.acc }}>{hero.kickerStatus}</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(44px, 11vw, 150px)',
            lineHeight: 0.86,
            letterSpacing: '-0.05em',
            fontWeight: 600,
            margin: '0 0 34px',
          }}
        >
          {hero.headlineTop}
          <br />
          <span style={{ color: 'oklch(0.42 0.01 250)' }}>{hero.headlineDim}</span>
          {hero.headlineMid}
          <br />
          {hero.headlineEnd}
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 28,
            borderTop: `1px solid ${c.line}`,
            paddingTop: 28,
          }}
        >
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: 'oklch(0.74 0.01 250)',
              margin: 0,
              gridColumn: 'span 2',
              maxWidth: '62ch',
              textWrap: 'pretty',
            }}
          >
            {hero.body}
          </p>
          <HeroActions stacked />
        </div>
      </div>

      <div
        aria-hidden
        style={{
          position: 'relative',
          marginTop: 'clamp(38px, 7vh, 76px)',
          borderTop: `1px solid ${c.lineDim}`,
          borderBottom: `1px solid ${c.lineDim}`,
          padding: '16px 0',
          overflow: 'hidden',
          maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        }}
      >
        <div style={{ display: 'flex', width: 'max-content', animation: 'marq 34s linear infinite' }}>
          {[0, 1].map((copy) => (
            <div key={copy} style={{ display: 'flex' }}>
              {MARQUEE.map((tool) => (
                <span
                  key={tool}
                  style={{
                    fontFamily: mono,
                    fontSize: 'clamp(14px, 1.6vw, 20px)',
                    color: 'oklch(0.6 0.01 250)',
                    padding: '0 22px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
