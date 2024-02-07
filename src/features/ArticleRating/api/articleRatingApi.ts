/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/enteties/Rating';

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

export const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArg>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: ({ userId, articleId, feedback, rate }) => ({
        url: '/article-ratings',
        method: 'POST',
        body: {
          userId,
          articleId,
          feedback,
          rate,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
