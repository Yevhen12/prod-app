import { Article } from '@/enteties/Article'
import i18n from '@/shared/config/i18n/i18n'
import { createAppAsyncThunk } from '@/shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { api } from '@/shared/api/api'

const URL = '/articles'

// TODO: NEED TO FIX extra: any

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleRecommendation = createAppAsyncThunk<Article[], void>(
  'articleDetails/fetchArticleRecommendation',
  async (_, thunkAPI) => {
    try {
      const response = await api.get<Article[]>(`${URL}`, {
        params: {
          _limit: 4
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
