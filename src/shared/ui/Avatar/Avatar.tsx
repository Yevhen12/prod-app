import { CSSProperties, FC, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src: string
  alt?: string
  size?: number
}

const Avatar: FC<AvatarProps> = ({
  className = '',
  src,
  alt = 'somePhoto',
  size = 40
}) => {
  const mods: Mods = {}
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size
    }
  }, [size])
  return (
    <img
      className={classNames(cls.avatar, mods, [className])}
      src={src}
      alt={alt}
      style={styles}
    />
  )
}

export default Avatar
