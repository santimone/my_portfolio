import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/useI18n'
import { useViewportWidth } from '../hooks/useViewportWidth'
import { c, eyebrow, mono, shell } from '../theme'

const NARROW = 760

/**
 * Scroll-driven walkthrough. On desktop the panel sticks while a tall track
 * scrolls past, and the scroll position picks the active stage. On narrow
 * screens the whole thing collapses to a normal block that lights up as it
 * crosses the middle of the viewport.
 */
export function TraceSection() {
  const { t } = useI18n()
  const vw = useViewportWidth()
  const trackRef = useRef<HTMLElement | null>(null)
  const [p, setP] = useState(0)

  const narrow = vw < NARROW
  const stages = t.trace.stages

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const el = trackRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const isNarrow = window.innerWidth < NARROW
      const span = isNarrow ? r.height : r.height - vh
      const travelled = isNarrow ? vh * 0.62 - r.top : -r.top
      setP(span > 0 ? Math.min(1, Math.max(0, travelled / span)) : 0)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    measure()

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const idx = Math.min(stages.length - 1, Math.floor(p * stages.length * 0.999))
  const active = stages[idx]

  return (
    <section
      id="trace"
      ref={trackRef}
      style={{
        position: 'relative',
        height: narrow ? 'auto' : '340vh',
        borderTop: `1px solid ${c.lineSoft}`,
      }}
    >
      <div
        style={{
          position: narrow ? 'static' : 'sticky',
          top: 0,
          height: narrow ? 'auto' : '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '70px clamp(16px, 4vw, 56px) 48px',
          overflow: 'hidden',
        }}
      >
        <div style={{ ...shell, width: '100%' }}>
          <div style={{ ...eyebrow, marginBottom: 12 }}>{t.trace.eyebrow}</div>
          <h2
            style={{
              fontSize: 'clamp(24px, 3.4vw, 40px)',
              lineHeight: 1.06,
              letterSpacing: '-0.03em',
              fontWeight: 600,
              margin: '0 0 clamp(24px, 5vh, 48px)',
              maxWidth: '24ch',
              textWrap: 'balance',
            }}
          >
            {t.trace.heading}
          </h2>

          <div
            style={{
              position: 'relative',
              height: 3,
              background: c.lineDim,
              borderRadius: 2,
              margin: '0 0 34px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                background: c.acc,
                borderRadius: 2,
                width: `${p * 100}%`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `${p * 100}%`,
                width: 14,
                height: 14,
                margin: '-7px 0 0 -7px',
                borderRadius: '50%',
                background: c.acc,
                boxShadow: '0 0 22px oklch(0.82 0.15 152 / 0.8)',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: narrow ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
              gap: 'clamp(6px, 1vw, 14px)',
              marginBottom: 'clamp(22px, 4vh, 40px)',
            }}
          >
            {stages.map((st, i) => {
              const on = i === idx
              const done = i < idx
              return (
                <div
                  key={st.num}
                  style={{
                    border: `1px solid ${
                      on
                        ? 'oklch(0.82 0.15 152 / 0.7)'
                        : done
                          ? 'oklch(0.4 0.05 152)'
                          : c.line
                    }`,
                    background: on ? 'oklch(0.82 0.15 152 / 0.1)' : 'oklch(0.17 0.007 250)',
                    borderRadius: 7,
                    padding: 'clamp(10px, 1.4vw, 16px)',
                    transition: 'all 320ms ease',
                    minHeight: 92,
                  }}
                >
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      color: on ? c.acc : 'oklch(0.45 0.01 250)',
                    }}
                  >
                    {st.num}
                  </div>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 'clamp(11px, 1.15vw, 14px)',
                      color: on
                        ? 'oklch(0.95 0.02 152)'
                        : done
                          ? c.textSoft
                          : 'oklch(0.6 0.01 250)',
                      marginTop: 8,
                      lineHeight: 1.35,
                      wordBreak: 'break-word',
                    }}
                  >
                    {st.name}
                  </div>
                  <div style={{ fontSize: 11, color: 'oklch(0.52 0.01 250)', marginTop: 6, lineHeight: 1.4 }}>
                    {st.tech}
                  </div>
                </div>
              )
            })}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(16px, 2.5vw, 32px)',
              alignItems: 'start',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 'clamp(18px, 2.2vw, 26px)',
                  fontWeight: 600,
                  margin: '0 0 10px',
                  letterSpacing: '-0.02em',
                }}
              >
                {active.headline}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.65,
                  color: 'oklch(0.7 0.01 250)',
                  margin: 0,
                  maxWidth: '48ch',
                  textWrap: 'pretty',
                }}
              >
                {active.body}
              </p>
            </div>

            <div
              style={{
                border: `1px solid ${c.line}`,
                borderRadius: 7,
                background: c.bgCode,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '8px 13px',
                  borderBottom: `1px solid ${c.lineSoft}`,
                  fontFamily: mono,
                  fontSize: 10.5,
                  color: 'oklch(0.54 0.01 250)',
                }}
              >
                {active.file}
              </div>
              <pre
                style={{
                  margin: 0,
                  padding: '14px 13px',
                  fontFamily: mono,
                  fontSize: 'clamp(10.5px, 1vw, 12.5px)',
                  lineHeight: 1.75,
                  color: 'oklch(0.8 0.02 152)',
                  overflowX: 'auto',
                  whiteSpace: 'pre',
                }}
              >
                {active.code}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
