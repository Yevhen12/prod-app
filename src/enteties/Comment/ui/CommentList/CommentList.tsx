/* eslint-disable indent */
import { Comment } from 'enteties/Comment'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import Text from 'shared/ui/Text/Text'
import CommentCard from '../CommentCard/CommentCard'
import cls from './CommentList.module.scss'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

const CommentList: FC<CommentListProps> = ({ className = '', comments, isLoading }) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length
        ? (
            comments.map(el => <CommentCard isLoading={isLoading} key={el.id} comment={el} className={cls.comment} />)
          )
        : (
          <Text text={t('noComments')} />
          )}
    </div>
  )
}

export default CommentList
