import { createAppAsyncThunk } from '@/shared/lib/createAppAsynkThunk/createAppAsynkThunk';
import { getUserByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

export const initAuthData = createAppAsyncThunk<User, undefined>(
  'user/initAuthData',
  async (_, thunkAPI) => {
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return thunkAPI.rejectWithValue('');
    }

    try {
      const response = await thunkAPI
        .dispatch(getUserByIdQuery(userId))
        .unwrap();

      return response;
    } catch (error: any) {
      console.log('error SaveJsonSettigns', error);
      return thunkAPI.rejectWithValue('error Occur on initAuthData');
    }
  },
);
