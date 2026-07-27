import type { Lang } from './types'

const STORAGE_KEY = 'sm.portfolio.lang'

export type LangSource = 'stored' | 'query' | 'navigator' | 'timezone' | 'default'

export interface Detection {
  lang: Lang
  source: LangSource
}

/**
 * Time zones that imply a Spanish-speaking visitor.
 * Using the browser's IANA zone keeps location detection local — no geo-IP
 * request, nothing to consent to, and it still works behind a VPN-less
 * corporate proxy or offline.
 */
const SPANISH_ZONES = new Set([
  // Spain
  'Europe/Madrid',
  'Africa/Ceuta',
  'Atlantic/Canary',
  // Argentina (all the America/Argentina/* zones plus the legacy aliases)
  'America/Buenos_Aires',
  'America/Argentina/Buenos_Aires',
  'America/Argentina/Catamarca',
  'America/Argentina/ComodRivadavia',
  'America/Argentina/Cordoba',
  'America/Argentina/Jujuy',
  'America/Argentina/La_Rioja',
  'America/Argentina/Mendoza',
  'America/Argentina/Rio_Gallegos',
  'America/Argentina/Salta',
  'America/Argentina/San_Juan',
  'America/Argentina/San_Luis',
  'America/Argentina/Tucuman',
  'America/Argentina/Ushuaia',
  'America/Catamarca',
  'America/Cordoba',
  'America/Jujuy',
  'America/Mendoza',
  'America/Rosario',
  // rest of Latin America
  'America/Asuncion',
  'America/Bogota',
  'America/Cancun',
  'America/Caracas',
  'America/Chihuahua',
  'America/Costa_Rica',
  'America/Ciudad_Juarez',
  'America/El_Salvador',
  'America/Guatemala',
  'America/Guayaquil',
  'America/Havana',
  'America/Hermosillo',
  'America/La_Paz',
  'America/Lima',
  'America/Managua',
  'America/Matamoros',
  'America/Mazatlan',
  'America/Merida',
  'America/Mexico_City',
  'America/Monterrey',
  'America/Montevideo',
  'America/Ojinaga',
  'America/Panama',
  'America/Puerto_Rico',
  'America/Punta_Arenas',
  'America/Santiago',
  'America/Santo_Domingo',
  'America/Tegucigalpa',
  'America/Tijuana',
  'Pacific/Easter',
  'Pacific/Galapagos',
])

/** ISO-3166 regions where Spanish is the dominant language. */
const SPANISH_REGIONS = new Set([
  'AR',
  'BO',
  'CL',
  'CO',
  'CR',
  'CU',
  'DO',
  'EC',
  'ES',
  'GQ',
  'GT',
  'HN',
  'MX',
  'NI',
  'PA',
  'PE',
  'PR',
  'PY',
  'SV',
  'UY',
  'VE',
])

const isLang = (v: unknown): v is Lang => v === 'en' || v === 'es'

export function readStoredLang(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return isLang(v) ? v : null
  } catch {
    // private mode / storage disabled — fall through to detection
    return null
  }
}

export function storeLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // nothing to do; the choice just won't survive a reload
  }
}

/** `?lang=es` wins over detection, which makes links shareable and testing trivial. */
function queryLang(): Lang | null {
  try {
    const v = new URLSearchParams(window.location.search).get('lang')?.toLowerCase()
    return isLang(v) ? v : null
  } catch {
    return null
  }
}

/**
 * The visitor's own language preference list. An explicit `en-*` or `es-*`
 * beats any location guess — someone in Buenos Aires running an English OS
 * asked for English.
 */
function navigatorLang(): Lang | null {
  const list = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const raw of list) {
    const tag = raw?.toLowerCase()
    if (!tag) continue
    if (tag.startsWith('es')) return 'es'
    if (tag.startsWith('en')) return 'en'
  }
  return null
}

/** Location guess: IANA time zone first, then the region subtag of the resolved locale. */
function locationLang(): Lang | null {
  try {
    const resolved = Intl.DateTimeFormat().resolvedOptions()

    if (resolved.timeZone && SPANISH_ZONES.has(resolved.timeZone)) return 'es'

    const region = resolved.locale?.split('-').find((part) => /^[A-Z]{2}$/.test(part))
    if (region && SPANISH_REGIONS.has(region)) return 'es'

    // A recognised zone that is not on the Spanish list is a positive signal for English.
    if (resolved.timeZone) return 'en'
  } catch {
    return null
  }
  return null
}

/**
 * Resolution order: saved choice → ?lang= → browser language → location → English.
 */
export function detectLang(): Detection {
  const stored = readStoredLang()
  if (stored) return { lang: stored, source: 'stored' }

  const query = queryLang()
  if (query) return { lang: query, source: 'query' }

  const nav = navigatorLang()
  if (nav) return { lang: nav, source: 'navigator' }

  const loc = locationLang()
  if (loc) return { lang: loc, source: 'timezone' }

  return { lang: 'en', source: 'default' }
}
