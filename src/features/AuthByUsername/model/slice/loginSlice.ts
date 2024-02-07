/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginShema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    reset: (state) => {
      state.password = '';
      state.username = '';
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(loginByUsername.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
