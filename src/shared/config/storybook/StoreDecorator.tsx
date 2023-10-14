/* eslint-disable indent */
/* eslint-disable react/display-name */
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { profileReducer } from 'enteties/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsReducer } from 'enteties/Article/model/slice/articleDetailsSlice'

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (Story: StoryFn) => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider>
)
