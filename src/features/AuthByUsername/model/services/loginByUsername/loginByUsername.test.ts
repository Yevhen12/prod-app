import { api } from 'shared/api/api'
// import { StateSchema } from 'app/providers/StoreProvider'
import { loginByUsername } from './loginByUsername'
// import { Dispatch } from '@reduxjs/toolkit'
import { userActions } from 'enteties/User'
import { TestAsynkThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'

jest.mock('shared/api/api')
const mockedAxios = jest.mocked(api, { shallow: false })

describe('getLoginError', () => {
  // let dispatch: Dispatch
  // let getState: () => StateSchema

  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  // test('success login', async () => {
  //   const userValues = { username: 'test', id: '2' }
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValues }))
  //   const action = loginByUsername({ username: 'test', password: 'test' })
  //   const result = await action(dispatch, getState, undefined)

  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValues))
  //   expect(dispatch).toHaveBeenCalledWith(loginActions.reset())
  //   expect(dispatch).toHaveBeenCalledTimes(4)
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.meta.arg.password).toBe('test')
  //   expect(result.meta.arg.username).toBe('test')
  // })

  // test('error login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = loginByUsername({ username: 'test', password: 'test' })
  //   const result = await action(dispatch, getState, undefined)

  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(result.payload).toEqual('somethingWentWrong')
  // })

  test('success login', async () => {
    const userValues = { username: 'test', id: '2' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValues }))
    const thunk = new TestAsynkThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'test', password: 'test' })

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValues))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.meta.arg.password).toBe('test')
    expect(result.meta.arg.username).toBe('test')
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsynkThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'test', password: 'test' })

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.payload).toEqual('somethingWentWrong')
  })
})
