import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { I18nContext, type I18nValue } from './context'
import { detectLang, storeLang, type LangSource } from './detect'
import { en } from './en'
import { es } from './es'
import type { Lang } from './types'

const dictionaries = { en, es }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ lang: Lang; source: LangSource }>(detectLang)

  const setLang = useCallback((lang: Lang) => {
    storeLang(lang)
    setState({ lang, source: 'stored' })
  }, [])

  const value = useMemo<I18nValue>(() => {
    const t = dictionaries[state.lang]
    return {
      lang: state.lang,
      t,
      source: state.source,
      setLang,
      toggleLang: () => setLang(state.lang === 'en' ? 'es' : 'en'),
    }
  }, [state, setLang])

  // Keep the document itself in the right language: screen readers, translation
  // prompts and search engines all read these rather than the rendered text.
  useEffect(() => {
    const { lang, t } = value
    document.documentElement.lang = lang
    document.title = t.meta.title

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.appendChild(description)
    }
    description.content = t.meta.description
  }, [value])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
