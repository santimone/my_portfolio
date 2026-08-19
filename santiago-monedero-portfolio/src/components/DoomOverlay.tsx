import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../i18n/useI18n'
import { c, mono } from '../theme'

const JSDOS_SCRIPT = '/doom/jsdos/js-dos.js'
const JSDOS_CSS = '/doom/jsdos/js-dos.css'
const EMULATORS_PATH = '/doom/jsdos/emulators/'
const BUNDLE_URL = '/doom/doom.jsdos'

interface DosPlayer {
  stop: () => Promise<void>
}

type DosFn = (
  element: HTMLElement,
  options: {
    url: string
    pathPrefix: string
    autoStart: boolean
    kiosk: boolean
    noCloud: boolean
    renderAspect: string
    imageRendering: string
    onEvent: (event: string) => void
  },
) => DosPlayer

declare global {
  interface Window {
    Dos?: DosFn
  }
}

let scriptPromise: Promise<void> | null = null

function loadJsDosScript(): Promise<void> {
  if (window.Dos) return Promise.resolve()
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = JSDOS_SCRIPT
      script.onload = () => resolve()
      script.onerror = () => {
        scriptPromise = null
        script.remove()
        reject(new Error('js-dos runtime failed to load'))
      }
      document.head.appendChild(script)
    })
  }
  return scriptPromise
}

export default function DoomOverlay({ onClose }: { onClose: () => void }) {
  const { t } = useI18n()
  const mountRef = useRef<HTMLDivElement | null>(null)
  const onCloseRef = useRef(onClose)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    // js-dos.css carries a global Tailwind reset, so it only lives in <head>
    // while the opaque overlay hides the page it would restyle.
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = JSDOS_CSS
    document.head.appendChild(link)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    let player: DosPlayer | null = null
    let disposed = false

    loadJsDosScript()
      .then(() => {
        if (disposed || !mountRef.current || !window.Dos) return
        player = window.Dos(mountRef.current, {
          url: BUNDLE_URL,
          // without pathPrefix js-dos falls back to its public CDN
          pathPrefix: EMULATORS_PATH,
          autoStart: true,
          kiosk: true,
          noCloud: true,
          renderAspect: '4/3',
          imageRendering: 'pixelated',
          onEvent: (event) => {
            // quitting DOOM from inside the game (F10) closes the overlay
            if (event === 'exit' && !disposed) onCloseRef.current()
          },
        })
      })
      .catch(() => {
        if (!disposed) setFailed(true)
      })

    return () => {
      disposed = true
      void player?.stop()
      document.body.style.overflow = prevOverflow
      link.remove()
    }
  }, [])

  const term = t.terminal.doom

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={term.title}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'oklch(0.07 0.004 250 / 0.97)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        padding: 'clamp(12px, 3vw, 32px)',
      }}
    >
      <div
        style={{
          width: 'min(100%, 960px, calc((100vh - 170px) * 4 / 3))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: '0.08em',
            color: c.textDim,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {term.title}
        </span>
        <button
          type="button"
          onClick={onClose}
          style={{
            fontFamily: mono,
            fontSize: 11,
            padding: '5px 11px',
            borderRadius: 999,
            border: `1px solid ${c.lineStrong}`,
            background: 'transparent',
            color: c.text,
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          ✕ {term.close}
        </button>
      </div>

      <div
        ref={mountRef}
        style={{
          width: 'min(100%, 960px, calc((100vh - 170px) * 4 / 3))',
          aspectRatio: '4 / 3',
          border: `1px solid ${c.lineStrong}`,
          borderRadius: 9,
          overflow: 'hidden',
          background: 'oklch(0 0 0)',
        }}
      >
        {failed && (
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
              fontFamily: mono,
              fontSize: 12.5,
              color: c.danger,
              textAlign: 'center',
            }}
          >
            {term.failed}
          </div>
        )}
      </div>

      <div
        style={{
          fontFamily: mono,
          fontSize: 11,
          color: c.textDim,
          textAlign: 'center',
          lineHeight: 1.6,
        }}
      >
        {term.controls}
      </div>
    </div>,
    document.body,
  )
}
