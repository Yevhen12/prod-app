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
import { ArticleSortField, ArticleType } from 'enteties/Article/model/types/article'
import { OrderType } from 'shared/types'

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
    view: ArticleView.SMALL,
    // pagination
    limit: 5,
    page: 1,
    hasMore: true,
    // filters
    sort: ArticleSortField.CREATED,
    order: 'asc',
    search: '',
    type: ArticleType.ALL,

    _inited: false
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.BIG ? 4 : 9
      state._inited = true
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<OrderType>) => {
      state.order = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleList.pending, (state, action) => {
      state.error = undefined
      state.isLoading = true
      if (action.meta.arg.replace) {
        articlePageSliceAdapter.removeAll(state)
      }
    })
    builder.addCase(fetchArticleList.fulfilled, (state, action) => {
      state.error = undefined
      state.isLoading = false
      state.hasMore = action.payload.length >= (state.limit ?? 0)

      if (action.meta.arg.replace) {
        articlePageSliceAdapter.setAll(state, action.payload)
      } else {
        articlePageSliceAdapter.addMany(state, action.payload)
      }
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
