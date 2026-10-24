import { useEffect, useRef, type ReactNode } from 'react'
import { useI18n } from '../../i18n/useI18n'
import type { KeyValue, OwnProject } from '../../i18n/types'
import { display, mono } from '../../theme'
import type { ProjectPalette } from './palettes'

/**
 * The full case study for one of my own projects. Those apps are private —
 * they hold real data — so the case lives here instead of behind a link.
 * A native modal <dialog> handles focus, Esc and the inert background.
 */
export function CaseDialog({
  project,
  palette: P,
  icon,
  onClose,
}: {
  project: OwnProject
  palette: ProjectPalette
  icon: ReactNode
  onClose: () => void
}) {
  const { t } = useI18n()
  const ref = useRef<HTMLDialogElement | null>(null)
  const titleId = `case-title-${project.id}`
  const { detail } = project

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    // guarded because StrictMode runs this twice; unmounting removes the dialog
    // from the top layer, so the cleanup must not call close() (that would fire
    // onClose and shut it straight away in development)
    if (!dialog.open) dialog.showModal()
    // a modal dialog does not stop the page behind it from scrolling
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  const label: React.CSSProperties = {
    fontFamily: mono,
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: P.muted,
  }

  const list = (items: KeyValue[]) => (
    <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px 28px' }}>
      {items.map((it) => (
        <div key={it.k} style={{ borderTop: `1px solid ${P.line}`, paddingTop: 12 }}>
          <dt style={{ fontFamily: display, fontWeight: 700, fontSize: 16.5, color: P.text, marginBottom: 4 }}>{it.k}</dt>
          <dd style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: P.textSoft }}>{it.v}</dd>
        </div>
      ))}
    </dl>
  )

  return (
    <dialog
      ref={ref}
      className="case-dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      // a click that lands on the dialog element itself is a click on the backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close()
      }}
    >
      <div
        style={{
          background: P.bg,
          color: P.text,
          border: `1px solid ${P.line}`,
          borderRadius: 14,
          maxHeight: 'calc(100dvh - 24px)',
          overflowY: 'auto',
          boxShadow: '0 40px 90px -30px rgb(0 0 0 / 0.8)',
        }}
      >
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '14px clamp(18px, 3vw, 32px)',
            background: P.bg,
            borderBottom: `1px solid ${P.line}`,
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
            {icon}
            <span style={{ ...label, color: P.accent, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {project.kicker}
            </span>
          </span>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            style={{
              flexShrink: 0,
              fontFamily: mono,
              fontSize: 12,
              padding: '8px 14px',
              minHeight: 36,
              borderRadius: 999,
              border: `1px solid ${P.line}`,
              background: 'transparent',
              color: P.text,
              cursor: 'pointer',
            }}
          >
            ✕ {t.work.own.close}
          </button>
        </header>

        <div style={{ padding: 'clamp(22px, 4vw, 40px) clamp(18px, 3vw, 32px)', display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h2 id={titleId} style={{ margin: 0, fontFamily: display, fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.05 }}>
              {project.title}
            </h2>
            <p style={{ margin: 0, fontFamily: display, fontWeight: 700, fontSize: 'clamp(18px, 2.2vw, 23px)', lineHeight: 1.35, color: P.accent }}>
              {project.tagline}
            </p>
          </div>

          <dl
            style={{
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 1,
              background: P.line,
              border: `1px solid ${P.line}`,
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            {detail.meta.map((m) => (
              <div key={m.k} style={{ background: P.panel, padding: '12px 14px' }}>
                <dt style={label}>{m.k}</dt>
                <dd style={{ margin: '4px 0 0', fontSize: 14.5, color: P.text }}>{m.v}</dd>
              </div>
            ))}
          </dl>

          {detail.sections.map((s) => (
            <section key={s.heading} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <h3 style={{ margin: 0, fontFamily: display, fontWeight: 700, fontSize: 'clamp(21px, 2.6vw, 27px)' }}>{s.heading}</h3>
              {s.body && <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: P.textSoft, maxWidth: '70ch' }}>{s.body}</p>}
              {s.items && list(s.items)}
            </section>
          ))}

          {detail.tradeoffs && (
            <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ margin: 0, fontFamily: display, fontWeight: 700, fontSize: 'clamp(21px, 2.6vw, 27px)' }}>
                {detail.tradeoffs.heading}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                {(
                  [
                    [detail.tradeoffs.prosHeading, detail.tradeoffs.pros, P.ok],
                    [detail.tradeoffs.consHeading, detail.tradeoffs.cons, P.warn],
                  ] as const
                ).map(([heading, items, color]) => (
                  <div key={heading} style={{ background: P.panel, border: `1px solid ${P.line}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ ...label, color, marginBottom: 12 }}>{heading}</div>
                    <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {items.map((it) => (
                        <div key={it.k}>
                          <dt style={{ fontWeight: 700, fontSize: 15, color: P.text }}>{it.k}</dt>
                          <dd style={{ margin: '2px 0 0', fontSize: 14, lineHeight: 1.6, color: P.muted }}>{it.v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
              <p
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  borderLeft: `2px solid ${P.accent}`,
                  fontFamily: display,
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 2.2vw, 22px)',
                  lineHeight: 1.45,
                  maxWidth: '50ch',
                }}
              >
                {detail.tradeoffs.verdict}
              </p>
            </section>
          )}

          <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={label}>{t.work.labels.stack}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{ fontFamily: mono, fontSize: 11.5, padding: '5px 10px', borderRadius: 4, border: `1px solid ${P.tagBorder}`, color: P.accent }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p style={{ margin: 0, fontFamily: mono, fontSize: 11.5, color: P.muted }}>{project.note}</p>
          </section>
        </div>
      </div>
    </dialog>
  )
}
