import { updateProfileData } from './../services/updateProfileData/updateProfileData';
import { Profile } from '@/enteties/Profile';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/EditableProfileCardSchema';
import { ProfileValidateError } from '../consts/profileCardConsts';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  form: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
  validateErrors: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.form = state.data;
      state.readonly = true;
      state.validateErrors = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.data = action.payload;
        state.form = action.payload;
        state.error = undefined;
        state.isLoading = false;
      },
    );
    builder.addCase(fetchProfileData.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
      state.error = action.payload as string;
    });
    builder.addCase(
      updateProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.data = state.form;
        state.readonly = true;
        state.validateErrors = undefined;
        state.isLoading = false;
      },
    );
    builder.addCase(updateProfileData.pending, (state, action) => {
      state.isLoading = true;
      state.validateErrors = undefined;
    });
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validateErrors = action.payload as ProfileValidateError[];
    });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
