import { AxiosError } from 'axios';
import { User, userActions } from '@/enteties/User';
import i18n from '@/shared/config/i18n/i18n';
import { createAppAsyncThunk } from '@/shared/lib/createAppAsynkThunk/createAppAsynkThunk';
import { api } from '@/shared/api/api';

const URL = 'login';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

interface UserDTO extends User {
  password: string;
}

// TODO: NEED TO FIX extra: any

export const loginByUsername = createAppAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await api.post<UserDTO>(URL, {
        username,
        password,
      });
      if (!response.data) {
        throw new Error();
      }
      const { password: returnedPassword, ...otherFields } = response.data;

      thunkAPI.dispatch(userActions.setAuthData(otherFields));

      return otherFields;
    } catch (error: any) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(i18n.t('incorrectCreds'));
      } else {
        return thunkAPI.rejectWithValue(i18n.t('somethingWentWrong'));
      }
    }
  },
);
