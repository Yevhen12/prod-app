import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import cls from './Flex.module.scss'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween
}

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32
}

export interface FlexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  gap?: FlexGap
  max?: boolean
}

const Flex: FC<FlexProps> = ({
  className = '',
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap = '8',
  max,
  ...otherProps
}) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap]
  ]

  const mods: Mods = {
    [cls.max]: Boolean(max)
  }
  return (
    <div className={classNames(cls.flex, mods, classes)} {...otherProps}>
      {children}
    </div>
  )
}

export default Flex
