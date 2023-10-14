import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const Icon: FC<IconProps> = ({ className = '', Svg }) => {
  return (
    <Svg className={classNames(cls.icon, {}, [className])} />
  )
}

export default Icon
