import { FC } from 'react'
// import cls from './ArticleTextBlockComponent.module.scss'
// import { useTranslation } from 'react-i18next'

interface ArticleTextBlockComponentProps {
  className?: string
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({ className }) => {
  // const { t } = useTranslation()
  return (
    <div>
      ArticleTextBlockComponent
    </div>
  )
}

export default ArticleTextBlockComponent
