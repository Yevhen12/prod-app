/* eslint-disable indent */
import { Comment } from 'enteties/Comment'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { VStack } from 'shared/ui/Stack'
import Text from 'shared/ui/Text/Text'
import CommentCard from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

const CommentList: FC<CommentListProps> = ({ className = '', comments, isLoading }) => {
  const { t } = useTranslation()
  if (isLoading) {
    return (
      <VStack gap='16' className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    )
  }

  if (!comments) {
    return null
  }

  return (
    <VStack gap='16' max className={classNames('', {}, [className])}>
      {comments?.length
        ? (
            comments.map(el => <CommentCard isLoading={isLoading} key={el.id} comment={el} />)
          )
        : (
          <Text text={t('noComments')} />
          )}
    </VStack>
  )
}

export default CommentList
