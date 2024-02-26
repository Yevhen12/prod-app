import { createAppAsyncThunk } from '@/shared/lib/createAppAsynkThunk/createAppAsynkThunk';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettingsSelectors';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAppAsyncThunk<JsonSettings, JsonSettings>(
  'user/saveJsonSettigns',
  async (newJsonSettigns, thunkAPI) => {
    const userData = getUserAuthData(thunkAPI.getState());
    const currentSettigns = getJsonSettings(thunkAPI.getState());

    if (!userData) {
      return thunkAPI.rejectWithValue('');
    }

    try {
      const response = await thunkAPI
        .dispatch(
          setJsonSettingsMutation({
            userId: userData.id,
            jsonSettings: {
              ...currentSettigns,
              ...newJsonSettigns,
            },
          }),
        )
        .unwrap();
      if (!response.jsonSettings) {
        return thunkAPI.rejectWithValue('');
      }

      return response.jsonSettings;
    } catch (error: any) {
      console.log('error SaveJsonSettigns', error);
      return thunkAPI.rejectWithValue('error Occur on SaveJsonSettigns');
    }
  },
);
