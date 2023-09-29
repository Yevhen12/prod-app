import { Country } from 'enteties/Country'
import { validateProfileData } from './validateProfileData'
import { Currency } from 'enteties/Currency'
import { ProfileValidateError } from '../../types/profile'

jest.mock('shared/api/api')

const testData = {
  first: 'Yevhen',
  lastname: 'Lys',
  age: '20',
  currency: Currency.UA,
  country: Country.England,
  city: 'Lviv',
  username: 'neylen',
  avatar: 'https://images.unsplash.com/photo-1694845482698-accfce9310f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
}

describe('validateProfileData', () => {
  test('should return empty array', () => {
    const result = validateProfileData(testData)

    expect(result).toStrictEqual([])
  })

  test('should return INCORRECT_USER_DATA error', () => {
    const result = validateProfileData({ ...testData, first: '' })

    expect(result).toStrictEqual([ProfileValidateError.INCORRECT_USER_DATA])
  })

  test('should return all error', () => {
    const result = validateProfileData({ ...testData, first: '', lastname: '', country: undefined, age: '' })

    expect(result).toStrictEqual(
      [
        ProfileValidateError.INCORRECT_USER_DATA,
        ProfileValidateError.INCORRECT_AGE,
        ProfileValidateError.INCORRECT_COUNTRY
      ]
    )
  })
})
