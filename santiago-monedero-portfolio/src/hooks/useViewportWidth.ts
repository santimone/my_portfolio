import { useEffect, useState } from 'react'

/** Window width, for the handful of layout decisions CSS can't express here. */
export function useViewportWidth(): number {
  const [vw, setVw] = useState(() => (typeof window === 'undefined' ? 1200 : window.innerWidth))

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return vw
}
