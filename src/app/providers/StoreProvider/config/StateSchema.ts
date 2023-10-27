import { ArticleDetailsCommentsSchema } from './../../../../pages/ArticleDetailsPage/model/types/ArticleDetailsCommentsSchema'
import { ProfileSchema } from './../../../../enteties/Profile/model/types/profile'
import { ReducersMapObject, AnyAction, CombinedState, Reducer } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { CounterShema } from 'enteties/Counter'
import { UserSchema } from 'enteties/User'
import { LoginSchema } from 'features/AuthByUsername'
import { AxiosInstance } from 'axios'
import { NavigateFunction } from 'react-router-dom'
import { ArticleDetailsSchema } from 'enteties/Article'
import { AddCommentFormSchema } from 'features/AddCommentForm'

export interface StateSchema {
  counter: CounterShema
  user: UserSchema
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  addCommentForm?: AddCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArg {
  api?: AxiosInstance
  navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
  rejectValue: T
  // extra: ThunkExtraArg
  // Todo: figure out why extra: ThunkExtraArg is not working
  extra: any
  state: StateSchema
}
