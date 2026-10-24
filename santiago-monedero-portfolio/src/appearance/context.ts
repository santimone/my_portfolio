import { createContext } from 'react'

export type Mode = 'night' | 'day'

export interface AppearanceValue {
  mode: Mode
  setMode: (mode: Mode) => void
  toggleMode: () => void
}

export const AppearanceContext = createContext<AppearanceValue | null>(null)

/** Shared with the inline script in index.html, which applies it before first paint. */
export const MODE_STORAGE_KEY = 'sm.portfolio.theme'
