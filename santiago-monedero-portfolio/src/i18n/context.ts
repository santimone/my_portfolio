import { createContext } from 'react'
import type { LangSource } from './detect'
import type { Dict, Lang } from './types'

export interface I18nValue {
  lang: Lang
  /** the active dictionary */
  t: Dict
  /** how the current language was chosen */
  source: LangSource
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

export const I18nContext = createContext<I18nValue | null>(null)
