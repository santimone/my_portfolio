import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useI18n } from '../i18n/useI18n'
import { useViewportWidth } from '../hooks/useViewportWidth'
import { c, display, eyebrow, mix, mono, shell } from '../theme'

const NARROW = 760

/**
 * Scroll distance handed to the walkthrough, as a multiple of the viewport.
 * Phones get a shorter track because every screenful of scrolling costs more.
 */
const TRACK_VH = { narrow: 260, wide: 340 }

/** Clears the sticky header, which overlaps the top of the pinned panel. */
const HEADER_CLEARANCE = 66

/**
 * Scroll-driven walkthrough. A tall track scrolls past while the panel sticks,
 * and the position within the track picks the active stage. Both breakpoints
 * work the same way — narrow screens get a shorter track and a one-column
 * panel, with the heading hoisted out of the panel so the stage fits a phone.
 */
export function TraceSection() {
  const { t } = useI18n()
  const vw = useViewportWidth()
  const reduced = usePrefersReducedMotion()
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [p, setP] = useState(0)

  const narrow = vw < NARROW
  const stages = t.trace.stages

  useEffect(() => {
    let frame = 0

    /**
     * Progress is measured against the track, not the section: the track's
     * travel is exactly the distance the panel spends pinned, so p hits 0 the
     * moment it pins and 1 the moment it lets go — on every screen size.
     */
    const measure = () => {
      frame = 0
      const el = trackRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const span = r.height - window.innerHeight
      setP(span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0)
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

  const head = (
    <>
      <div style={{ ...eyebrow, marginBottom: 12 }}>{t.trace.eyebrow}</div>
      <h2
        style={{
          fontFamily: display,
          fontSize: 'clamp(26px, 3.6vw, 42px)',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          fontWeight: 700,
          margin: 0,
          maxWidth: '24ch',
          textWrap: 'balance',
        }}
      >
        {t.trace.heading}
      </h2>
    </>
  )

  return (
    <section id="trace" style={{ position: 'relative' }}>
      {narrow && (
        <div style={{ padding: '64px clamp(16px, 4vw, 56px) 18px' }}>
          <div style={shell}>{head}</div>
        </div>
      )}

      <div
        ref={trackRef}
        style={{
          position: 'relative',
          height: `${narrow ? TRACK_VH.narrow : TRACK_VH.wide}vh`,
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            // Phones anchor to the top so anything that cannot fit is clipped
            // off the bottom of the code block rather than off the heading.
            justifyContent: narrow ? 'flex-start' : 'center',
            padding: narrow
              ? `${HEADER_CLEARANCE}px clamp(16px, 4vw, 56px) 22px`
              : '70px clamp(16px, 4vw, 56px) 48px',
            overflow: 'hidden',
          }}
        >
          <div style={{ ...shell, width: '100%' }}>
            {!narrow && <div style={{ marginBottom: 'clamp(24px, 5vh, 48px)' }}>{head}</div>}

            <div
              style={{
                position: 'relative',
                height: 4,
                background: c.line,
                borderRadius: 2,
                margin: narrow ? '0 0 22px' : '0 0 34px',
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
                  boxShadow: `0 0 22px ${mix(c.acc, 80)}`,
                }}
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 'clamp(6px, 1vw, 14px)',
                marginBottom: narrow ? 18 : 'clamp(22px, 4vh, 40px)',
              }}
            >
              {stages.map((st, i) => {
                const on = i === idx
                const done = i < idx
                return (
                  <div
                    key={st.num}
                    style={{
                      // longhands only: these change on scroll, and React mishandles
                      // a shorthand and its longhand updating together
                      borderStyle: 'solid',
                      borderWidth: '5px 1px 1px',
                      borderColor: `${on ? c.acc : done ? c.wood : c.line} ${
                        on ? mix(c.acc, 70) : done ? c.wood : c.line
                      }`,
                      background: on ? mix(c.acc, 10) : c.bgPanel,
                      borderRadius: 4,
                      padding: narrow ? '9px 4px' : 'clamp(10px, 1.4vw, 16px)',
                      transition: 'all 320ms ease',
                      minHeight: narrow ? 0 : 92,
                      textAlign: narrow ? 'center' : 'left',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: narrow ? 11 : 10,
                        letterSpacing: '0.1em',
                        color: on ? c.acc : c.textFaint,
                      }}
                    >
                      {st.num}
                    </div>
                    {/* Names and stacks do not fit five-up on a phone; the
                        active one is spelled out in the panel below instead. */}
                    {!narrow && (
                      <>
                        <div
                          style={{
                            fontFamily: mono,
                            fontSize: 'clamp(11px, 1.15vw, 14px)',
                            color: on ? c.text : done ? c.textSoft : c.textDim,
                            marginTop: 8,
                            lineHeight: 1.35,
                            wordBreak: 'break-word',
                          }}
                        >
                          {st.name}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: c.textFaint,
                            marginTop: 6,
                            lineHeight: 1.4,
                          }}
                        >
                          {st.tech}
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>

            {/**
             * Every stage is rendered into the same grid cell, so the block is
             * always as tall as the tallest stage and changing the active point
             * cannot reflow the panel — the heading, rail and cards hold still
             * instead of being shoved around by a longer body or code snippet.
             */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)' }}>
              {stages.map((st, i) => {
                const on = i === idx
                return (
                  <div
                    key={st.num}
                    aria-hidden={!on}
                    style={{
                      gridArea: '1 / 1',
                      display: 'grid',
                      gridTemplateColumns: narrow ? 'minmax(0, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: narrow ? 14 : 'clamp(16px, 2.5vw, 32px)',
                      alignItems: 'start',
                      opacity: on ? 1 : 0,
                      pointerEvents: on ? 'auto' : 'none',
                      transition: reduced ? 'none' : 'opacity 260ms ease',
                    }}
                  >
                    <div>
                      {narrow && (
                        <div
                          style={{
                            fontFamily: mono,
                            fontSize: 11,
                            letterSpacing: '0.08em',
                            color: c.acc,
                            marginBottom: 6,
                          }}
                        >
                          {st.name} · {st.tech}
                        </div>
                      )}
                      <h3
                        style={{
                          fontFamily: display,
                          fontSize: 'clamp(19px, 2.2vw, 26px)',
                          fontWeight: 700,
                          margin: '0 0 10px',
                          lineHeight: 1.3,
                        }}
                      >
                        {st.headline}
                      </h3>
                      <p
                        style={{
                          fontSize: 14.5,
                          lineHeight: 1.65,
                          color: c.textSoft,
                          margin: 0,
                          maxWidth: '48ch',
                          textWrap: 'pretty',
                        }}
                      >
                        {st.body}
                      </p>
                    </div>

                    <div
                      style={{
                        border: `8px solid ${c.woodDark}`,
                        borderRadius: 6,
                        background: c.codeBg,
                        overflow: 'hidden',
                        minWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          padding: '8px 13px',
                          borderBottom: `1px solid ${c.codeLine}`,
                          fontFamily: mono,
                          fontSize: 10.5,
                          color: c.codeDim,
                        }}
                      >
                        {st.file}
                      </div>
                      <pre
                        style={{
                          margin: 0,
                          padding: '14px 13px',
                          fontFamily: mono,
                          fontSize: 'clamp(10.5px, 1vw, 12.5px)',
                          lineHeight: 1.75,
                          color: c.codeText,
                          overflowX: 'auto',
                          whiteSpace: 'pre',
                        }}
                      >
                        {st.code}
                      </pre>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
