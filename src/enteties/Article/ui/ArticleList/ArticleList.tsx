import { Article, ArticleView } from 'enteties/Article/model/types/article'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading: boolean
  view?: ArticleView
}

const ArticleList: FC<ArticleListProps> = ({
  className = '',
  articles,
  isLoading,
  view = ArticleView.SMALL
}) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
        {new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((el, idx) => <ArticleListItemSkeleton key={idx} view={view} />)}
      </div>
    )
  }

  const renderList = articles.map((article: Article): JSX.Element => {
    return <ArticleListItem key={article.id} article={article} view={view} />
  })

  return (
    <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
      {renderList}
      <p>fdfd</p>
    </div>
  )
}

export default ArticleList
