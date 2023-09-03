import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { User, userActions } from 'enteties/User'
import i18n from 'shared/config/i18n/i18n'
import { loginActions } from '../../slice/loginSlice'
import { BASE_API_URL } from 'shared/const/api'

const URL = `${BASE_API_URL}/login`

interface LoginByUsernameProps {
  username: string
  password: string
}

interface UserDTO extends User {
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post<UserDTO>(URL, {
        username,
        password
      })
      if (!response.data) {
        throw new Error()
      }
      const { password: returnedPassword, ...otherFields } = response.data

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(otherFields))
      thunkAPI.dispatch(userActions.setAuthData(otherFields))
      thunkAPI.dispatch(loginActions.reset())
      return otherFields
    } catch (error: any) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(i18n.t('incorrectCreds'))
      } else {
        return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
      }
    }
  }
)
