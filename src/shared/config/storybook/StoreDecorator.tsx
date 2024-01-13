/* eslint-disable prod-proj-plugin/public-api-imports */
/* eslint-disable indent */
/* eslint-disable react/display-name */
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice'
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsReducer } from '@/enteties/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slices/addCommentFormSlice'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage'

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (Story: StoryFn) => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider>
)
