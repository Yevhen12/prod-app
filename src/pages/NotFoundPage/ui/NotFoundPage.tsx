import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}
const NotFoundPage: FC<NotFoundPageProps> = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
    <div className={cls.notFoundPage}>
      {t('notFoundPage')}
    </div>
  )
})

NotFoundPage.displayName = 'NotFoundPage'

export default NotFoundPage
