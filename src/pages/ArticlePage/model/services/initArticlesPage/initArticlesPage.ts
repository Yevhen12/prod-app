import { getArticlesPageInited } from './../../selectors/articlePageSelectors'
import i18n from 'shared/config/i18n/i18n'
import { createAppAsyncThunk } from 'shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { articlePageActions } from '../../slices/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'
import { OrderType } from 'shared/types'
import { ArticleSortField, ArticleType } from 'enteties/Article'

// TODO: NEED TO FIX extra: any

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlePage = createAppAsyncThunk<void, URLSearchParams>(
  'article/initArticlePage',
  async (searchParams, thunkAPI) => {
    try {
      const inited = getArticlesPageInited(thunkAPI.getState())
      if (!inited) {
        const sortUrl = searchParams.get('sort') as ArticleSortField
        const orderUrl = searchParams.get('order') as OrderType
        const searchUrl = searchParams.get('search')
        const typeUrl = searchParams.get('type') as ArticleType

        if (sortUrl) {
          thunkAPI.dispatch(articlePageActions.setSort(sortUrl))
        }

        if (orderUrl) {
          thunkAPI.dispatch(articlePageActions.setOrder(orderUrl))
        }

        if (searchUrl) {
          thunkAPI.dispatch(articlePageActions.setSearch(searchUrl))
        }

        if (typeUrl) {
          thunkAPI.dispatch(articlePageActions.setType(typeUrl))
        }

        thunkAPI.dispatch(articlePageActions.initState())
        thunkAPI.dispatch(fetchArticleList({}))
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
    }
  }
)
