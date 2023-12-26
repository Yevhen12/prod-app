import { classNames } from 'shared/lib/classNames/classNames'
import { memo, ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import Overlay from '../Overlay/Overlay'
import Portal from '../Portal/Portal'
import cls from './Drawer.module.scss'
import { useModal } from 'shared/lib/hooks/useModal'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const Drawer = memo((props: DrawerProps) => {
  const {
    className = '',
    children,
    onClose,
    isOpen,
    lazy = false
  } = props
  const { theme } = useTheme()
  const { isClosing, isMounted, closeModal } = useModal({ onClose, isOpen, animationDelay: 300 })

  if (lazy && !isMounted) {
    return null
  }

  const mods: Record<string, boolean> = {
    [cls.opened]: Boolean(isOpen),
    [cls.isClosing]: isClosing
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme ?? '', 'app_drawer'])}>
        <Overlay onClick={closeModal} />
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
