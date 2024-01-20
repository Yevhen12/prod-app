import { ArticleTextBlock } from '@/enteties/Article'
import { FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import Text from '@/shared/ui/Text/Text'
import cls from './ArticleTextBlockComponent.module.scss'
// import { useTranslation } from 'react-i18next'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo(({ className = '', block }: ArticleTextBlockComponentProps) => {
  // const { t } = useTranslation()
  return (
    <div className={classNames(cls.articleTextBlock, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cls.title} />
      )}
      {block.paragraphs.map((paragraph, idx) => {
        return (
          <Text key={idx} text={paragraph} className={cls.paragraph} />
        )
      })}
    </div>
  )
})

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent'

export default ArticleTextBlockComponent
