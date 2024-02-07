import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getCommentArticleIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.isLoading;
export const getCommentArticleError = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.error;
