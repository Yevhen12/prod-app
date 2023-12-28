import { getProfileError } from './getProfileEror'
import { StateSchema } from '@/app/providers/StoreProvider'

describe('getProfileError', () => {
  test('should return correct error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'test error'
      }
    }
    const expectedValue = 'test error'
    expect(getProfileError(state as StateSchema)).toEqual(expectedValue)
  })
})
