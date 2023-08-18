import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}
const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={cls.notFoundPage}>
      {t('notFoundPage')}
    </div>
  )
}

export default NotFoundPage
