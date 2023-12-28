import { Article, ArticleTextBlock } from '../../model/types/article'
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts'
import { FC, HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import Icon from '@/shared/ui/Icon/Icon'
import Text from '@/shared/ui/Text/Text'
import cls from './ArticleListItem.module.scss'
import EyeIcon from '@/shared/assets/icons/eye-outlined.svg'
import Card from '@/shared/ui/Card/Card'
import Avatar from '@/shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { AppLink } from '@/shared/ui/AppLink/AppLink'

interface ArticleListItemProps {
  className?: string
  article: Article
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const ArticleListItem: FC<ArticleListItemProps> = memo(({
  className = '',
  article,
  view = ArticleView.SMALL,
  target
}: ArticleListItemProps) => {
  const { t } = useTranslation()

  const types = <Text text={article.type.join(', ')} className={cls.types} />
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

    return (
      <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
        <Card>
          <>
            <div className={cls.header}>
              <Avatar size={30} src={article.user.avatar} />
              <Text text={article.user.username} className={cls.username} />
              <Text text={article.createdAt} className={cls.date} />
            </div>
            <Text text={article.title} className={cls.title} />
            {types}
            <img src={article.img} alt={article.title} className={cls.img} />
            {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
            <div className={cls.footer}>
              <AppLink to={RoutePath.articles_details + article.id} target={target}>
                <Button theme={ButtonTheme.OUTLINE}>
                  {t('readMore')}
                </Button>
              </AppLink>
              {views}
            </div>
          </>
        </Card>
      </div>
    )
  }

  return (
    <AppLink to={RoutePath.articles_details + article.id} target={target}>
      <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
        <Card>
          <>
            <div className={cls.imageWrapper}>
              <img src={article.img} alt={article.title} className={cls.img} />
              <Text text={article.createdAt} className={cls.date} />
            </div>
            <div className={cls.infoWrapper}>
              {types}
              {views}
            </div>
            <Text text={article.title} className={cls.title} />
          </>
        </Card>
      </div>
    </AppLink>
  )
})

ArticleListItem.displayName = 'ArticleListItem'

export default ArticleListItem
