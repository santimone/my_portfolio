import { useCallback, useRef, useState } from 'react'

/**
 * Latches to true the first time the element scrolls into view — used to fire
 * the proficiency bar animation once rather than on every scroll pass.
 * Returns a ref callback so it survives the element being mounted later
 * (the bars only exist while the "depth" tab is selected).
 */
export function useInView(rootMargin = '0px 0px -10% 0px'): [(el: HTMLElement | null) => void, boolean] {
  const [inView, setInView] = useState(false)
  const observer = useRef<IntersectionObserver | null>(null)

  const ref = useCallback(
    (el: HTMLElement | null) => {
      observer.current?.disconnect()
      if (!el) return

      if (typeof IntersectionObserver === 'undefined') {
        setInView(true)
        return
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            setInView(true)
            observer.current?.disconnect()
          }
        },
        { rootMargin },
      )
      observer.current.observe(el)
    },
    [rootMargin],
  )

  return [ref, inView]
}
