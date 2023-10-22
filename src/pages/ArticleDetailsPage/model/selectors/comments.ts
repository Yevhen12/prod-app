import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getCommentArticleIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading
export const getCommentArticleError = (state: StateSchema) => state.articleDetailsComments?.error
