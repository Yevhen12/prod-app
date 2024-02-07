/* eslint-disable @typescript-eslint/unbound-method */
import { mockArticle } from './../../../../../shared/mocks/articleMock';
import { fetchArticleById } from './fetchArticleById';
import { api } from '@/shared/api/api';
import { TestAsynkThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';

jest.mock('shared/api/api');
const mockedAxios = jest.mocked(api, { shallow: false });

describe('fetchProfileData', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('success fetching', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data: mockArticle }));
    const thunk = new TestAsynkThunk(() => fetchArticleById('1'));
    const result = await thunk.callThunk();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.payload).toEqual(mockArticle);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error fetching', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsynkThunk(() => fetchArticleById('1'));
    const result = await thunk.callThunk();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
