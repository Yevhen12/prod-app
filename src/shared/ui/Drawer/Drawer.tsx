import { classNames, Mods } from 'shared/lib/classNames/classNames'
import React, { memo, ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import Overlay from '../Overlay/Overlay'
import Portal from '../Portal/Portal'
import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const Drawer = memo((props: DrawerProps) => {
  const {
    className = '',
    children,
    onClose,
    isOpen
  } = props
  const { theme } = useTheme()

  const mods: Mods = {
    [cls.opened]: Boolean(isOpen)
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme ?? '', 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div
          className={cls.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  )
})

Drawer.displayName = 'Drawer'

export default Drawer
