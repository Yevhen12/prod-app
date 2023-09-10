import { getLoginPassword } from './getLoginPassword'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getLoginPassword', () => {
  test('should render correct password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error occur',
        password: '123',
        username: '',
        isLoading: true
      }
    }

    expect(getLoginPassword(state as StateSchema)).toBe('123')
  })
})
