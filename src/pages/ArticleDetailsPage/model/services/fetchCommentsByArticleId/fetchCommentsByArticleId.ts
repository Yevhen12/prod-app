import i18n from 'shared/config/i18n/i18n'
import { createAppAsyncThunk } from 'shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { api } from 'shared/api/api'
import { Comment } from 'enteties/Comment'

const URL = '/comments'

// TODO: NEED TO FIX extra: any

export const fetchCommentsByArticleId = createAppAsyncThunk<Comment[], string | undefined>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    try {
      if (!articleId) {
        return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
      }

      const response = await api.get<Comment[]>(`${URL}`, {
        params: {
          articleId,
          _expand: 'user'
        }
      })

      console.log('response', response.data)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
    }
  }
)
