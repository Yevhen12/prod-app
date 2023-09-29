import { getProfileForm } from './../../selectors/getProfileForm/getProfileForm'
import i18n from 'shared/config/i18n/i18n'
import { createAppAsyncThunk } from 'shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { api } from 'shared/api/api'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { Profile, ProfileValidateError } from '../../types/profile'
import { ThunkConfig } from 'app/providers/StoreProvider'

const URL = '/profile'

// TODO: NEED TO FIX extra: any

export const updateProfileData = createAppAsyncThunk<Profile, undefined, ThunkConfig<ProfileValidateError[] | string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    try {
      const formData = getProfileForm(thunkAPI.getState())
      const errors = validateProfileData(formData)
      if (errors.length) {
        return thunkAPI.rejectWithValue(errors)
      }

      const response = await api.put<Profile>(URL, formData)

      if (!response.data) {
        throw new Error('no data')
      }

      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
    }
  }
)
