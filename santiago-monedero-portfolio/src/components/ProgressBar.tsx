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
        height: 2,
        background: c.lineDim,
        zIndex: 60,
      }}
    >
      <div
        style={{
          height: '100%',
          background: c.acc,
          width: `${progress}%`,
          transition: 'width 90ms linear',
        }}
      />
    </div>
  )
}
