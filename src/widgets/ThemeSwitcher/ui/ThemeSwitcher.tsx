import { memo, type FC, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { ButtonTheme, Button } from '@/shared/ui/Button/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/const/theme';
import { saveJsonSettings } from '@/enteties/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(
  ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
      toggleTheme((newTheme) => {
        console.log('theme was changed on ', newTheme);
        dispatch(saveJsonSettings({ theme: newTheme }));
      });
    }, [toggleTheme, dispatch]);

    return (
      <Button
        className={classNames('', {}, [className ?? ''])}
        onClick={onToggleHandler}
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
