import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IScrollRestorationSchema } from '../types/ScrollRestoration';

const initialState: IScrollRestorationSchema = {
  scroll: {},
};

export const scrollSlice = createSlice({
  name: 'scrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
