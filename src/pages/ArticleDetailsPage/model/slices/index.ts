import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsPageRecommedationReducer } from './articleDetailsPageRecommendationSlice';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommedationReducer,
    comments: articleDetailsCommentsReducer,
  });
