import { useI18n } from '../i18n/useI18n'
import type { Lang } from '../i18n/types'
import { c, mono } from '../theme'
import { FlagEn, FlagEs } from './Flags'

const OPTIONS: { lang: Lang; flag: () => React.ReactElement; title: string }[] = [
  { lang: 'en', flag: FlagEn, title: 'English' },
  { lang: 'es', flag: FlagEs, title: 'Español' },
]

/**
 * EN / ES toggle. The initial value is guessed from the visitor's browser
 * language and time zone (see i18n/detect.ts); clicking here overrides that
 * guess and the choice is remembered.
 */
export function LanguageSwitch() {
  const { lang, setLang, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.lang.switchLabel}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        padding: 3,
        border: `1px solid ${c.line}`,
        borderRadius: 999,
        background: c.bgRaised,
      }}
    >
      {OPTIONS.map(({ lang: option, flag: Flag, title }) => {
        const on = lang === option
        return (
          <button
            key={option}
            type="button"
            lang={option}
            aria-pressed={on}
            // named here too, because the code label is hidden on tiny screens
            aria-label={title}
            onClick={() => setLang(option)}
            title={title}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 9px',
              borderRadius: 999,
              cursor: 'pointer',
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '0.06em',
              // the selected flag stays in full colour; the other one recedes
              border: `1px solid ${on ? 'oklch(0.82 0.15 152 / 0.55)' : 'transparent'}`,
              background: on ? 'oklch(0.82 0.15 152 / 0.14)' : 'transparent',
              color: on ? c.acc : c.textDim,
              filter: on ? 'none' : 'saturate(0.35) opacity(0.65)',
              transition: 'background 160ms ease, border-color 160ms ease, filter 160ms ease',
            }}
          >
            <Flag />
            <span className="lang-code">{t.lang[option]}</span>
          </button>
        )
      })}
    </div>
  )
}
