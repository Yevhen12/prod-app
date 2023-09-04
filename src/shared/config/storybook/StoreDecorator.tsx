/* eslint-disable indent */
/* eslint-disable react/display-name */
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>) => (Story: StoryFn) => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider>
)
