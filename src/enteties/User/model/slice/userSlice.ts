import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { setFeaturesFlags } from '@/shared/features/setGetFeatures';
import { JsonSettings } from '../types/jsonSettings';
import { saveJsonSettings } from '../services/saveSettings';
import { initAuthData } from '../services/initAuthData';

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
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
      setFeaturesFlags(action.payload.features);
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
    builder.addCase(initAuthData.fulfilled, (state, { payload }) => {
      state.authData = payload;
      setFeaturesFlags(payload.features);
      state._mounted = true;
    });
    builder.addCase(initAuthData.rejected, (state) => {
      state._mounted = true;
    });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
