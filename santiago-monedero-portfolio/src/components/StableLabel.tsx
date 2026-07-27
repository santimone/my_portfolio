import { en } from '../i18n/en'
import { es } from '../i18n/es'
import { useI18n } from '../i18n/useI18n'
import type { Dict } from '../i18n/types'

/**
 * Renders a label that occupies the same width in both languages, so switching
 * EN↔ES doesn't shove the header around ("services" → "servicios" is four
 * characters wider, and every item to its right used to jump).
 *
 * Both strings are stacked in a single grid cell: the cell sizes to the wider
 * one, and the inactive copy is hidden with `visibility`, which keeps its box
 * but drops it from the accessibility tree.
 */
export function StableLabel({ pick }: { pick: (d: Dict) => string }) {
  const { lang } = useI18n()

  return (
    <span style={{ display: 'inline-grid', whiteSpace: 'nowrap' }}>
      <span
        style={{
          gridArea: '1 / 1',
          visibility: lang === 'en' ? 'visible' : 'hidden',
          justifySelf: 'center',
        }}
      >
        {pick(en)}
      </span>
      <span
        style={{
          gridArea: '1 / 1',
          visibility: lang === 'es' ? 'visible' : 'hidden',
          justifySelf: 'center',
        }}
      >
        {pick(es)}
      </span>
    </span>
  )
}
