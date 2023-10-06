import { FC } from 'react'
// import cls from './ArticleCodeBlockComponent.module.scss'
// import { useTranslation } from 'react-i18next'

interface ArticleCodeBlockComponentProps {
  className?: string
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ className }) => {
  // const { t } = useTranslation()
  return (
    <div>
      ArticleCodeBlockComponent
    </div>
  )
}

export default ArticleCodeBlockComponent
