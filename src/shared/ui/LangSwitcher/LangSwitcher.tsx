import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

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
      className={classNames('', {}, [className ?? ''])}
      onClick={toggle}
    >
      {t('language')}
    </Button>
  )
}
