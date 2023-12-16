import { FC, useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'enteties/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Text, { TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'enteties/Comment'
import cls from './ArticleDetailsPage.module.scss'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import Page from 'widgets/Page/ui/Page'
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationSlice'
import { getArticleDetailsPageRecommendationIsLoading } from '../../model/selectors/recommendations'
import { getCommentArticleIsLoading } from '../../model/selectors/comments'
import { getAddCommentFormText } from 'features/AddCommentForm/model/selectors/addCommentFormSelectors'
import { fetchArticleRecommendation } from '../../model/services/fetchArticleRecommendation/fetchArticleRecommendation'
import { articleDetailsPageReducer } from '../../model/slices'
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { VStack } from 'shared/ui/Stack'

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

export interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getCommentArticleIsLoading)
  const commentText = useSelector(getAddCommentFormText)
  const recommendation = useSelector(getArticleRecommendations.selectAll)
  const recommendationIsLoading = useSelector(getArticleDetailsPageRecommendationIsLoading)
  // const recommendationError = useSelector(getArticleDetailsPageRecommendationError)

  useInitialEffect(() => {
    dispatch(fetchArticleRecommendation())
    dispatch(fetchCommentsByArticleId(id))
  })

  const onSendComment = useCallback(() => {
    dispatch(addCommentForArticle(commentText))
  }, [dispatch, commentText])

  console.log('comments', comments)

  if (!id) {
    return (
      <Page>
        {t('articleNotFound')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <VStack gap='16' max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Text size={TextSize.L} className={cls.commentTitle} title={t('recommended')} />
          <ArticleList className={cls.recommendations} articles={recommendation} isLoading={recommendationIsLoading} target='_blank' />
          <Text size={TextSize.L} className={cls.commentTitle} title={t('comments')} />
          <AddCommentForm onSendComment={onSendComment} text={commentText} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticleDetailsPage
