import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getArticleDetailsPageRecommendationIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading ?? false
export const getArticleDetailsPageRecommendationError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error ?? ''
