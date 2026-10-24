import { useId, useState, type PointerEvent } from 'react'
import { GRAPH_NODES } from '../../data/profile'
import { useI18n } from '../../i18n/useI18n'
import { c, mono } from '../../theme'

/**
 * A shoji panel lit from behind: asanoha kumiko in the upper section, a plain
 * paper grid below. The pointer is the lamp — the glow follows it across the
 * paper, and the nearest kumiko joint lights up with a piece of the stack.
 *
 * Everything is drawn in a fixed 520×620 viewBox and scaled to fit, so the
 * geometry below is in those units.
 */

const W = 520
const H = 620
const FRAME = 28
const UPPER = { x: FRAME, y: FRAME, w: W - FRAME * 2, h: 236 }
const RAIL_Y = UPPER.y + UPPER.h
const LOWER = { x: FRAME, y: RAIL_Y + 16, w: UPPER.w, h: H - FRAME - (RAIL_Y + 16) }

/** One 40 × 69.28 asanoha tile: a triangle grid with each triangle split from its centroid. */
const ASANOHA =
  'M-20 0H60M-20 34.641H60M-20 69.282H60M0 0L20 34.641L40 0M-20 34.641L0 0M40 0L60 34.641M0 69.282L20 34.641L40 69.282M-20 34.641L0 69.282M60 34.641L40 69.282M20 11.547L0 0M20 11.547L40 0M20 11.547L20 34.641M0 23.094L-20 34.641M0 23.094L0 0M0 23.094L20 34.641M40 23.094L20 34.641M40 23.094L40 0M40 23.094L60 34.641M20 57.735L0 69.282M20 57.735L20 34.641M20 57.735L40 69.282M0 46.188L-20 34.641M0 46.188L20 34.641M0 46.188L0 69.282M40 46.188L20 34.641M40 46.188L60 34.641M40 46.188L40 69.282'

/** The tile is drawn at 1.3× — 52 units across, so joints sit 52 apart. */
const SPAN = 52
const ROW = 90.067

/** Faint wavy lines that read as grain on the frame. */
const GRAIN = [
  'M0 8C140 5 300 12 520 7M0 17C160 20 330 14 520 19',
  'M0 603C150 600 320 607 520 602M0 612C170 615 340 609 520 614',
  'M9 0C6 180 12 420 8 620M18 0C21 200 15 400 19 620',
  'M502 0C505 190 499 430 503 620M511 0C508 210 514 410 510 620',
]

const GRID_SLATS = [1, 2, 3].map((i) => LOWER.x + (LOWER.w / 4) * i)
const GRID_ROWS = [1, 2, 3].map((i) => LOWER.y + (LOWER.h / 4) * i)

const NAMES = GRAPH_NODES.map((n) => n.n)
const REST = { x: 320, y: 150 }

interface Joint {
  x: number
  y: number
}

/** The kumiko joints form two offset triangular lattices; pick the closer point. */
function nearestJoint(x: number, y: number): Joint | null {
  const ax = UPPER.x + Math.round((x - UPPER.x) / SPAN) * SPAN
  const ay = UPPER.y + Math.round((y - UPPER.y) / ROW) * ROW
  const bx = UPPER.x + SPAN / 2 + Math.round((x - UPPER.x - SPAN / 2) / SPAN) * SPAN
  const by = UPPER.y + ROW / 2 + Math.round((y - UPPER.y - ROW / 2) / ROW) * ROW
  const a = (ax - x) ** 2 + (ay - y) ** 2 <= (bx - x) ** 2 + (by - y) ** 2
  const j = a ? { x: ax, y: ay } : { x: bx, y: by }
  const inside = j.x > UPPER.x + 2 && j.x < UPPER.x + UPPER.w - 2 && j.y > UPPER.y + 2 && j.y < RAIL_Y - 2
  return inside ? j : null
}

/** Each joint always shows the same name, so sweeping back finds it again. */
const nameAt = (j: Joint) =>
  NAMES[Math.abs(Math.round(j.x / (SPAN / 2)) * 3 + Math.round(j.y / (ROW / 2)) * 7) % NAMES.length]

export function ShojiPanel() {
  const { t } = useI18n()
  // url(#id) references need plain characters; React's ids carry colons
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const ids = { lattice: `lat${uid}`, glow: `glow${uid}`, upper: `up${uid}`, lower: `lo${uid}` }

  const [light, setLight] = useState(REST)
  const [joint, setJoint] = useState<Joint | null>(null)

  const onMove = (e: PointerEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const s = W / r.width
    const x = (e.clientX - r.left) * s
    const y = (e.clientY - r.top) * s
    setLight((prev) =>
      Math.abs(prev.x - x) < 2 && Math.abs(prev.y - y) < 2
        ? prev
        : { x: Math.min(W - FRAME, Math.max(FRAME, x)), y: Math.min(H - FRAME, Math.max(FRAME, y)) },
    )
    const next = y < RAIL_Y ? nearestJoint(x, y) : null
    setJoint((prev) => (prev && next && prev.x === next.x && prev.y === next.y ? prev : next))
  }

  const onLeave = () => {
    setLight(REST)
    setJoint(null)
  }

  const name = joint ? nameAt(joint) : ''
  const chipW = Math.round(name.length * 7.4 + 24)
  const chipX = joint ? (joint.x > W / 2 + 40 ? joint.x - 14 - chipW : joint.x + 14) : 0
  const chipY = joint ? (joint.y > RAIL_Y - 44 ? joint.y - 40 : joint.y + 12) : 0

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      role="img"
      aria-label={t.heroField.panelLabel}
      style={{ display: 'block', width: '100%', height: 'auto', cursor: 'crosshair', touchAction: 'pan-y' }}
    >
      <defs>
        <pattern
          id={ids.lattice}
          width={SPAN}
          height={ROW}
          patternUnits="userSpaceOnUse"
          viewBox="0 0 40 69.282"
          patternTransform={`translate(${UPPER.x} ${UPPER.y})`}
        >
          <path d={ASANOHA} fill="none" strokeWidth={2.4} strokeLinecap="square" style={{ stroke: c.slat }} />
          <path d={ASANOHA} fill="none" strokeWidth={0.8} style={{ stroke: c.slatHi }} />
        </pattern>
        <radialGradient id={ids.glow}>
          <stop offset="0" style={{ stopColor: c.glow }} />
          <stop offset="0.55" stopOpacity={0.55} style={{ stopColor: c.glowSoft }} />
          <stop offset="1" stopOpacity={0} style={{ stopColor: c.glowSoft }} />
        </radialGradient>
        <clipPath id={ids.upper}>
          <rect x={UPPER.x} y={UPPER.y} width={UPPER.w} height={UPPER.h} />
        </clipPath>
        <clipPath id={ids.lower}>
          <rect x={LOWER.x} y={LOWER.y} width={LOWER.w} height={LOWER.h} />
        </clipPath>
      </defs>

      <circle cx={W / 2} cy={H / 2} r={320} style={{ fill: c.halo }} />

      <rect width={W} height={H} rx={4} style={{ fill: c.woodDark }} />
      <g fill="none" strokeWidth={1.2} style={{ stroke: c.woodGrain }}>
        {GRAIN.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      <rect x={UPPER.x} y={UPPER.y} width={UPPER.w} height={UPPER.h} style={{ fill: c.paper }} />
      <g clipPath={`url(#${ids.upper})`}>
        <circle cx={light.x} cy={light.y} r={210} fill={`url(#${ids.glow})`} />
        <rect x={UPPER.x} y={UPPER.y} width={UPPER.w} height={UPPER.h} fill={`url(#${ids.lattice})`} />
        {joint && <circle cx={joint.x} cy={joint.y} r={5.5} style={{ fill: c.seal }} />}
      </g>

      <rect x={UPPER.x} y={RAIL_Y} width={UPPER.w} height={16} style={{ fill: c.rail }} />

      <rect x={LOWER.x} y={LOWER.y} width={LOWER.w} height={LOWER.h} style={{ fill: c.paper }} />
      <g clipPath={`url(#${ids.lower})`}>
        <circle cx={light.x} cy={light.y} r={240} fill={`url(#${ids.glow})`} />
        <g style={{ fill: c.slat }}>
          {GRID_SLATS.map((x) => (
            <rect key={x} x={x - 3} y={LOWER.y} width={6} height={LOWER.h} />
          ))}
          {GRID_ROWS.map((y) => (
            <rect key={y} x={LOWER.x} y={y - 3} width={LOWER.w} height={6} />
          ))}
        </g>
      </g>

      <rect x={FRAME} y={FRAME} width={UPPER.w} height={H - FRAME * 2} fill="none" strokeWidth={2} style={{ stroke: c.slat }} />

      {joint && (
        <g fontFamily={mono} fontSize={12}>
          <rect x={chipX} y={chipY} width={chipW} height={26} rx={4} style={{ fill: c.codeBg, stroke: c.codeAcc }} />
          <text x={chipX + chipW / 2} y={chipY + 17} textAnchor="middle" style={{ fill: c.codeText }}>
            {name}
          </text>
        </g>
      )}
    </svg>
  )
}
