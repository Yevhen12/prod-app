import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from 'enteties/Article/model/types/article'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import Icon from 'shared/ui/Icon/Icon'
import Text from 'shared/ui/Text/Text'
import cls from './ArticleListItem.module.scss'
import EyeIcon from 'shared/assets/icons/eye-outlined.svg'
import Card from 'shared/ui/Card/Card'
import Avatar from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleListItemProps {
  className?: string
  article: Article
  view?: ArticleView
}

const ArticleListItem: FC<ArticleListItemProps> = memo(({
  className = '',
  article,
  view = ArticleView.SMALL
}: ArticleListItemProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.articles_details + article.id)
  }, [article.id, navigate])

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
              <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                {t('readMore')}
              </Button>
              {views}
            </div>
          </>
        </Card>
      </div>
    )
  }

  return (
    <div onClick={onOpenArticle} className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
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
  )
})

ArticleListItem.displayName = 'ArticleListItem'

export default ArticleListItem
