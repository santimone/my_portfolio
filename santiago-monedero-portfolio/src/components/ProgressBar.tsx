import { useScrollProgress } from '../hooks/useScrollProgress'
import { c } from '../theme'

export function ProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: c.lineSoft,
        zIndex: 60,
      }}
    >
      <div
        style={{
          height: '100%',
          background: c.wood,
          width: `${progress}%`,
          transition: 'width 90ms linear',
        }}
      />
    </div>
  )
}
