import { getArticlesPageInited } from './../../selectors/articlePageSelectors'
import i18n from 'shared/config/i18n/i18n'
import { createAppAsyncThunk } from 'shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { articlePageActions } from '../../slices/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

// TODO: NEED TO FIX extra: any

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlePage = createAppAsyncThunk<void, void>(
  'article/initArticlePage',
  async (_, thunkAPI) => {
    try {
      const inited = getArticlesPageInited(thunkAPI.getState())
      if (!inited) {
        thunkAPI.dispatch(articlePageActions.initState())
        thunkAPI.dispatch(fetchArticleList({ page: 1 }))
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
    }
  }
)
