import React, { type FC, type PropsWithChildren, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(localStorageTheme)

  const themeValues = useMemo(() => ({
    theme,
    setTheme
  }), [theme, setTheme])

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
