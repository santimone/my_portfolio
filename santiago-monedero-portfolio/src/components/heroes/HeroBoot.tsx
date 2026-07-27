import { Fragment } from 'react'
import { useI18n } from '../../i18n/useI18n'
import type { BootLineKind } from '../../i18n/types'
import { useTypedList } from '../../hooks/useTypedList'
import { c, mono } from '../../theme'
import { HeroActions } from '../HeroActions'

const lineColor: Record<BootLineKind, string> = {
  prompt: 'oklch(0.55 0.01 250)',
  plain: c.text,
  accent: c.acc,
  punct: c.textMuted,
  blank: 'transparent',
}

/** Treatment A — a boot script typing itself out next to the pitch. */
export function HeroBoot() {
  const { t } = useI18n()
  const hero = t.heroBoot
  const printed = useTypedList(hero.lines)

  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(48px, 9vh, 110px) clamp(16px, 4vw, 56px) clamp(40px, 7vh, 80px)',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(oklch(0.26 0.008 250 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.26 0.008 250 / 0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 30% 20%, #000, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 30% 20%, #000, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: 1180,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 'clamp(28px, 5vw, 64px)',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: c.acc,
              border: '1px solid oklch(0.82 0.15 152 / 0.32)',
              borderRadius: 999,
              padding: '6px 12px',
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: c.acc,
                animation: 'pulseDot 2.4s infinite',
              }}
            />
            {hero.badge}
          </div>

          <h1
            style={{
              fontSize: 'clamp(38px, 6.4vw, 78px)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              fontWeight: 600,
              margin: '0 0 22px',
              textWrap: 'balance',
            }}
          >
            {hero.headline.map((line) => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
            <span style={{ color: c.acc }}>{hero.headlineAccent}</span>
          </h1>

          <p
            style={{
              maxWidth: '46ch',
              fontSize: 'clamp(15px, 1.35vw, 18px)',
              lineHeight: 1.65,
              color: c.textMuted,
              margin: '0 0 30px',
              textWrap: 'pretty',
            }}
          >
            {hero.body}
          </p>

          <HeroActions />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(20px, 4vw, 44px)',
              marginTop: 42,
              paddingTop: 26,
              borderTop: `1px solid ${c.lineDim}`,
            }}
          >
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 'clamp(22px, 2.4vw, 30px)',
                    color: c.text,
                    fontWeight: 500,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: c.meta,
                    marginTop: 6,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              border: `1px solid ${c.lineStrong}`,
              borderRadius: 8,
              background: 'oklch(0.13 0.006 250)',
              boxShadow: '0 30px 80px -30px oklch(0.05 0 0 / 0.9)',
              overflow: 'hidden',
            }}
          >
            <TerminalChrome title={hero.file} />
            <div
              style={{
                padding: '18px 18px 24px',
                fontFamily: mono,
                fontSize: 'clamp(11px, 1.05vw, 13px)',
                lineHeight: 1.85,
                minHeight: 300,
              }}
            >
              {printed.map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: lineColor[line.kind],
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {line.text ?? ' '}
                </div>
              ))}
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 15,
                  background: c.acc,
                  verticalAlign: -2,
                  animation: 'blink 1.05s steps(1) infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** The three traffic-light dots plus a title, reused by the About terminal. */
export function TerminalChrome({ title }: { title: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 14px',
        borderBottom: `1px solid ${c.lineDim}`,
        background: c.bgRaised,
      }}
    >
      {['oklch(0.62 0.16 25)', 'oklch(0.76 0.14 85)', 'oklch(0.78 0.15 152)'].map((dot) => (
        <span key={dot} style={{ width: 10, height: 10, borderRadius: '50%', background: dot }} />
      ))}
      <span style={{ marginLeft: 8, fontFamily: mono, fontSize: 11, color: c.label }}>{title}</span>
    </div>
  )
}
