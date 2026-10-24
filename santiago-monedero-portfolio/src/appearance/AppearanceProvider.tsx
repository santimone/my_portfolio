import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { AppearanceContext, MODE_STORAGE_KEY, type AppearanceValue, type Mode } from './context'

/** Browser chrome colour per mode, matching --bg in index.css. */
const THEME_COLOR: Record<Mode, string> = { night: '#151210', day: '#f3ede2' }

/**
 * Night is the site's identity, so it is the default for everyone; day is an
 * explicit choice and is remembered. The inline script in index.html has
 * already set data-theme before React runs, so the first paint is right.
 */
function readMode(): Mode {
  try {
    return localStorage.getItem(MODE_STORAGE_KEY) === 'day' ? 'day' : 'night'
  } catch {
    return 'night'
  }
}

export function AppearanceProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>(readMode)

  const setMode = useCallback((next: Mode) => {
    try {
      localStorage.setItem(MODE_STORAGE_KEY, next)
    } catch {
      // storage disabled — the choice just won't survive a reload
    }
    setModeState(next)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = mode
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[mode])
  }, [mode])

  const value = useMemo<AppearanceValue>(
    () => ({ mode, setMode, toggleMode: () => setMode(mode === 'night' ? 'day' : 'night') }),
    [mode, setMode],
  )

  return <AppearanceContext.Provider value={value}>{children}</AppearanceContext.Provider>
}
