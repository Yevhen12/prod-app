import { ArticleDetailsSchema } from './../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchArticleById.fulfilled,
      (state, action: PayloadAction<Article>) => {
        state.data = action.payload;
        state.error = undefined;
        state.isLoading = false;
      },
    );
    builder.addCase(
      fetchArticleById.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.error = action.payload;
        state.isLoading = false;
      },
    );
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
