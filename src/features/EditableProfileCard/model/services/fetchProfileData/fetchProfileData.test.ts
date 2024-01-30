/* eslint-disable @typescript-eslint/unbound-method */
import { fetchProfileData } from './fetchProfileData'
import { api } from '@/shared/api/api'
import { TestAsynkThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk'
import { Country } from '@/enteties/Country'
import { Currency } from '@/enteties/Currency'

jest.mock('shared/api/api')
const mockedAxios = jest.mocked(api, { shallow: false })

const testData = {
  first: 'Yevhen',
  lastname: 'Lys',
  age: '20',
  currency: Currency.UA,
  country: Country.England,
  city: 'Lviv',
  username: 'neylen',
  avatar: 'https://images.unsplash.com/photo-1694845482698-accfce9310f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
  id: '1'
}

describe('fetchProfileData', () => {
  test('success fetching', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data: testData }))
    const thunk = new TestAsynkThunk(fetchProfileData)
    const result = await thunk.callThunk('1')

    expect(mockedAxios.get).toHaveBeenCalled()
    expect(result.payload).toEqual(testData)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('error fetching', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsynkThunk(fetchProfileData)
    const result = await thunk.callThunk('1')

    expect(mockedAxios.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
