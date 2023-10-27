import i18n from 'shared/config/i18n/i18n'
import { createAppAsyncThunk } from 'shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { api } from 'shared/api/api'
import { getUserAuthData } from 'enteties/User'
import { getArticleDetailsData } from 'enteties/Article/model/selectors/articleDetails'
import { Comment } from 'enteties/Comment'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

const URL = '/comments'

// TODO: NEED TO FIX extra: any

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const addCommentForArticle = createAppAsyncThunk<Comment, string | undefined>(
  'articleDetailsComments/addCommentForArticle',
  async (text, thunkAPI) => {
    try {
      const state = thunkAPI.getState()

      const userId = getUserAuthData(state)?.id
      const articleId = getArticleDetailsData(state)?.id

      if (!userId || !text || !articleId) {
        return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
      }

      const response = await api.post<Comment>(URL, {
        articleId,
        userId,
        text
      })

      thunkAPI.dispatch(fetchCommentsByArticleId(articleId))

      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
    }
  }
)
