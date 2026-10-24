import { useContext } from 'react'
import { AppearanceContext, type AppearanceValue } from './context'

export function useAppearance(): AppearanceValue {
  const ctx = useContext(AppearanceContext)
  if (!ctx) throw new Error('useAppearance must be used inside <AppearanceProvider>')
  return ctx
}
