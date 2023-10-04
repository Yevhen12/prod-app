import { FC } from 'react'
// import { useTranslation } from 'react-i18next'
// import cls from './ArticlePage.module.scss'

export interface ArticlePageProps {
  className?: string
}

const ArticlePage: FC<ArticlePageProps> = ({ className }) => {
  // const { t } = useTranslation()
  return (
    <div>
      ArticlePage
    </div>
  )
}

export default ArticlePage
