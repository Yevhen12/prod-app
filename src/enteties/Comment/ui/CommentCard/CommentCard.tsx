import { Comment } from 'enteties/Comment'
import { FC } from 'react'
// import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import Avatar from 'shared/ui/Avatar/Avatar'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import Text from 'shared/ui/Text/Text'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

const CommentCard: FC<CommentCardProps> = ({ className = '', comment, isLoading }) => {
  // const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width='30px' height='30px' border='50%' />
          <Skeleton height='16px' width='100px' className={cls.username} />
        </div>
        <Skeleton width='100%' height='50px' className={cls.text} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        {comment?.user?.avatar ? <Avatar size={30} src={comment?.user?.avatar} /> : null}
        <Text className={cls.username} title={comment?.user?.username} />
      </div>
      <Text className={cls.text} text={comment?.text} />
    </div>
  )
}

export default CommentCard
