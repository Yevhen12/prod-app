import { Article } from 'enteties/Article'
import i18n from 'shared/config/i18n/i18n'
import { createAppAsyncThunk } from 'shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { api } from 'shared/api/api'
import { getArticlesPageLimit } from '../../selectors/articlePageSelectors'

const URL = '/articles'

interface fetchArticleListProps {
  page: number
}

// TODO: NEED TO FIX extra: any

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleList = createAppAsyncThunk<Article[], fetchArticleListProps>(
  'article/fetchArticleList',
  async (args, thunkAPI) => {
    const { page = 1 } = args
    const limit = getArticlesPageLimit(thunkAPI.getState())
    try {
      const response = await api.get<Article[]>(`${URL}`, {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
        }
      })

      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
    }
  }
)
