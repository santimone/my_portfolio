import { useAppearance } from '../appearance/useAppearance'
import { useI18n } from '../i18n/useI18n'
import { c, mono } from '../theme'

/** Night (burnt wood, lit paper) ⇄ day (washi, pale hinoki). */
export function ThemeToggle() {
  const { mode, toggleMode } = useAppearance()
  const { t } = useI18n()
  const night = mode === 'night'

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={night ? t.appearance.toDay : t.appearance.toNight}
      title={night ? t.appearance.toDay : t.appearance.toNight}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        padding: '5px 10px',
        border: `1px solid ${c.line}`,
        borderRadius: 999,
        background: c.bgRaised,
        color: c.textDim,
        cursor: 'pointer',
        fontFamily: mono,
        fontSize: 11,
        letterSpacing: '0.06em',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
        {night ? (
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        )}
      </svg>
      <span className="theme-label">{night ? t.appearance.night : t.appearance.day}</span>
    </button>
  )
}
