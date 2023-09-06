import React, { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import Input from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export interface LoginFormProps {
  className?: string
  closeModal?: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm: FC<LoginFormProps> = memo(({ closeModal }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((val: string) => {
    dispatch(loginActions.setUsername(val))
  }, [dispatch])

  const onChangePassword = useCallback((val: string) => {
    dispatch(loginActions.setPassword(val))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      if (closeModal) {
        closeModal()
      }
      dispatch(loginActions.reset())
    }
  }, [closeModal, dispatch, password, username])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm
