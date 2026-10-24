import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import type { CreatorHubDemo } from '../../i18n/types'
import { display, mono } from '../../theme'
import { Lantern, type LanternTone } from './Lantern'
import { CREATOR_HUB as P } from './palettes'

/**
 * A replay of Creator Hub's per-network tracking: one clip, three networks,
 * each moving through its own stages. A network's lantern rises off the water
 * once its post is out. The timings are for show — the real thing takes longer.
 */

const NETWORKS = [
  { name: 'YouTube Shorts', short: 'Shorts', color: '#ff4444', tone: 'youtube', x: 40, sky: 40, size: 40 },
  { name: 'Instagram Reels', short: 'Reels', color: '#e4407a', tone: 'instagram', x: 62, sky: 18, size: 44 },
  { name: 'TikTok', short: 'TikTok', color: '#2ce8e0', tone: 'tiktok', x: 82, sky: 58, size: 38 },
] as const

/** lanterns that are always up, just for the sky */
const DECOR: { tone: LanternTone; x: number; top: number; size: number }[] = [
  { tone: 'amber', x: 12, top: 26, size: 54 },
  { tone: 'amber', x: 26, top: 70, size: 20 },
  { tone: 'amber', x: 93, top: 22, size: 18 },
]

const STARS = [
  [40, 30, 1], [120, 80, 0.8], [210, 24, 1.1], [300, 64, 0.8], [370, 18, 1], [450, 90, 0.9],
  [520, 36, 1.2], [580, 110, 0.8], [160, 140, 0.8], [260, 120, 1], [490, 150, 0.8], [80, 160, 1],
] as const

const WATER = 200
const FINAL_STEP = 4
const STEP_MS = 900

type Tone = 'idle' | 'run' | 'ok' | 'warn'

const CHIP: Record<Tone, [string, string]> = {
  idle: [P.muted, 'rgb(169 174 203 / 0.12)'],
  run: [P.accent, 'rgb(242 165 65 / 0.14)'],
  ok: [P.ok, 'rgb(93 211 158 / 0.14)'],
  warn: [P.warn, 'rgb(245 192 74 / 0.14)'],
}

/** status, stages done, the active stage (-1 for none), chip tone and note for one network at one step */
function networkAt(net: number, step: number, d: CreatorHubDemo): [string, number, number, Tone, string] {
  if (step === 0) return [d.status.ready, 0, -1, 'idle', d.notes.ready]
  if (step === 1) return [d.status.preparing, 1, 1, 'run', d.notes.preparing]
  if (step === 2) return [d.status.uploading, 2, 2, 'run', d.notes.uploading]
  // Instagram makes you wait while it processes the video
  if (net === 1 && step === 3) return [d.status.processing, 2, 2, 'run', d.notes.processing]
  if (net === 2) return [d.status.published, 4, -1, 'warn', d.notes.privateTikTok]
  return [d.status.published, 4, -1, 'ok', net === 0 ? d.notes.publishedYouTube : d.notes.publishedInstagram]
}

export function CreatorHubLaunch() {
  const { t } = useI18n()
  const d = t.work.own.creatorHub
  const [step, setStep] = useState(0)
  const timers = useRef<number[]>([])

  const clear = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  // stop a launch that is mid-flight if the card unmounts
  useEffect(() => {
    const pending = timers
    return () => pending.current.forEach(clearTimeout)
  }, [])

  const launch = () => {
    clear()
    if (step !== 0) {
      setStep(0)
      return
    }
    timers.current = [1, 2, 3, FINAL_STEP].map((s, i) => window.setTimeout(() => setStep(s), STEP_MS * (i + 1)))
  }

  const rows = NETWORKS.map((n, i) => ({ ...n, state: networkAt(i, step, d) }))
  const label = step === 0 ? d.publish : step < FINAL_STEP ? d.publishing : d.restart

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div aria-hidden style={{ position: 'relative', height: 260, overflow: 'hidden', background: P.bg }}>
        <svg viewBox="0 0 600 260" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <g fill={P.text}>
            {STARS.map(([x, y, r]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fillOpacity={0.55} />
            ))}
          </g>
          <path d={`M0 ${WATER}H600`} stroke={P.line} strokeWidth={1.5} />
          <path d="M60 214H110M70 226H100M330 216H370M480 222H520" stroke={P.accent} strokeOpacity={0.25} strokeWidth={2} strokeLinecap="round" />
        </svg>

        {DECOR.map((l) => (
          <span key={`${l.x}-${l.top}`} style={{ position: 'absolute', left: `${l.x}%`, top: l.top, transform: 'translateX(-50%)' }}>
            <Lantern tone={l.tone} size={l.size} />
          </span>
        ))}

        {rows.map((n) => {
          const up = n.state[1] === 4
          return (
            <span
              key={n.name}
              style={{
                position: 'absolute',
                left: `${n.x}%`,
                top: up ? n.sky : WATER - 2 - n.size,
                transform: 'translateX(-50%)',
                opacity: up ? 1 : 0.75,
                transition: 'top 1.6s cubic-bezier(0.3, 0.7, 0.3, 1), opacity 1.6s ease',
              }}
            >
              <Lantern tone={n.tone} size={n.size} />
            </span>
          )
        })}

        {NETWORKS.map((n) => (
          <span
            key={n.short}
            style={{
              position: 'absolute',
              left: `${n.x}%`,
              top: WATER + 8,
              transform: 'translateX(-50%)',
              fontFamily: mono,
              fontSize: 10,
              color: '#8a90b5',
            }}
          >
            {n.short}
          </span>
        ))}
      </div>

      <div style={{ padding: '18px 24px 22px', display: 'flex', flexDirection: 'column', gap: 4, borderTop: `1px solid ${P.line}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', paddingBottom: 8 }}>
          <span style={{ fontFamily: display, fontWeight: 700, fontSize: 18, color: P.text }}>{d.clip}</span>
          <button
            type="button"
            onClick={launch}
            style={{
              border: 'none',
              background: P.accent,
              color: P.accentInk,
              padding: '10px 16px',
              minHeight: 40,
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
              boxShadow: '0 0 24px rgb(242 165 65 / 0.35)',
            }}
          >
            {label}
          </button>
        </div>

        <div aria-live="polite">
          {rows.map((n) => {
            const [status, done, active, tone, note] = n.state
            return (
              <div
                key={n.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) auto',
                  gap: '6px 12px',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderTop: `1px solid ${P.line}`,
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: P.text }}>
                  <span aria-hidden style={{ width: 10, height: 10, borderRadius: '50%', background: n.color }} />
                  {n.name}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    borderRadius: 999,
                    padding: '2px 10px',
                    color: CHIP[tone][0],
                    background: CHIP[tone][1],
                  }}
                >
                  {status}
                </span>
                <div aria-hidden style={{ gridColumn: '1 / -1', display: 'flex', gap: 4 }}>
                  {[0, 1, 2, 3].map((k) => (
                    <span
                      key={k}
                      style={{
                        flex: 1,
                        height: 4,
                        borderRadius: 2,
                        background: k === active ? P.accent : k < done ? P.ok : P.line,
                        boxShadow: k === active ? '0 0 8px rgb(242 165 65 / 0.35)' : 'none',
                      }}
                    />
                  ))}
                </div>
                <span style={{ gridColumn: '1 / -1', fontSize: 12, color: '#8a90b5' }}>{note}</span>
              </div>
            )
          })}
        </div>

        <span style={{ fontSize: 12, color: P.muted, paddingTop: 6 }}>{d.cloudNote}</span>
      </div>
    </div>
  )
}
