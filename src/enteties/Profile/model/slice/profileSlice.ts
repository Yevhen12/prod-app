import { updateProfileData } from './../services/updateProfileData/updateProfileData'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
  data: undefined,
  form: undefined,
  isLoading: false,
  error: undefined,
  readonly: true
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload
      }
    },
    cancelEdit: (state) => {
      state.form = state.data
      state.readonly = true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.data = action.payload
      state.form = action.payload
      state.error = undefined
      state.isLoading = false
    })
    builder.addCase(fetchProfileData.pending, (state, action) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
    builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.data = state.form
      state.readonly = true
      state.error = undefined
      state.isLoading = false
    })
    builder.addCase(updateProfileData.pending, (state, action) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
