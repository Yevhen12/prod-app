// import { NavigateFunction } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
// import { AxiosInstance } from 'axios'

export const createAppAsyncThunk =
  createAsyncThunk.withTypes<ThunkConfig<string>>();
