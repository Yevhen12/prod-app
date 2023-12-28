import { EntityState } from '@reduxjs/toolkit'
import { Article } from '@/enteties/Article'

export interface ArticleDetailsPageRecommendationSchema extends EntityState<Article> {
  isLoading: boolean | undefined
  error: string | undefined
}
