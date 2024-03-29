import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import '@/app/styles/index.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
  square?: boolean;
  size?: string;
  disabled?: boolean;
  fullwidth?: boolean;
}

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square = false,
    size = ButtonSize.M,
    disabled = false,
    fullwidth = false,
    ...otherProps
  } = props;

  const additionalClasses: string[] = [className ?? '', cls[theme], cls[size]];
  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullwidth]: fullwidth,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, additionalClasses)}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
