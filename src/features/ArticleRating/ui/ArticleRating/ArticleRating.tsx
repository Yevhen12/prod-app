import { RatingCard } from '@/enteties/Rating'
import { getUserAuthData } from '@/enteties/User'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'

export interface ArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating: FC<ArticleRatingProps> = ({ className = '', articleId }) => {
  const { t } = useTranslation()
  const userId = useSelector(getUserAuthData)?.id
  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userId ?? ''
  })
  const [rateArticleMutation] = useRateArticle()

  const rating = data?.[0]

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userId ?? '',
        articleId,
        rate: starsCount,
        feedback
      })
    } catch (err) {
      console.log('err', err)
    }
  }, [articleId, rateArticleMutation, userId])

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount)
  }, [handleRateArticle])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback)
  }, [handleRateArticle])

  if (isLoading) {
    return <Skeleton width='100%' height='120px' />
  }

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      title={t('evaluateArticle')}
      feedbackTitle={t('leaveFeedback')}
      hasFeedback
    />
  )
}

export default ArticleRating
