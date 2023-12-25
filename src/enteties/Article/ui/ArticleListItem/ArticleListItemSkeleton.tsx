import { ArticleView } from '../../model/consts/articleConsts'
import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Text from 'shared/ui/Text/Text'
import cls from './ArticleListItem.module.scss'
import Card from 'shared/ui/Card/Card'
import Skeleton from 'shared/ui/Skeleton/Skeleton'

interface ArticleListItemSkeletonProps {
  className?: string
  view?: ArticleView
}

const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(({
  className = '',
  view = ArticleView.SMALL
}: ArticleListItemSkeletonProps) => {
  const types = <Text className={cls.types} />

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
        <Card>
          <>
            <div className={cls.header}>
              <Skeleton border='50%' height='30px' width='30px' />
              <Skeleton width='160px' height='16px' className={cls.username} />
              <Skeleton width='15px' height='16px' className={cls.date} />
            </div>
            <Skeleton height='24px' width='250px' className={cls.title} />
            {types}
            <Skeleton height='200px' className={cls.img} />
            <div className={cls.footer}>
              <Skeleton height='36px' width='200px' className={cls.img} />
            </div>
          </>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
      <Card>
        <>
          <div className={cls.imageWrapper}>
            <Skeleton height='200px' width='200px' className={cls.img} />
            <Text className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width='130px' height='16px' />
            {types}
          </div>
          <Skeleton width='150px' height='16px' />
        </>
      </Card>
    </div>
  )
})

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton'

export default ArticleListItemSkeleton
