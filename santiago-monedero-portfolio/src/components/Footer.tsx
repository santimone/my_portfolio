import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useI18n } from '../i18n/useI18n'
import { c, mono } from '../theme'

/** Buenos Aires wall-clock time, regardless of where the visitor is. */
function useBuenosAiresClock(): string {
  const [clock, setClock] = useState('')

  useEffect(() => {
    let format: Intl.DateTimeFormat
    try {
      format = new Intl.DateTimeFormat('en-GB', {
        timeZone: profile.timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
    } catch {
      format = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
    }

    const tick = () => setClock(`${format.format(new Date())} ${profile.utcOffsetLabel}`)
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return clock
}

export function Footer() {
  const { t } = useI18n()
  const clock = useBuenosAiresClock()

  return (
    <footer
      style={{
        padding: '26px clamp(16px, 4vw, 56px) 34px',
        borderTop: `1px solid ${c.lineSoft}`,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: mono,
        fontSize: 11.5,
        color: c.textFaint,
      }}
    >
      <span>{t.footer.built}</span>
      <span>{clock}</span>
    </footer>
  )
}
