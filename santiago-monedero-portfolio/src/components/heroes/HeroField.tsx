import { useI18n } from '../../i18n/useI18n'
import { c, mono } from '../../theme'
import { HeroActions } from '../HeroActions'
import { ParticleField } from './ParticleField'

/** Treatment C — centred statement over an interactive particle field. */
export function HeroField() {
  const { t } = useI18n()
  const hero = t.heroField

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '82vh',
        display: 'grid',
        placeItems: 'center',
        padding: 'clamp(48px, 8vh, 100px) clamp(16px, 4vw, 56px)',
        overflow: 'hidden',
      }}
    >
      <ParticleField />

      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 860 }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: c.acc,
            marginBottom: 26,
          }}
        >
          {hero.kicker}
        </div>

        <h1
          style={{
            fontSize: 'clamp(40px, 7.5vw, 92px)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            fontWeight: 600,
            margin: '0 0 26px',
            textWrap: 'balance',
          }}
        >
          {hero.headline[0]}
          <br />
          {hero.headline[1]}
        </h1>

        <p
          style={{
            fontSize: 'clamp(15px, 1.4vw, 19px)',
            lineHeight: 1.65,
            color: c.textMuted,
            margin: '0 auto 34px',
            maxWidth: '56ch',
            textWrap: 'pretty',
          }}
        >
          {hero.body}
        </p>

        <HeroActions align="center" />
      </div>
    </section>
  )
}
