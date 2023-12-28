import React, { FC, HTMLAttributes } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  theme?: CardTheme
  children: any
}

const Card: FC<CardProps> = ({ className = '', theme = CardTheme.NORMAL, children, ...otherProps }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames(cls.card, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </div>
  )
}

export default Card
