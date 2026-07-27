import { useState } from 'react'
import { DEPTH_LEVELS, type DepthKey } from '../../data/profile'
import { useInView } from '../../hooks/useInView'
import { useI18n } from '../../i18n/useI18n'
import { c, eyebrow, h2, mono, shell, sectionPad, tab } from '../../theme'
import { SkillGraph } from './SkillGraph'

type View = 'tree' | 'depth' | 'graph'

const pctByKey = new Map<DepthKey, number>(DEPTH_LEVELS.map((d) => [d.key, d.pct]))

export function StackSection() {
  const { t } = useI18n()
  const [view, setView] = useState<View>('tree')

  return (
    <section id="stack" style={{ padding: sectionPad }}>
      <div style={shell}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 20,
            marginBottom: 44,
          }}
        >
          <div>
            <div style={eyebrow}>{t.stack.eyebrow}</div>
            <h2 style={{ ...h2, maxWidth: '20ch' }}>{t.stack.heading}</h2>
          </div>

          <div
            role="tablist"
            aria-label={t.stack.heading}
            style={{
              display: 'flex',
              gap: 4,
              padding: 5,
              border: `1px solid ${c.line}`,
              borderRadius: 6,
              background: c.bgRaised,
            }}
          >
            {(['tree', 'depth', 'graph'] as const).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={view === key}
                onClick={() => setView(key)}
                style={{
                  padding: '7px 14px',
                  borderRadius: 4,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: mono,
                  fontSize: 12,
                  ...tab(view === key),
                }}
              >
                {t.stack.views[key]}
              </button>
            ))}
          </div>
        </div>

        {view === 'tree' && <StackTree />}
        {view === 'depth' && <StackDepth />}
        {view === 'graph' && (
          <div
            style={{
              border: `1px solid ${c.line}`,
              borderRadius: 10,
              background: 'oklch(0.135 0.006 250)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <SkillGraph />
            <div
              style={{
                position: 'absolute',
                left: 16,
                bottom: 14,
                fontFamily: mono,
                fontSize: 11,
                color: c.textFaint,
                pointerEvents: 'none',
              }}
            >
              {t.stack.graphHint}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function StackTree() {
  const { t } = useI18n()

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 18,
      }}
    >
      {t.stack.groups.map((g) => (
        <div
          key={g.dir}
          className="card-hover"
          style={{
            border: `1px solid ${c.line}`,
            borderRadius: 8,
            background: c.bgPanelSoft,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
              borderBottom: `1px solid ${c.lineDim}`,
              background: 'oklch(0.155 0.006 250)',
            }}
          >
            <span style={{ fontFamily: mono, fontSize: 13, color: c.acc }}>{g.dir}</span>
            <span style={{ fontFamily: mono, fontSize: 11, color: 'oklch(0.52 0.01 250)' }}>
              {g.items.length} {t.stack.itemsSuffix}
            </span>
          </div>
          <div style={{ padding: '12px 16px 16px', fontFamily: mono, fontSize: 12.5, lineHeight: 2.05 }}>
            {g.items.map((item, i) => (
              <div
                key={item.name}
                className="tree-item"
                style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}
              >
                <span style={{ color: c.textGhost }}>
                  {i === g.items.length - 1 ? '└─' : '├─'}
                </span>
                <span style={{ flex: 1 }}>{item.name}</span>
                <span style={{ color: c.textFaint, fontSize: 11 }}>{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function StackDepth() {
  const { t } = useI18n()
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'clamp(20px, 3vw, 44px)',
      }}
    >
      {t.stack.depth.map((d, i) => {
        const pct = pctByKey.get(d.key) ?? 0
        const color =
          pct >= 85 ? c.acc : pct >= 75 ? 'oklch(0.78 0.11 190)' : 'oklch(0.62 0.05 250)'

        return (
          <div key={d.key}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: 12,
                marginBottom: 8,
              }}
            >
              <span style={{ fontFamily: mono, fontSize: 14, color: c.text }}>{d.name}</span>
              <span style={{ fontFamily: mono, fontSize: 11, color: c.label }}>{d.label}</span>
            </div>
            <div
              role="meter"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={d.name}
              style={{
                height: 5,
                borderRadius: 3,
                background: c.lineDim,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderRadius: 3,
                  background: color,
                  width: `${inView ? pct : 0}%`,
                  transition: 'width 1.1s cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDelay: `${i * 70}ms`,
                }}
              />
            </div>
            <div style={{ fontSize: 12.5, color: c.textDim, marginTop: 9, lineHeight: 1.5 }}>
              {d.note}
            </div>
          </div>
        )
      })}
    </div>
  )
}
