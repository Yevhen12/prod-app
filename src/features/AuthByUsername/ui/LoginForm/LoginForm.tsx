import React, { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { loginActions } from '../../model/slice/loginSlice'
import Input from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { LoginSchema } from 'features/AuthByUsername/model/types/loginShema'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import { AppDispatch } from 'app/providers/StoreProvider'

interface LoginFormProps {
  className?: string
  closeModal?: () => void
}

const LoginForm: FC<LoginFormProps> = memo(({ closeModal }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const { username, password, error, isLoading } = useSelector(getLoginState) as LoginSchema

  const onChangeUsername = useCallback((val: string) => {
    dispatch(loginActions.setUsername(val))
  }, [dispatch])

  const onChangePassword = useCallback((val: string) => {
    dispatch(loginActions.setPassword(val))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    await dispatch(loginByUsername({ username, password }))
    // console.log('error', error)
    // console.log('isLoading', isLoading)
    // console.log('result', result)
    // if (!error && !isLoading) {
    //   if (closeModal) {
    //     closeModal()
    //   }
    //   dispatch(loginActions.reset())
    // }
  }, [dispatch, password, username])

  console.log('121212121212', error)
  return (
    <form className={cls.loginForm}>
      <Text text={t('authorizationForm')} />
      {error &&
        <Text
          text={error}
          theme={TextTheme.ERROR}
        />
      }
      <Input
        type='text'
        className={cls.input}
        placeholder={t('username')}
        onChange={onChangeUsername}
        value={username}
        autofocus
      />
      <Input
        type='text'
        className={cls.input}
        placeholder={t('password')}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={onLoginClick}
        className={cls.loginBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        disabled={isLoading}
      >

        {t('signIn')}
      </Button>
    </form>
  )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm
