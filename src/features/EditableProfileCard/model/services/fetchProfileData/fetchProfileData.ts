import i18n from '@/shared/config/i18n/i18n'
import { createAppAsyncThunk } from '@/shared/lib/createAppAsynkThunk/createAppAsynkThunk'
import { api } from '@/shared/api/api'
import { Profile } from '@/enteties/Profile'

const URL = '/profile'

// TODO: NEED TO FIX extra: any

export const fetchProfileData = createAppAsyncThunk<Profile, string | undefined>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    try {
      if (!profileId) {
        return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
      }

      const response = await api.get<Profile>(`${URL}/${profileId}`)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'))
    }
  }
)
