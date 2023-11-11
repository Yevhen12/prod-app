import { TestAsynkThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'
import { fetchNextArticlePage } from './fetchNextArticlePage'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

jest.mock('../fetchArticleList/fetchArticleList')

describe('fetchNextArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsynkThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 })
  })
  test('fetchAritcleList not called', async () => {
    const thunk = new TestAsynkThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticleList).not.toHaveBeenCalled()
  })
})
