import { Theme } from '@/shared/const/theme';
import React, {
  type FC,
  type PropsWithChildren,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/enteties/User';

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = (props) => {
  const { children, initialTheme } = props;
  const jsonUserSettigns = useJsonSettings();
  console.log('jsonUserSettigns', jsonUserSettigns);
  const { theme: defaultTheme = Theme.LIGHT } = jsonUserSettigns;
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);
  const [isThemeInited, setIsThemeInited] = useState(false);

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

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
