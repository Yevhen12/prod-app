/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleList } from 'enteties/Article'
import Text, { TextSize } from 'shared/ui/Text/Text'
import { VStack } from 'shared/ui/Stack'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
  className?: string
}

const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className = '' } = props
  const { t } = useTranslation()
  const { isLoading, error, data: articles } = useArticleRecommendationsList(3)

  if (error || isLoading || !articles) {
    return null
  }

  return (
    <VStack gap='8' className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('recommended')} />
      <ArticleList
        articles={articles}
        virtualized={false}
        // isLoading={isLoading}
        target='_blank'
      />
    </VStack>
  )
})

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList'

export default ArticleRecommendationsList
