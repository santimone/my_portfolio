import { useI18n } from '../../i18n/useI18n'
import { c, display, mono, shell } from '../../theme'
import { HeroActions } from '../HeroActions'
import { Seal } from '../Seal'
import { ShojiPanel } from './ShojiPanel'

/** Statement on the left, the lit shoji panel on the right. */
export function HeroField() {
  const { t } = useI18n()
  const hero = t.heroField

  return (
    <section style={{ padding: 'clamp(48px, 9vh, 104px) clamp(16px, 4vw, 56px)' }}>
      <div
        style={{
          ...shell,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          alignItems: 'center',
          gap: 'clamp(36px, 6vw, 72px)',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: mono,
              fontSize: 11.5,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: c.acc,
              marginBottom: 26,
            }}
          >
            <span aria-hidden style={{ width: 28, height: 2, background: c.wood, flexShrink: 0 }} />
            {hero.kicker}
          </div>

          <h1
            style={{
              fontFamily: display,
              fontSize: 'clamp(40px, 5.4vw, 72px)',
              lineHeight: 1.04,
              letterSpacing: '-0.02em',
              fontWeight: 800,
              margin: '0 0 26px',
              textWrap: 'balance',
            }}
          >
            {hero.headline[0]}
            <br />
            <span style={{ color: c.acc }}>{hero.headline[1]}</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              lineHeight: 1.7,
              color: c.textSoft,
              margin: '0 0 34px',
              maxWidth: '54ch',
              textWrap: 'pretty',
            }}
          >
            {hero.body}
          </p>

          <HeroActions />
        </div>

        <div style={{ position: 'relative', maxWidth: 470, width: '100%', justifySelf: 'center' }}>
          <ShojiPanel />
          <div style={{ position: 'absolute', right: -12, bottom: -12, boxShadow: '0 8px 20px rgb(0 0 0 / 0.3)', borderRadius: 8 }}>
            <Seal size={56} tilt={-4} />
          </div>
        </div>
      </div>
    </section>
  )
}
