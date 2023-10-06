import { FC } from 'react'
import { ArticleDetails } from 'enteties/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// import cls from './ArticleDetailsPage.module.scss'

export interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div>
        {t('articleNotFound')}
      </div>
    )
  }
  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  )
}

export default ArticleDetailsPage
