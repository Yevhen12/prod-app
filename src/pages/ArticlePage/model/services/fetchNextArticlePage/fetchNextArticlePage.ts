import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPagePage } from './../../selectors/articlePageSelectors'
import i18n from 'shared/config/i18n/i18n'
import { createAppAsyncThunk } from 'shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { articlePageActions } from '../../slices/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

// TODO: NEED TO FIX extra: any

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchNextArticlePage = createAppAsyncThunk<void, undefined>(
  'article/fetchNextArticlePage',
  async (_, thunkAPI) => {
    try {
      const hasMore = getArticlesPageHasMore(thunkAPI.getState())
      const isLoading = getArticlesPageIsLoading(thunkAPI.getState())
      const page = getArticlesPagePage(thunkAPI.getState())

      if (hasMore && !isLoading) {
        thunkAPI.dispatch(articlePageActions.setPage(page + 1))
        thunkAPI.dispatch(fetchArticleList({}))
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
    }
  }
)
