import { articleDetailsPageReducer } from './model/slices/index'
import { ArticleDetailsPageAsync } from './ui/ArticleDetailsPage.async'
import { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'
import { ArticleDetailsPageRecommendationSchema } from './model/types/ArticleDetailsPageRecommendationSchema'
import { ArticleDetailsPageSchema } from './model/types'

export {
  ArticleDetailsPageAsync as ArticleDetailsPage,
  type ArticleDetailsCommentsSchema,
  type ArticleDetailsPageRecommendationSchema,
  type ArticleDetailsPageSchema,
  articleDetailsPageReducer
}
