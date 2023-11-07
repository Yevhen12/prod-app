import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'enteties/Article'
import { ArticlePageSchema } from '../types/articlePageSchema'
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const articlePageSliceAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticles = articlePageSliceAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage ?? articlePageSliceAdapter.getInitialState()
)

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlePageSliceAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    ids: [],
    entities: {},
    error: undefined,
    view: ArticleView.SMALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleList.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
      state.error = undefined
      state.isLoading = false
      articlePageSliceAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchArticleList.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload
      state.isLoading = false
    })
  }
})

export const {
  reducer: articlePageSliceReducer,
  actions: articlePageActions
} = articlePageSlice
