import { getProfileForm } from './../../selectors/getProfileForm/getProfileForm'
import i18n from 'shared/config/i18n/i18n'
import { createAppAsyncThunk } from 'shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { api } from 'shared/api/api'
import { Profile } from '../../types/profile'

const URL = '/profile'

// TODO: NEED TO FIX extra: any

export const updateProfileData = createAppAsyncThunk<Profile, undefined>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    try {
      const formData = getProfileForm(thunkAPI.getState())
      const response = await api.put<Profile>(URL, formData)

      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
    }
  }
)
