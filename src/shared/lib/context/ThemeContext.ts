import { Theme } from '@/shared/const/theme';
import { createContext } from 'react';

export interface IThemeContext {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({});
