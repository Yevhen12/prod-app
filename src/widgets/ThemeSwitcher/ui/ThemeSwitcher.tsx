import { memo, type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { ButtonTheme, Button } from '@/shared/ui/Button/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(
  ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
      <Button
        className={classNames('', {}, [className ?? ''])}
        onClick={toggleTheme}
        theme={ButtonTheme.CLEAR}
      >
        {theme === Theme.DARK ? (
          <DarkIcon width={40} />
        ) : (
          <LightIcon width={40} />
        )}
      </Button>
    );
  },
);

ThemeSwitcher.displayName = 'ThemeSwitcher';
