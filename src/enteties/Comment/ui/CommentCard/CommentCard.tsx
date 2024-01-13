import { Comment } from '@/enteties/Comment'
import { FC } from 'react'
// import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import Avatar from '@/shared/ui/Avatar/Avatar'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import { VStack } from '@/shared/ui/Stack'
import Text from '@/shared/ui/Text/Text'
import cls from './CommentCard.module.scss'
import { RoutePath } from '@/shared/const/router'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

const CommentCard: FC<CommentCardProps> = ({ className = '', comment, isLoading }) => {
  // const { t } = useTranslation()

  if (isLoading) {
    return (
      <VStack max gap='8' className={classNames(cls.commentCard, {}, [className, cls.loading])}>
        <AppLink to={`${RoutePath.profile}/${comment?.user.id}`} className={cls.header}>
          <Skeleton width='30px' height='30px' border='50%' />
          <Skeleton height='16px' width='100px' className={cls.username} />
        </AppLink>
        <Skeleton width='100%' height='50px' className={cls.text} />
      </VStack>
    )
  }

  return (
    <VStack gap='8' max className={classNames(cls.commentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
        {comment?.user?.avatar ? <Avatar size={30} src={comment?.user?.avatar} /> : null}
        <Text className={cls.username} title={comment?.user?.username} />
      </AppLink>
      <Text className={cls.text} text={comment?.text} />
    </VStack >
  )
}

export default CommentCard
