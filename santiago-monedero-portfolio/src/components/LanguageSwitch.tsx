import { useI18n } from '../i18n/useI18n'
import type { Lang } from '../i18n/types'
import { c, mono, tab } from '../theme'

const OPTIONS: Lang[] = ['en', 'es']

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
        gap: 2,
        padding: 3,
        border: `1px solid ${c.line}`,
        borderRadius: 999,
        background: c.bgRaised,
      }}
    >
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          aria-pressed={lang === option}
          onClick={() => setLang(option)}
          title={option === 'en' ? 'English' : 'Español'}
          style={{
            padding: '5px 10px',
            borderRadius: 999,
            border: 'none',
            cursor: 'pointer',
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: '0.06em',
            ...tab(lang === option),
          }}
        >
          {t.lang[option]}
        </button>
      ))}
    </div>
  )
}
