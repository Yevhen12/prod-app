/* eslint-disable indent */
import { ThemeContext } from '../context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
import { Theme } from '@/shared/const/theme'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme | undefined
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    if (setTheme != null) {
      let newTheme: Theme
      switch (theme) {
        case Theme.DARK:
          newTheme = Theme.LIGHT
          break
        case Theme.LIGHT:
          newTheme = Theme.ORANGE
          break
        case Theme.ORANGE:
          newTheme = Theme.DARK
          break
        default:
          newTheme = Theme.LIGHT
      }
      setTheme(newTheme)
      document.body.className = newTheme
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
  }

  return {
    theme,
    toggleTheme
  }
}
