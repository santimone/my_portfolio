import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useI18n } from '../i18n/useI18n'
import { c, eyebrow, h2, mono, shell, sectionPad } from '../theme'
import { Tag } from './Tag'

export function WorkSection() {
  const { t } = useI18n()
  const [open, setOpen] = useState(0)
  const reduced = usePrefersReducedMotion()

  /**
   * Every open panel is given the same height — the tallest case body — so
   * switching cases never reflows the rest of the page. Because the closing and
   * opening panels share that height, duration and easing, the pixels one gives
   * up are exactly the pixels the other takes: the section height holds still.
   */
  const bodies = useRef<Array<HTMLDivElement | null>>([])
  const [panelH, setPanelH] = useState(0)

  const measure = useCallback(() => {
    let tallest = 0
    for (const el of bodies.current) if (el) tallest = Math.max(tallest, el.offsetHeight)
    setPanelH((prev) => (Math.abs(prev - tallest) > 1 ? tallest : prev))
  }, [])

  useLayoutEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    for (const el of bodies.current) if (el) ro.observe(el)
    return () => ro.disconnect()
  }, [measure, t])

  const colLabel: React.CSSProperties = {
    fontFamily: mono,
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: c.textFaint,
    marginBottom: 8,
  }
  const colBody: React.CSSProperties = {
    fontSize: 14,
    lineHeight: 1.6,
    color: 'oklch(0.74 0.01 250)',
    margin: 0,
    textWrap: 'pretty',
  }

  return (
    <section
      id="work"
      style={{ padding: sectionPad, borderTop: `1px solid ${c.lineSoft}`, background: c.bgAlt }}
    >
      <div style={shell}>
        <div style={eyebrow}>{t.work.eyebrow}</div>
        <h2 style={{ ...h2, margin: '0 0 12px', maxWidth: '22ch' }}>{t.work.heading}</h2>
        <p
          style={{
            fontSize: 15,
            color: c.textDim,
            margin: '0 0 40px',
            maxWidth: '60ch',
            lineHeight: 1.6,
          }}
        >
          {t.work.intro}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {t.work.cases.map((k, i) => {
            const isOpen = open === i
            const panelId = `case-panel-${k.num}`

            return (
              <div
                key={k.num}
                style={{
                  border: `1px solid ${isOpen ? 'oklch(0.82 0.15 152 / 0.55)' : c.line}`,
                  borderRadius: 9,
                  background: c.bgPanel,
                  overflow: 'hidden',
                  transition: 'border-color 220ms ease',
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(12px, 2vw, 24px)',
                    padding: 'clamp(18px, 2.4vw, 26px)',
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      color: 'oklch(0.48 0.01 250)',
                      minWidth: 26,
                    }}
                  >
                    {k.num}
                  </span>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: 'clamp(17px, 1.9vw, 22px)',
                        fontWeight: 600,
                        margin: '0 0 6px',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {k.title}
                    </h3>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: mono,
                        fontSize: 11.5,
                        color: 'oklch(0.6 0.01 250)',
                      }}
                    >
                      {k.meta}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    style={{
                      fontFamily: mono,
                      fontSize: 18,
                      color: c.acc,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 260ms ease',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  id={panelId}
                  style={{
                    height: isOpen ? panelH || 'auto' : 0,
                    overflow: 'hidden',
                    transition: reduced
                      ? 'none'
                      : 'height 420ms cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  <div
                    ref={(el) => {
                      bodies.current[i] = el
                    }}
                    style={{
                      padding:
                        '0 clamp(18px, 2.4vw, 26px) clamp(22px, 2.6vw, 28px) clamp(50px, 5vw, 74px)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                      gap: 22,
                      alignContent: 'start',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
                      transition: reduced
                        ? 'none'
                        : 'opacity 300ms ease 80ms, transform 420ms cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    <div>
                      <div style={colLabel}>{t.work.labels.problem}</div>
                      <p style={colBody}>{k.problem}</p>
                    </div>
                    <div>
                      <div style={colLabel}>{t.work.labels.approach}</div>
                      <p style={colBody}>{k.approach}</p>
                    </div>
                    <div>
                      <div style={colLabel}>{t.work.labels.stack}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {k.tags.map((tag) => (
                          <Tag key={tag} bright>
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
