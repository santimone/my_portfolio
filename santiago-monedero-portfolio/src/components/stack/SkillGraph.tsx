import { useEffect, useRef } from 'react'
import { GRAPH_COLORS, GRAPH_NODES } from '../../data/profile'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface Node {
  n: string
  g: number
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

/**
 * Force-directed skill graph on a canvas. Nodes repel each other, drift back
 * toward the centre, cluster loosely by group, dodge the cursor, and can be
 * dragged. Everything is drawn by hand — no graph library.
 *
 * With "reduce motion" on, the simulation is run to a settled layout once and
 * drawn as a still frame; dragging and hovering still redraw, because those
 * are things the visitor asked for.
 */
export function SkillGraph() {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const still = usePrefersReducedMotion()

  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(2, window.devicePixelRatio || 1)
    let w = 0
    let h = 0
    let placed = false

    const nodes: Node[] = GRAPH_NODES.map((s) => ({
      n: s.n,
      g: s.g,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
    }))

    let drag: Node | null = null
    const mouse = { x: -9999, y: -9999 }

    const layout = () => {
      nodes.forEach((n, i) => {
        const a = (i / nodes.length) * Math.PI * 2
        const rad = Math.min(w, h) * (0.18 + 0.22 * ((i % 3) / 2))
        n.x = w / 2 + Math.cos(a) * rad
        n.y = h / 2 + Math.sin(a) * rad
        n.r = 6 + (5 - n.g) * 0.9
      })
    }

    const simulate = () => {
      for (const n of nodes) {
        if (n === drag) continue

        // gentle pull to centre
        n.vx += (w / 2 - n.x) * 0.0009
        n.vy += (h / 2 - n.y) * 0.0009

        for (const o of nodes) {
          if (n === o) continue
          const dx = n.x - o.x
          const dy = n.y - o.y
          const d2 = Math.max(1, dx * dx + dy * dy)
          const d = Math.sqrt(d2)
          // short-range repulsion keeps labels legible
          if (d < 190) {
            const f = ((190 - d) * 0.0032) / d
            n.vx += dx * f
            n.vy += dy * f
          }
          // same-group attraction forms the clusters
          if (n.g === o.g && d > 120) {
            const f = ((d - 120) * 0.00035) / d
            n.vx -= dx * f
            n.vy -= dy * f
          }
        }

        const mdx = n.x - mouse.x
        const mdy = n.y - mouse.y
        const md = Math.hypot(mdx, mdy)
        if (md < 130 && md > 0.5) {
          const f = ((130 - md) * 0.006) / md
          n.vx += mdx * f
          n.vy += mdy * f
        }

        n.vx *= 0.9
        n.vy *= 0.9
        n.x += n.vx
        n.y += n.vy

        const pad = 60
        if (n.x < pad) {
          n.x = pad
          n.vx *= -0.4
        }
        if (n.x > w - pad) {
          n.x = w - pad
          n.vx *= -0.4
        }
        if (n.y < 26) {
          n.y = 26
          n.vy *= -0.4
        }
        if (n.y > h - 26) {
          n.y = h - 26
          n.vy *= -0.4
        }
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h)

      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const n = nodes[a]
          const o = nodes[b]
          const d = Math.hypot(n.x - o.x, n.y - o.y)
          if (d < 175) {
            const fade = 1 - d / 175
            ctx.strokeStyle =
              n.g === o.g
                ? `oklch(0.6 0.08 152 / ${0.32 * fade})`
                : `oklch(0.55 0.01 250 / ${0.2 * fade})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(o.x, o.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const hot = Math.hypot(n.x - mouse.x, n.y - mouse.y) < 46 || n === drag
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + (hot ? 3 : 0), 0, Math.PI * 2)
        ctx.fillStyle = GRAPH_COLORS[n.g]
        ctx.globalAlpha = hot ? 1 : 0.85
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.font = `${hot ? '600 12px' : '400 11.5px'} 'JetBrains Mono', monospace`
        ctx.fillStyle = hot ? 'oklch(0.97 0.01 250)' : 'oklch(0.72 0.01 250)'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillText(n.n, n.x, n.y + n.r + 6)
      }
    }

    /** Fast-forward to a settled arrangement without showing the motion. */
    const settle = () => {
      for (let i = 0; i < 600; i++) simulate()
      render()
    }

    const resize = () => {
      const rect = cv.getBoundingClientRect()
      w = rect.width
      h = rect.height
      cv.width = Math.max(1, Math.round(w * dpr))
      cv.height = Math.max(1, Math.round(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!placed && w > 0) {
        layout()
        placed = true
        if (still) settle()
      } else if (still) {
        render()
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const pointFrom = (e: MouseEvent | TouchEvent) => {
      const r = cv.getBoundingClientRect()
      const t = 'touches' in e ? e.touches[0] : e
      return { x: t.clientX - r.left, y: t.clientY - r.top }
    }

    const onDown = (e: MouseEvent | TouchEvent) => {
      const p = pointFrom(e)
      mouse.x = p.x
      mouse.y = p.y
      let best: Node | null = null
      let bd = Infinity
      for (const n of nodes) {
        const d = Math.hypot(n.x - p.x, n.y - p.y)
        if (d < bd && d < 46) {
          bd = d
          best = n
        }
      }
      if (best) {
        drag = best
        cv.style.cursor = 'grabbing'
        e.preventDefault()
      }
      if (still) render()
    }

    const onMove = (e: MouseEvent | TouchEvent) => {
      const p = pointFrom(e)
      mouse.x = p.x
      mouse.y = p.y
      if (drag) {
        drag.x = p.x
        drag.y = p.y
        drag.vx = 0
        drag.vy = 0
        e.preventDefault()
      }
      // no rAF loop is running in reduced-motion mode, so redraw on demand
      if (still) render()
    }

    const onUp = () => {
      drag = null
      cv.style.cursor = 'grab'
      if (still) render()
    }

    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
      if (still) render()
    }

    cv.addEventListener('mousedown', onDown)
    cv.addEventListener('touchstart', onDown, { passive: false })
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    cv.addEventListener('mouseleave', onLeave)

    let raf = 0
    if (!still) {
      const step = () => {
        if (w === 0) resize()
        simulate()
        render()
        raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      cv.removeEventListener('mousedown', onDown)
      cv.removeEventListener('touchstart', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
      cv.removeEventListener('mouseleave', onLeave)
    }
  }, [still])

  return (
    <canvas
      ref={ref}
      style={{
        display: 'block',
        width: '100%',
        height: 'clamp(420px, 62vh, 620px)',
        cursor: 'grab',
        touchAction: 'none',
      }}
    />
  )
}
