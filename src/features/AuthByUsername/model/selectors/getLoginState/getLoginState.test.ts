import { getLoginState } from './getLoginState'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getLoginState', () => {
  test('should render correct login state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error occur',
        password: '123',
        username: '',
        isLoading: true
      }
    }

    expect(getLoginState(state as StateSchema)).toEqual(state.loginForm)
  })
})
