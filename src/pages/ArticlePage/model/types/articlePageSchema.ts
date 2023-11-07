import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleView } from 'enteties/Article'

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading: boolean | undefined
  error: string | undefined
  view: ArticleView
}
