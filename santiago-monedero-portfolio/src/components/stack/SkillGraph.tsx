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

interface Palette {
  paper: string
  glow: string
  glowSoft: string
  slat: string
  ink: string
  inkSoft: string
}

/** The panel's colours live in CSS variables; a canvas needs them resolved. */
function readPalette(el: Element): Palette {
  const s = getComputedStyle(el)
  const v = (name: string) => s.getPropertyValue(name).trim()
  return {
    paper: v('--paper'),
    glow: v('--glow'),
    glowSoft: v('--glow-soft'),
    slat: v('--slat'),
    ink: v('--paper-ink'),
    inkSoft: v('--paper-ink-soft'),
  }
}

/** Joint spacing of the asanoha lattice drawn behind the nodes. */
const SPAN = 112

/**
 * `#rrggbb` at a given opacity. A canvas gradient that fades to the keyword
 * `transparent` fades through black, which smudges the paper.
 */
function withAlpha(hex: string, a: number): string {
  const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex)
  if (!m) return hex
  return `rgb(${parseInt(m[1], 16)} ${parseInt(m[2], 16)} ${parseInt(m[3], 16)} / ${a})`
}

/**
 * Draws the asanoha kumiko once into an offscreen canvas: a triangle grid with
 * every triangle split into three from its centroid. Redrawn only on resize
 * or theme change; each frame just stamps it over the glow.
 */
function drawLattice(w: number, h: number, dpr: number, color: string): HTMLCanvasElement {
  const off = document.createElement('canvas')
  off.width = Math.max(1, Math.round(w * dpr))
  off.height = Math.max(1, Math.round(h * dpr))
  const ctx = off.getContext('2d')
  if (!ctx) return off
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  const row = (SPAN * Math.sqrt(3)) / 2
  ctx.strokeStyle = color
  ctx.globalAlpha = 0.28
  ctx.lineWidth = 1.2
  ctx.beginPath()

  for (let r = -1; r * row < h + row; r++) {
    const y0 = r * row
    const y1 = y0 + row
    const shift = r % 2 === 0 ? 0 : SPAN / 2
    for (let x = -SPAN + shift; x < w + SPAN; x += SPAN) {
      // the upward triangle (x, y1) – (x + SPAN/2, y0) – (x + SPAN, y1)
      // and the downward one (x + SPAN/2, y0) – (x + SPAN, y1) – (x + 1.5·SPAN, y0)
      const tris = [
        [x, y1, x + SPAN / 2, y0, x + SPAN, y1],
        [x + SPAN / 2, y0, x + SPAN, y1, x + SPAN * 1.5, y0],
      ]
      for (const [ax, ay, bx, by, cx, cy] of tris) {
        ctx.moveTo(ax, ay)
        ctx.lineTo(bx, by)
        ctx.lineTo(cx, cy)
        ctx.lineTo(ax, ay)
        const mx = (ax + bx + cx) / 3
        const my = (ay + by + cy) / 3
        ctx.moveTo(mx, my)
        ctx.lineTo(ax, ay)
        ctx.moveTo(mx, my)
        ctx.lineTo(bx, by)
        ctx.moveTo(mx, my)
        ctx.lineTo(cx, cy)
      }
    }
  }
  ctx.stroke()
  return off
}

/**
 * Force-directed skill graph on a canvas, drawn as a backlit shoji panel.
 * Nodes repel each other, drift back toward the centre, cluster loosely by
 * group, dodge the cursor, and can be dragged. The lamp behind the paper
 * follows the pointer, and hovering a node lights its whole group.
 * Everything is drawn by hand — no graph library.
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
    let palette = readPalette(cv)
    let lattice: HTMLCanvasElement | null = null

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
    /** where the lamp is; it eases toward its target rather than jumping */
    const lamp = { x: 0, y: 0 }

    const layout = () => {
      nodes.forEach((n, i) => {
        const a = (i / nodes.length) * Math.PI * 2
        const rad = Math.min(w, h) * (0.18 + 0.22 * ((i % 3) / 2))
        n.x = w / 2 + Math.cos(a) * rad
        n.y = h / 2 + Math.sin(a) * rad
        n.r = 6 + (5 - n.g) * 0.6
      })
      lamp.x = w / 2
      lamp.y = h / 2
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

    /** The node under the pointer (or being dragged), if any. */
    const hotNode = (): Node | null => {
      if (drag) return drag
      let best: Node | null = null
      let bd = 46
      for (const n of nodes) {
        const d = Math.hypot(n.x - mouse.x, n.y - mouse.y)
        if (d < bd) {
          bd = d
          best = n
        }
      }
      return best
    }

    const render = (ease = 0.12) => {
      const hot = hotNode()
      const lit = hot ? hot.g : -1

      // the lamp follows the hot node, else the pointer, else rests in the middle
      const inside = mouse.x > -999
      const tx = hot ? hot.x : inside ? mouse.x : w / 2
      const ty = hot ? hot.y : inside ? mouse.y : h / 2
      lamp.x += (tx - lamp.x) * ease
      lamp.y += (ty - lamp.y) * ease

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = palette.paper
      ctx.fillRect(0, 0, w, h)

      const rad = Math.max(w, h) * 0.55
      const glow = ctx.createRadialGradient(lamp.x, lamp.y, 0, lamp.x, lamp.y, rad)
      glow.addColorStop(0, palette.glow)
      glow.addColorStop(0.55, withAlpha(palette.glowSoft, 0.6))
      glow.addColorStop(1, withAlpha(palette.glowSoft, 0))
      ctx.fillStyle = glow
      ctx.globalAlpha = 0.85
      ctx.fillRect(0, 0, w, h)
      ctx.globalAlpha = 1

      if (lattice) ctx.drawImage(lattice, 0, 0, w, h)

      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const n = nodes[a]
          const o = nodes[b]
          if (n.g !== o.g) continue
          const d = Math.hypot(n.x - o.x, n.y - o.y)
          if (d < 190) {
            const on = n.g === lit
            ctx.strokeStyle = GRAPH_COLORS[n.g]
            ctx.globalAlpha = on ? 0.95 : 0.4 * (1 - d / 190)
            ctx.lineWidth = on ? 3.5 : 1.5
            ctx.lineCap = 'round'
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(o.x, o.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1

      for (const n of nodes) {
        const on = n.g === lit
        const dim = lit !== -1 && !on
        const color = GRAPH_COLORS[n.g]
        ctx.globalAlpha = dim ? 0.4 : 1

        if (n === hot) {
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r + 10, 0, Math.PI * 2)
          ctx.fillStyle = color
          ctx.globalAlpha = 0.22
          ctx.fill()
          ctx.globalAlpha = 1
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = on ? color : palette.paper
        ctx.fill()
        ctx.lineWidth = 2.2
        ctx.strokeStyle = color
        ctx.stroke()

        // a scrap of paper behind each label keeps it legible over the slats
        ctx.font = `${on ? '700 12.5px' : '500 12px'} 'JetBrains Mono', monospace`
        const lw = ctx.measureText(n.n).width + 10
        const ly = n.y + n.r + 5
        ctx.fillStyle = palette.paper
        ctx.globalAlpha = dim ? 0.35 : 0.88
        ctx.beginPath()
        ctx.roundRect(n.x - lw / 2, ly, lw, 18, 3)
        ctx.fill()
        ctx.globalAlpha = dim ? 0.4 : 1
        ctx.fillStyle = on ? palette.ink : palette.inkSoft
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillText(n.n, n.x, ly + 3)
        ctx.globalAlpha = 1
      }
    }

    /** Fast-forward to a settled arrangement without showing the motion. */
    const settle = () => {
      for (let i = 0; i < 600; i++) simulate()
      render(1)
    }

    const resize = () => {
      const rect = cv.getBoundingClientRect()
      w = rect.width
      h = rect.height
      cv.width = Math.max(1, Math.round(w * dpr))
      cv.height = Math.max(1, Math.round(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      lattice = w > 0 ? drawLattice(w, h, dpr, palette.slat) : null
      if (!placed && w > 0) {
        layout()
        placed = true
        if (still) settle()
      } else if (still) {
        render(1)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    // day ⇄ night swaps the CSS variables; re-read them and redraw the lattice
    const themeWatch = new MutationObserver(() => {
      palette = readPalette(cv)
      if (w > 0) lattice = drawLattice(w, h, dpr, palette.slat)
      if (still) render(1)
    })
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

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
      if (still) render(1)
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
      if (still) render(1)
    }

    const onUp = () => {
      drag = null
      cv.style.cursor = 'grab'
      if (still) render(1)
    }

    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
      if (still) render(1)
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
      themeWatch.disconnect()
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
