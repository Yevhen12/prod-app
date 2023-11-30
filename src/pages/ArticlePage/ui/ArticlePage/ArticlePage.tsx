import ArticleList from 'enteties/Article/ui/ArticleList/ArticleList'
import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import Page from 'widgets/Page/ui/Page'
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlePageSelectors'
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { initArticlePage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlePageSliceReducer, getArticles } from '../../model/slices/articlePageSlice'
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'
import cls from './ArticlePage.module.scss'

export interface ArticlePageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlePageSliceReducer
}

const ArticlePage: FC<ArticlePageProps> = ({ className = '' }) => {
  // const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  // const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlePage(searchParams))
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <ArticlesPageFilters />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          view={view}
          className={cls.list}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticlePage
