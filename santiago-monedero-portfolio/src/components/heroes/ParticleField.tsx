import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

/** Constellation backdrop for the "field" hero. Points drift and repel the cursor. */
export function ParticleField() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return

    const still = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    let w = 0
    let h = 0
    let pts: Point[] = []
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const r = cv.getBoundingClientRect()
      w = r.width
      h = r.height
      cv.width = Math.max(1, Math.round(w * dpr))
      cv.height = Math.max(1, Math.round(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(26, Math.min(70, Math.round((w * h) / 22000)))
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }))
      if (still) draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let a = 0; a < pts.length; a++) {
        for (let b = a + 1; b < pts.length; b++) {
          const d = Math.hypot(pts[a].x - pts[b].x, pts[a].y - pts[b].y)
          if (d < 130) {
            ctx.strokeStyle = `oklch(0.7 0.1 152 / ${0.22 * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(pts[a].x, pts[a].y)
            ctx.lineTo(pts[b].x, pts[b].y)
            ctx.stroke()
          }
        }
        ctx.beginPath()
        ctx.arc(pts[a].x, pts[a].y, 1.7, 0, Math.PI * 2)
        ctx.fillStyle = 'oklch(0.78 0.12 152 / 0.75)'
        ctx.fill()
      }
    }

    const onMove = (e: MouseEvent) => {
      const r = cv.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }

    resize()
    window.addEventListener('resize', resize)

    if (still) {
      return () => window.removeEventListener('resize', resize)
    }

    window.addEventListener('mousemove', onMove)

    let raf = 0
    const step = () => {
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const d = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        if (d < 150 && d > 0) {
          p.x += ((p.x - mouse.x) / d) * 0.9
          p.y += ((p.y - mouse.y) / d) * 0.9
        }
      }
      draw()
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.75 }}
    />
  )
}
