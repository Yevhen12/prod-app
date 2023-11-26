import { Article, ArticleView } from 'enteties/Article/model/types/article'
import { FC, HTMLAttributeAnchorTarget } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton'
import Text, { TextSize } from 'shared/ui/Text/Text'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const ArticleList: FC<ArticleListProps> = ({
  className = '',
  articles,
  isLoading,
  view = ArticleView.SMALL,
  target
}) => {
  const { t } = useTranslation()
  if (isLoading) {
    return (
      <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
        {new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((el, idx) => <ArticleListItemSkeleton key={idx} view={view} />)}
      </div>
    )
  }

  const getSkeletons = new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((el, idx) => (
    <ArticleListItemSkeleton key={idx} view={view} />
  ))

  const renderList = articles.map((article: Article): JSX.Element => {
    return <ArticleListItem key={article.id} article={article} view={view} target={target} />
  })

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} text={t('articlesNotFound')} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
      {renderList}
      {isLoading && (
        getSkeletons
      )}
    </div>
  )
}

export default ArticleList
