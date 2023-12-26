import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/lib/hooks/useModal'
import Overlay from '../Overlay/Overlay'
import Portal from '../Portal/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  width?: string
  lazy?: boolean
}
const ANIMATION_DELAY = 200

const Modal: FC<ModalProps> = (props) => {
  const {
    children,
    className = '',
    isOpen = false,
    onClose,
    width = 'auto',
    lazy
  } = props

  const { isClosing, isMounted, closeModal } = useModal({ onClose, isOpen, animationDelay: ANIMATION_DELAY })

  if (lazy && !isMounted) {
    return null
  }

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  return (
    <Portal element={document.getElementById('app') ?? undefined}>
      <div className={classNames(cls.modal, mods, [className])}>
        <Overlay onClick={closeModal} className={cls.overlay} />
        <div style={{ width }} className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
