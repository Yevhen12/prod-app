import { loginReducer, loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { LoginSchema } from 'features/AuthByUsername'

describe('loginSlice', () => {
  test('setUsername', () => {
    const state: LoginSchema = {
      username: '',
      password: '',
      error: '',
      isLoading: false
    }

    const expectedState = {
      username: 'test',
      password: '',
      error: '',
      isLoading: false
    }

    expect(loginReducer(state, loginActions.setUsername('test'))).toEqual(expectedState)
  })
  test('setPassword', () => {
    const state: LoginSchema = {
      username: '',
      password: '',
      error: '',
      isLoading: false
    }

    const expectedState = {
      username: '',
      password: 'test',
      error: '',
      isLoading: false
    }

    expect(loginReducer(state, loginActions.setPassword('test'))).toEqual(expectedState)
  })
  test('reset', () => {
    const state: LoginSchema = {
      username: 'testtest',
      password: '123123',
      error: 'some error',
      isLoading: true
    }

    const expectedState = {
      username: '',
      password: '',
      error: null,
      isLoading: false
    }

    expect(loginReducer(state, loginActions.reset())).toEqual(expectedState)
  })
})
