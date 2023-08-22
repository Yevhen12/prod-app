import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import 'app/styles/index.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: string
  square?: boolean
  size?: string
}

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square = false,
    size = ButtonSize.M,
    ...otherProps
  } = props

  const additionalClasses: string[] = [
    className ?? '',
    cls[theme],
    cls[size]
  ]
  const mods: Record<string, boolean> = {
    [cls.square]: square
  }

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, additionalClasses)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  )
}
