import React, { FC, HTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactElement
}

const Card: FC<CardProps> = ({ className = '', children, ...otherProps }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames(cls.card, {}, [className])} {...otherProps}>
      {children}
    </div>
  )
}

export default Card
