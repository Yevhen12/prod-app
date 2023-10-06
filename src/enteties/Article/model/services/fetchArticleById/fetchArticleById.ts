import { Article } from './../../types/article'
import i18n from 'shared/config/i18n/i18n'
import { createAppAsyncThunk } from 'shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { api } from 'shared/api/api'

const URL = '/articles'

// TODO: NEED TO FIX extra: any

export const fetchArticleById = createAppAsyncThunk<Article, string>(
  'articleDetails/fetchArticleById',
  async (id, thunkAPI) => {
    try {
      const response = await api.get<Article>(`${URL}/${id}`)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
    }
  }
)
