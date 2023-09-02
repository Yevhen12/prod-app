import { FC } from 'react'
import Modal from 'shared/ui/Modal/Modal'
import LoginForm from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
