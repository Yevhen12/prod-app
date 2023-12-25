import { ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector, ArticleType } from 'enteties/Article'
import ArticleTypeTabs from 'enteties/Article/ui/ArticleTypeTabs/ArticleTypeTabs'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView
} from '../../model/selectors/articlePageSelectors'
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList'
import { articlePageActions } from '../../model/slices/articlePageSlice'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { OrderType } from 'shared/types'
import Card from 'shared/ui/Card/Card'
import Input from 'shared/ui/Input/Input'
import { TabItem } from 'shared/ui/Tabs/Tabs'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = ({ className = '' }) => {
  const view = useSelector(getArticlesPageView)
  const order = useSelector(getArticlesPageOrder)
  const sort = useSelector(getArticlesPageSort)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const fetchData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }))
  }, [dispatch])

  const debouncedFetchedData = useDebounce(fetchData, 500)

  const onViewChange = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  const onChangeOrder = useCallback((order: OrderType) => {
    dispatch(articlePageActions.setOrder(order))
    dispatch(articlePageActions.setPage(1))
    debouncedFetchedData()
  }, [dispatch, debouncedFetchedData])

  const onChangeSort = useCallback((sort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(sort))
    dispatch(articlePageActions.setPage(1))
    debouncedFetchedData()
  }, [dispatch, debouncedFetchedData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlePageActions.setSearch(search))
    dispatch(articlePageActions.setPage(1))
    debouncedFetchedData()
  }, [dispatch, debouncedFetchedData])

  const onChangeTab = useCallback((tab: TabItem) => {
    dispatch(articlePageActions.setType(tab.value as ArticleType))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [fetchData, dispatch])

  return (
    <div className={classNames(cls.articlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onChangeView={onViewChange} />
      </div>
      <Card className={cls.search}>
        <Input onChange={onChangeSearch} value={search} placeholder={t('search')} />
      </Card>
      <ArticleTypeTabs type={type} onChangeTab={onChangeTab} />
    </div>
  )
}

export default ArticlesPageFilters
