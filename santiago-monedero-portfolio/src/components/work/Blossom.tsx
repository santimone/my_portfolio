/** Al Cierre's five-petal blossom. */
export function Blossom({ size, petal = '#f4b7c8', centre = '#e58fa9' }: { size: number; petal?: string; centre?: string }) {
  return (
    <svg viewBox="-11 -11 22 22" width={size} height={size} aria-hidden style={{ display: 'block' }}>
      <g fill={petal}>
        {[0, 72, 144, 216, 288].map((r) => (
          <ellipse key={r} cx="0" cy="-5.4" rx="3.6" ry="5.2" transform={`rotate(${r})`} />
        ))}
      </g>
      <circle r="2.3" fill={centre} />
    </svg>
  )
}
