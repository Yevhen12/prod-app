import { useState, useRef, useEffect, useCallback } from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export const useModal = ({
  onClose,
  isOpen,
  animationDelay,
}: UseModalProps) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen, setIsMounted]);

  const closeModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return {
    isClosing,
    isMounted,
    closeModal,
  };
};
