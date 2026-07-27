import { useI18n } from '../i18n/useI18n'
import { c, mono, tab } from '../theme'

export type Treatment = 'boot' | 'statement' | 'field'

const OPTIONS: Treatment[] = ['boot', 'statement', 'field']

/** Lets a visitor flip between the three hero designs. */
export function TreatmentSwitcher({
  value,
  onChange,
}: {
  value: Treatment
  onChange: (t: Treatment) => void
}) {
  const { t } = useI18n()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0 16px 8px' }}>
      <div
        role="tablist"
        aria-label={t.treatments.label}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: 5,
          border: `1px solid ${c.line}`,
          borderRadius: 999,
          background: c.bgRaised,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: mono,
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: c.textFaint,
            padding: '0 10px',
          }}
        >
          {t.treatments.label}
        </span>
        {OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={value === option}
            onClick={() => onChange(option)}
            style={{
              padding: '6px 14px',
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              fontFamily: mono,
              fontSize: 12,
              ...tab(value === option),
            }}
          >
            {t.treatments[option]}
          </button>
        ))}
      </div>
    </div>
  )
}
