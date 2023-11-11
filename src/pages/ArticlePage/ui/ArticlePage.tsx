import { ArticleView, ArticleViewSelector } from 'enteties/Article'
import ArticleList from 'enteties/Article/ui/ArticleList/ArticleList'
import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import Page from 'shared/ui/Page/Page'
import { getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlePageSelectors'
import { fetchArticleList } from '../model/services/fetchArticleList/fetchArticleList'
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { articlePageActions, articlePageSliceReducer, getArticles } from '../model/slices/articlePageSlice'
// import { useTranslation } from 'react-i18next'
// import cls from './ArticlePage.module.scss'

export interface ArticlePageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlePageSliceReducer
}

const ArticlePage: FC<ArticlePageProps> = ({ className }) => {
  // const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  // const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(articlePageActions.initState())
    dispatch(fetchArticleList({ page: 1 }))
  })

  const onViewChange = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart}>
        <ArticleViewSelector view={view} onChangeView={onViewChange} />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          view={view}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticlePage
