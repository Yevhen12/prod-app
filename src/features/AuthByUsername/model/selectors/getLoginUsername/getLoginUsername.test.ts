import { getLoginUsername } from './getLoginUsername'
import { StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginUsername', () => {
  test('should render correct username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error occur',
        password: '123',
        username: 'test',
        isLoading: true
      }
    }

    expect(getLoginUsername(state as StateSchema)).toBe('test')
  })
})
