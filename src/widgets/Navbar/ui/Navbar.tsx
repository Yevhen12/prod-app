import { LoginModal } from 'features/AuthByUsername'
import React, { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import cls from './Navbar.module.scss'
import { getUserAuthData, userActions } from 'enteties/User'
import { AppDispatch } from 'app/providers/StoreProvider'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch<AppDispatch>()

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onLogOut = useCallback(() => {
    dispatch(userActions.logOut())
  }, [dispatch])

  console.log('authData', authData)

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className ?? ''])}>
        <Text text='Production application' theme={TextTheme.INVERTED} className={cls.appName} />
        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
          {t('createArticle')}
        </AppLink>
        <Button
          className={cls.links}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogOut}
        >
          {t('signOut')}
        </Button>
      </header>
    )
  }

  return (
    <header className={classNames(cls.navbar, {}, [className ?? ''])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onOpenModal}
      >
        {t('signIn')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  )
})

Navbar.displayName = 'Navbar'
