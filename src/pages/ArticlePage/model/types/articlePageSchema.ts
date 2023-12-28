import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleView, ArticleType, ArticleSortField } from '@/enteties/Article'
import { OrderType } from '@/shared/types'

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading: boolean | undefined
  error: string | undefined
  view: ArticleView
  limit?: number
  page: number
  hasMore: boolean

  sort: ArticleSortField
  order: OrderType
  search: string
  type: ArticleType

  _inited?: boolean
}
