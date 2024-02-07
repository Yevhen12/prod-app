import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';
import React, {
  type FC,
  type PropsWithChildren,
  useMemo,
  useState,
} from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

  const themeValues = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
