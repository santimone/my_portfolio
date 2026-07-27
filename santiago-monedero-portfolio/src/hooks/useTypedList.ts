import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Reveals a list one entry at a time, like a script printing to a terminal.
 * Restarts whenever `lines` changes identity — which is exactly what we want
 * when the visitor switches language mid-animation.
 */
export function useTypedList<T>(lines: readonly T[], step = 180, lead = 260): T[] {
  const still = usePrefersReducedMotion()
  const [shown, setShown] = useState(0)

  // Resetting during render (rather than in an effect) avoids a frame where the
  // previous language's lines are still on screen.
  const [seen, setSeen] = useState(lines)
  if (seen !== lines) {
    setSeen(lines)
    setShown(0)
  }

  useEffect(() => {
    if (still) return
    const timers = lines.map((_, i) => setTimeout(() => setShown(i + 1), lead + i * step))
    return () => timers.forEach(clearTimeout)
  }, [lines, step, lead, still])

  return still ? lines.slice() : lines.slice(0, shown)
}
