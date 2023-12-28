import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button/Button'
import cls from './PageError.module.scss'
import { memo } from 'react'

interface PageErrorProps {
  className?: string
}

export const PageError: React.FC = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = (): void => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  return (
    <div className={classNames(cls.ErrorPage, {}, [className ?? ''])}>
      <p>{t('errorOccurs')}</p>
      <Button onClick={reloadPage}>
        {t('reloadPage')}
      </Button>
    </div>
  )
})

PageError.displayName = 'PageError'
