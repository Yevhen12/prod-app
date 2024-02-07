import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/enteties/Article';
import { ArticleDetailsPageRecommendationSchema } from '../types/ArticleDetailsPageRecommendationSchema';
import { fetchArticleRecommendation } from '../services/fetchArticleRecommendation/fetchArticleRecommendation';

const articleDetailsPageRecommendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations =
  articleDetailsPageRecommendationAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ??
      articleDetailsPageRecommendationAdapter.getInitialState(),
  );

const articleDetailsPageRecommendationSlice = createSlice({
  name: 'articleDetailsPageRecommendation',
  initialState:
    articleDetailsPageRecommendationAdapter.getInitialState<ArticleDetailsPageRecommendationSchema>(
      {
        isLoading: false,
        ids: [],
        entities: {},
        error: undefined,
      },
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendation.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchArticleRecommendation.fulfilled, (state, action) => {
      state.error = undefined;
      state.isLoading = false;
      articleDetailsPageRecommendationAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticleRecommendation.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { reducer: articleDetailsPageRecommedationReducer } =
  articleDetailsPageRecommendationSlice;
