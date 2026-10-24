import { c } from '../theme'

/**
 * The horizontal rail of a shoji frame, used between sections. Two faint wavy
 * lines are the grain; `variant` shifts them so neighbouring rails differ.
 */
const GRAIN = [
  'M0 4C300 2 700 6 1440 3M0 10C400 12 900 8 1440 11',
  'M0 5C350 3 800 7 1440 4M0 10C450 12 950 8 1440 10',
  'M0 3C250 5 800 2 1440 4M0 9C500 11 1000 8 1440 10',
  'M0 4C300 6 700 2 1440 5M0 10C400 8 900 12 1440 9',
]

export function WoodRail({ variant = 0 }: { variant?: number }) {
  return (
    <div
      aria-hidden
      style={{
        height: 14,
        background: c.woodDark,
        borderTop: `1px solid ${c.rail}`,
        borderBottom: `1px solid ${c.rail}`,
        overflow: 'hidden',
      }}
    >
      <svg width="100%" height="12" viewBox="0 0 1440 12" preserveAspectRatio="none" style={{ display: 'block' }}>
        <path d={GRAIN[variant % GRAIN.length]} fill="none" strokeWidth={1} style={{ stroke: c.woodGrain }} />
      </svg>
    </div>
  )
}
