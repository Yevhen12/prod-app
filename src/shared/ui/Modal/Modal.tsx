import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
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
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen, setIsMounted])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  const closeModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose, setIsClosing])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }, [closeModal])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  if (lazy && !isMounted) {
    return null
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
