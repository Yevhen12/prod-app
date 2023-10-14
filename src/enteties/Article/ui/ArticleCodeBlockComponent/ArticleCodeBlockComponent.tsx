import { ArticleCodeBlock } from 'enteties/Article/model/types/article'
import { FC, memo } from 'react'
import Code from 'shared/ui/Code/Code'
// import cls from './ArticleCodeBlockComponent.module.scss'
// import { useTranslation } from 'react-i18next'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo(({ className, block }: ArticleCodeBlockComponentProps) => {
  // const { t } = useTranslation()
  return (
    <div>
      <Code text= {block.code} />
    </div>
  )
})

ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent'

export default ArticleCodeBlockComponent
