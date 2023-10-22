import { FC } from 'react'
import { ArticleDetails } from 'enteties/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Text from 'shared/ui/Text/Text'
import { CommentList } from 'enteties/Comment'
import cls from './ArticleDetailsPage.module.scss'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getCommentArticleIsLoading } from '../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
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

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  console.log('comments', comments)

  if (!id) {
    return (
      <div>
        {t('articleNotFound')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('comments')} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  )
}

export default ArticleDetailsPage
