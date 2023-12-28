import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import { Comment } from '@/enteties/Comment'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const articleDetailsCommentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

export const getArticleComments = articleDetailsCommentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments ?? articleDetailsCommentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    ids: [],
    entities: {},
    error: undefined
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
      state.error = undefined
      state.isLoading = false
      articleDetailsCommentsAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload
      state.isLoading = false
    })
  }
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
