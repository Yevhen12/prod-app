import { CommentList } from '@/enteties/Comment'
import { AddCommentForm, getAddCommentFormText } from '@/features/AddCommentForm'
import { t } from 'i18next'
import { getCommentArticleIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import Text, { TextSize } from '@/shared/ui/Text/Text'
import { VStack } from '@/shared/ui/Stack'

interface ArticleDetailsCommentsProps {
  className?: string
  id: string
}

const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = ({ className, id }) => {
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getCommentArticleIsLoading)
  const commentText = useSelector(getAddCommentFormText)

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  const onSendComment = useCallback(() => {
    dispatch(addCommentForArticle(commentText))
  }, [dispatch, commentText])
  return (
    <VStack max gap='16'>
      <Text size={TextSize.L} title={t('comments')} />
      <AddCommentForm onSendComment={onSendComment} text={commentText} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  )
}

export default ArticleDetailsComments
