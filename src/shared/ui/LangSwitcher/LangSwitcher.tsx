import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { i18n, t } = useTranslation()

  const toggle = (): void => {
    void i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua')
  }

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className ?? ''])}
      onClick={toggle}
    >
      {t('language')}
    </Button>
  )
}
