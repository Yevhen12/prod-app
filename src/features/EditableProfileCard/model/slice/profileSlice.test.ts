import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { profileActions, profileReducer } from './profileSlice'
import { ProfileSchema, ProfileValidateError } from '../types/EditableProfileCardSchema'
import { Country } from 'enteties/Country'
import { Currency } from 'enteties/Currency'

const defaultData = {
  first: 'Yevhen',
  lastname: 'Lys',
  age: '20',
  currency: Currency.UA,
  country: Country.England,
  city: 'Lviv',
  username: 'neylen',
  avatar: 'https://images.unsplash.com/photo-1694845482698-accfce9310f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
}

describe('profileSlice', () => {
  test('setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false
    }

    const expectedState: DeepPartial<ProfileSchema> = {
      readonly: true
    }

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual(expectedState)
  })

  test('cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: { ...defaultData },
      form: {
        ...defaultData,
        first: 'Yevhen1212121',
        lastname: 'Lyssdsdsds'
      }
    }

    const expectedState: DeepPartial<ProfileSchema> = {
      data: { ...defaultData },
      form: { ...defaultData },
      readonly: true,
      validateErrors: undefined
    }

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual(expectedState)
  })

  test('updateProfile', () => {
    const fieldsToChange = {
      first: 'Yevhen1212121',
      lastname: 'Lyssdsdsds'
    }
    const state: DeepPartial<ProfileSchema> = {
      form: {
        ...defaultData
      }
    }

    const expectedState: DeepPartial<ProfileSchema> = {
      form: {
        ...defaultData,
        ...fieldsToChange
      }
    }

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile(fieldsToChange))).toEqual(expectedState)
  })

  test('update profile pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ProfileValidateError.INCORRECT_USER_DATA]
    }

    const expectedState: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: undefined
    }

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual(expectedState)
  })

  test('update profile fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: defaultData,
      data: undefined,
      isLoading: true
    }

    const expectedState: DeepPartial<ProfileSchema> = {
      data: defaultData,
      isLoading: false,
      error: undefined,
      validateErrors: undefined,
      readonly: true,
      form: defaultData
    }

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled)).toEqual(expectedState)
  })
})
