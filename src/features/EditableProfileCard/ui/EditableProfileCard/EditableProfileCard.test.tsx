import EditableProfileCard from './EditableProfileCard'
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent'
import { Profile } from 'enteties/Profile'
import { Currency } from 'enteties/Currency'
import { Country } from 'enteties/Country'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
// import { api } from 'shared/api/api'
// import { ProfileValidateError } from 'features/EditableProfileCard'

const profile: Profile = {
  id: '1',
  first: 'Yevhen',
  lastname: 'Lys',
  age: '465',
  currency: Currency.UA,
  country: Country.Ukraine,
  city: 'Lviv',
  username: 'admin123'
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile
    },
    user: {
      authData: {
        id: '1',
        username: 'admin'
      }
    }
  },
  asyncReducers: { profile: profileReducer }
}

describe('EditableProfileCard', () => {
  test('should render cancel button', async () => {
    renderComponent(<EditableProfileCard id='1' />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
  })

  test('should render correctly profile after click on cancel btn', async () => {
    renderComponent(<EditableProfileCard id='1' />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.Surname'))

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'test')
    await userEvent.type(screen.getByTestId('ProfileCard.Surname'), 'test')

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('test')
    expect(screen.getByTestId('ProfileCard.Surname')).toHaveValue('test')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Yevhen')
    expect(screen.getByTestId('ProfileCard.Surname')).toHaveValue('Lys')
  })

  test('should render correctly profile after click on cancel btn', async () => {
    renderComponent(<EditableProfileCard id='1' />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect(screen.getByTestId('EditableProfileCard.Error.Header')).toBeInTheDocument()
  })

  // test('should correctly save data and send data PUT request', async () => {
  //   const mockPutReq = jest.spyOn(api, 'put')
  //   renderComponent(<EditableProfileCard id='1' />, options)
  //   await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

  //   await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'test')

  //   await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

  //   expect(mockPutReq).toHaveBeenCalled()
  // })
})
