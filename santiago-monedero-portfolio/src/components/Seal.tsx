import { c, display } from '../theme'

/** The vermilion "SM" stamp used as the logo, in the terminal and in the footer. */
export function Seal({ size = 34, tilt = 0 }: { size?: number; tilt?: number }) {
  return (
    <span
      aria-hidden
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: Math.max(3, size / 7),
        background: c.seal,
        color: c.sealInk,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: display,
        fontWeight: 800,
        fontSize: Math.round(size * 0.42),
        lineHeight: 1,
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
      }}
    >
      SM
    </span>
  )
}
