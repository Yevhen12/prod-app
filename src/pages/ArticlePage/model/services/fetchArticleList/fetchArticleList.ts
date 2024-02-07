import { Article, ArticleType } from '@/enteties/Article';
import i18n from '@/shared/config/i18n/i18n';
import { createAppAsyncThunk } from '@/shared/lib/createAppAsynkThunk/createAppAsynkThunk';
import { api } from '@/shared/api/api';
import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPagePage,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlePageSelectors';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

const URL = '/articles';

interface FetchArticleList {
  replace?: boolean;
}

// TODO: NEED TO FIX extra: any

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleList = createAppAsyncThunk<
  Article[],
  FetchArticleList
>('article/fetchArticleList', async (args, thunkAPI) => {
  const limit = getArticlesPageLimit(thunkAPI.getState());
  const order = getArticlesPageOrder(thunkAPI.getState());
  const sort = getArticlesPageSort(thunkAPI.getState());
  const search = getArticlesPageSearch(thunkAPI.getState());
  const page = getArticlesPagePage(thunkAPI.getState());
  const type = getArticlesPageType(thunkAPI.getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
      type,
    });
    const response = await api.get<Article[]>(`${URL}`, {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'));
  }
});
