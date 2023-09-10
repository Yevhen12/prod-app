import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
  data: null,
  isLoading: false,
  error: null,
  readonly: true
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.data = action.payload
      state.error = null
      state.isLoading = false
    })
    builder.addCase(fetchProfileData.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
