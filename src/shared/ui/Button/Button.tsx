import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: string
}

export enum ButtonTheme {
  CLEAR = 'clear'
}

export const Button: FC<ButtonProps> = ({ className, children, theme = ButtonTheme.CLEAR, ...otherProps }) => {
  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [className ?? '', cls[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  )
}
