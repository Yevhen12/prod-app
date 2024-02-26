import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { setFeaturesFlags } from '@/shared/features/setGetFeatures';
import { JsonSettings } from '../types/jsonSettings';
import { saveJsonSettings } from '../services/saveSettings';

const initialState: UserSchema = {
  authData: null,
  _mounted: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeaturesFlags(action.payload.features);
    },
    initAuthData: (state) => {
      const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (userData) {
        const parsedUser = JSON.parse(userData) as User;
        state.authData = parsedUser;
        setFeaturesFlags(parsedUser.features);
      }
      state._mounted = true;
    },
    logOut: (state) => {
      state.authData = null;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, action: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload;
        }
      },
    );
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
