import { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

const Icon: FC<IconProps> = ({ className = '', Svg, inverted = false }) => {
  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])} />
  )
}

export default Icon
