import { getProfileLoading } from './getProfileLoading'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getProfileError', () => {
  test('should return correct isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    const expectedValue = true
    expect(getProfileLoading(state as StateSchema)).toEqual(expectedValue)
  })

  test('without data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    }
    const expectedValue = false
    expect(getProfileLoading(state as StateSchema)).toEqual(expectedValue)
  })
})
