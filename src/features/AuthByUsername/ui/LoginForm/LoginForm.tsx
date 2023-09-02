import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Input from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <form className={cls.loginForm}>
      <Input
        type='text'
        className={cls.input}
        placeholder={t('username')}
        autofocus
      />
      <Input
        type='text'
        className={cls.input}
        placeholder={t('password')}
      />
      <button
        onClick={() => { console.log('Logged in') }}
        className={cls.loginBtn}
      >

        {t('signIn')}
      </button>
    </form>
  )
}

export default LoginForm
