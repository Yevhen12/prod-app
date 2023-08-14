import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className ?? ''])}>
      <div className={cls.links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Main</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
      </div>
    </div>
  )
}
