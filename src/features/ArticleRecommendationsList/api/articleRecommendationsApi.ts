import { Article } from './../../../enteties/Article/model/types/article';
import { rtkApi } from '@/shared/api/rtkApi';

export const recommendationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
          _expand: 'user',
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const useArticleRecommendationsList =
  recommendationApi.useGetArticleRecommendationsListQuery;
