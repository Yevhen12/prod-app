import { Article } from './article'

export interface ArticleDetailsSchema {
  error: string | undefined
  isLoading: boolean
  data: Article | undefined
}
