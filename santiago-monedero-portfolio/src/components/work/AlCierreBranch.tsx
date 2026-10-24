import { useMemo, useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import { display, mono } from '../../theme'
import { Blossom } from './Blossom'
import { AL_CIERRE as P } from './palettes'

/**
 * Al Cierre's signature view, with an invented cycle: Sep 26 → Oct 29, today
 * being day 28. One blossom per day that has passed, sized by that day's
 * spending; buds for the days still ahead.
 */
const START = new Date(2026, 8, 26)
const LENGTH = 34
const TODAY = 27
const NO_SPEND = new Set([3, 10, 17, 21, 24])
const WOBBLE = [-18, 10, -7, 16, -12, 6, -20, 12, -4, 17, -14, 8, -8, 18]
/** the branch curve, in the 1000×200 space of the drawing */
const CURVE = [
  [6, 170],
  [250, 60],
  [620, 40],
  [860, 92],
] as const

interface Day {
  i: number
  date: Date
  past: boolean
  amount: number
  size: number
  left: number
  top: number
}

const DAYS: Day[] = Array.from({ length: LENGTH }, (_, i) => {
  const t = 0.02 + (0.98 * i) / (LENGTH - 1)
  const u = 1 - t
  const at = (k: 0 | 1) =>
    u * u * u * CURVE[0][k] + 3 * u * u * t * CURVE[1][k] + 3 * u * t * t * CURVE[2][k] + t * t * t * CURVE[3][k]
  const past = i <= TODAY
  // deterministic, plausible-looking sample amounts
  const amount = past && !NO_SPEND.has(i) ? 4000 + ((i * 7919) % 46000) : 0
  const size = i === TODAY ? 34 : past ? (amount ? 14 + Math.round((amount / 46000) * 14) : 12) : 11
  const y = at(1) + WOBBLE[i % WOBBLE.length]
  return {
    i,
    date: new Date(START.getFullYear(), START.getMonth(), START.getDate() + i),
    past,
    amount,
    size,
    left: at(0) / 10,
    top: Math.round(y - size / 2),
  }
})

const TOTAL = DAYS.reduce((s, d) => s + d.amount, 0)
const money = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })

export function AlCierreBranch() {
  const { t, lang } = useI18n()
  const d = t.work.own.alCierre
  const [picked, setPicked] = useState<number | null>(null)

  const dayLabel = useMemo(() => {
    const f = new Intl.DateTimeFormat(lang === 'es' ? 'es-AR' : 'en-US', {
      weekday: 'short',
      day: 'numeric',
      month: lang === 'es' ? 'numeric' : 'short',
    })
    return (date: Date) => f.format(date)
  }, [lang])

  const day = picked === null ? null : DAYS[picked]
  const summary =
    day === null
      ? d.todaySummary.replace('{day}', String(TODAY + 1)).replace('{total}', String(LENGTH))
      : [dayLabel(day.date), day.i === TODAY ? d.todayTag : '', day.past ? (day.amount ? d.daySpent : d.dayNone) : d.dayFuture]
          .filter(Boolean)
          .join(' · ')
  const figure = day === null ? money.format(TOTAL) : day.past ? money.format(day.amount) : d.bud

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: display, fontWeight: 700, fontSize: 21, color: P.text }}>{d.cycle}</span>
        <span style={{ fontFamily: mono, fontSize: 11, color: P.muted }}>{d.range}</span>
      </div>

      <div
        onPointerLeave={() => setPicked(null)}
        role="img"
        aria-label={d.hint}
        style={{ position: 'relative', height: 220 }}
      >
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          aria-hidden
          style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: 200 }}
        >
          <path d="M6 170 C 250 60, 620 40, 860 92" fill="none" stroke="#7a5a48" strokeWidth={9} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path d="M860 92 C 910 100, 950 92, 994 70" fill="none" stroke="#5a4235" strokeWidth={3} strokeDasharray="6 7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path
            d="M300 92 C 312 66, 336 48, 370 38M560 66 C 572 92, 596 108, 630 116M130 128 C 140 150, 160 162, 186 168"
            fill="none"
            stroke="#7a5a48"
            strokeWidth={4}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {DAYS.map((x) => (
          <span
            key={x.i}
            aria-hidden
            onPointerEnter={() => setPicked(x.i)}
            onClick={() => setPicked(x.i)}
            style={{
              position: 'absolute',
              left: `${x.left}%`,
              top: x.top,
              width: x.size,
              height: x.size,
              transform: `translateX(-50%) scale(${picked === x.i ? 1.35 : 1})`,
              transition: 'transform 140ms ease',
              borderRadius: '50%',
              cursor: 'pointer',
              ...(x.past ? null : { background: '#5a3e48', border: '1.5px solid #8a5c6c', boxSizing: 'border-box' }),
              opacity: x.past && !x.amount ? 0.55 : 1,
            }}
          >
            {x.past && <Blossom size={x.size} petal={x.i === TODAY ? '#ffd0dd' : '#f4b7c8'} />}
          </span>
        ))}

        <span style={{ position: 'absolute', left: 0, bottom: 0, fontSize: 12, color: P.muted }}>{d.start}</span>
        <span
          style={{
            position: 'absolute',
            left: '86%',
            bottom: 0,
            transform: 'translateX(-50%)',
            fontSize: 12,
            fontWeight: 700,
            color: P.text,
            whiteSpace: 'nowrap',
          }}
        >
          {d.close}
        </span>
      </div>

      <div
        aria-live="polite"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          flexWrap: 'wrap',
          padding: '12px 14px',
          border: `1.5px dashed ${P.accent}`,
          borderRadius: 10,
          background: P.panel,
        }}
      >
        <span style={{ fontSize: 14, color: P.muted }}>{summary}</span>
        <span style={{ fontFamily: display, fontWeight: 800, fontSize: 22, color: P.text }}>{figure}</span>
      </div>

      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: P.muted }}>{d.hint}</p>
    </div>
  )
}
