import { getProfileValidateErrors } from './getProfileValidateError'
import { StateSchema } from 'app/providers/StoreProvider'
import { ProfileValidateError } from '../../types/EditableProfileCardSchema'

describe('getProfileError', () => {
  test('should return correct isLoading', () => {
    const errors = [
      ProfileValidateError.INCORRECT_AGE,
      ProfileValidateError.INCORRECT_COUNTRY
    ]
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
  })

  test('without data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    }
    const expectedValue = undefined
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(expectedValue)
  })
})
