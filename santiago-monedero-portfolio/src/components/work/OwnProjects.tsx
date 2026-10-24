import { useRef, useState, type ReactNode } from 'react'
import { useI18n } from '../../i18n/useI18n'
import type { OwnProject } from '../../i18n/types'
import { c, display, mono } from '../../theme'
import { AlCierreBranch } from './AlCierreBranch'
import { Blossom } from './Blossom'
import { CaseDialog } from './CaseDialog'
import { CreatorHubLaunch } from './CreatorHubLaunch'
import { Lantern } from './Lantern'
import { AL_CIERRE, CREATOR_HUB, type ProjectPalette } from './palettes'

/** Everything that differs between the two cards, keyed by project id. */
const LOOK: Record<OwnProject['id'], { palette: ProjectPalette; icon: ReactNode; demo: () => ReactNode; demoPad: boolean }> = {
  'al-cierre': {
    palette: AL_CIERRE,
    icon: <IconTile bg="#0f0b09" border={AL_CIERRE.line}><Blossom size={24} /></IconTile>,
    demo: () => <AlCierreBranch />,
    demoPad: true,
  },
  'creator-hub': {
    palette: CREATOR_HUB,
    icon: (
      <IconTile bg={CREATOR_HUB.panel} border={CREATOR_HUB.line}>
        <Lantern tone="amber" size={24} />
      </IconTile>
    ),
    demo: () => <CreatorHubLaunch />,
    demoPad: false,
  },
}

function IconTile({ bg, border, children }: { bg: string; border: string; children: ReactNode }) {
  return (
    <span
      aria-hidden
      style={{
        width: 40,
        height: 40,
        flexShrink: 0,
        borderRadius: 12,
        background: bg,
        border: `1px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </span>
  )
}

/**
 * My own apps, shown openly. Each card carries its app's own palette and a
 * small live piece of it; "view the case" opens the full write-up.
 */
export function OwnProjects() {
  const { t } = useI18n()
  const own = t.work.own
  const [open, setOpen] = useState<OwnProject['id'] | null>(null)
  const triggers = useRef<Partial<Record<OwnProject['id'], HTMLButtonElement | null>>>({})

  const openProject = own.projects.find((p) => p.id === open)

  const close = () => {
    const id = open
    setOpen(null)
    // hand focus back to the button that opened the dialog
    if (id) requestAnimationFrame(() => triggers.current[id]?.focus())
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
        <h3 style={{ margin: 0, fontFamily: display, fontWeight: 700, fontSize: 'clamp(22px, 2.6vw, 28px)' }}>{own.heading}</h3>
        <span style={{ fontFamily: mono, fontSize: 12, color: c.textFaint }}>{own.sub}</span>
      </div>

      {own.projects.map((p) => {
        const look = LOOK[p.id]
        const P = look.palette
        const colLabel: React.CSSProperties = {
          fontFamily: mono,
          fontSize: 10.5,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: P.muted,
        }

        return (
          <article
            key={p.id}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              border: `1px solid ${P.line}`,
              borderRadius: 12,
              overflow: 'hidden',
              background: P.bg,
              color: P.text,
            }}
          >
            <div
              style={{
                flex: '1.2 1 460px',
                minWidth: 0,
                padding: look.demoPad ? 'clamp(20px, 3vw, 28px)' : 0,
                borderRight: `1px solid ${P.line}`,
              }}
            >
              {look.demo()}
            </div>

            <div style={{ flex: '1 1 380px', minWidth: 0, padding: 'clamp(20px, 3vw, 28px)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {look.icon}
                <span style={{ ...colLabel, color: P.accent }}>{p.kicker}</span>
              </div>

              <div>
                <h4 style={{ margin: '0 0 6px', fontFamily: display, fontWeight: 800, fontSize: 'clamp(28px, 3vw, 34px)', lineHeight: 1.1 }}>
                  {p.title}
                </h4>
                <p style={{ margin: 0, fontFamily: display, fontWeight: 700, fontSize: 18.5, lineHeight: 1.4, color: P.accent }}>
                  {p.tagline}
                </p>
              </div>

              <div>
                <div style={{ ...colLabel, marginBottom: 6 }}>{t.work.labels.problem}</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: P.textSoft }}>{p.problem}</p>
              </div>
              <div>
                <div style={{ ...colLabel, marginBottom: 6 }}>{t.work.labels.approach}</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: P.textSoft }}>{p.approach}</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontFamily: mono, fontSize: 10.5, padding: '4px 9px', borderRadius: 4, border: `1px solid ${P.tagBorder}`, color: P.accent }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px 16px', marginTop: 'auto', paddingTop: 6 }}>
                <button
                  type="button"
                  ref={(el) => {
                    triggers.current[p.id] = el
                  }}
                  onClick={() => setOpen(p.id)}
                  aria-haspopup="dialog"
                  style={{
                    border: 'none',
                    background: P.accent,
                    color: P.accentInk,
                    padding: '13px 20px',
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: 'pointer',
                  }}
                >
                  {own.viewCase}
                </button>
                <span style={{ fontFamily: mono, fontSize: 11, color: P.muted }}>{p.note}</span>
              </div>
            </div>
          </article>
        )
      })}

      {openProject && (
        <CaseDialog project={openProject} palette={LOOK[openProject.id].palette} icon={LOOK[openProject.id].icon} onClose={close} />
      )}
    </div>
  )
}
