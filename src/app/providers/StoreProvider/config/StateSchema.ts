import { ProfileSchema } from './../../../../enteties/Profile/model/types/profile'
import { ReducersMapObject, AnyAction, CombinedState, Reducer } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { CounterShema } from 'enteties/Counter'
import { UserSchema } from 'enteties/User'
import { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterShema
  user: UserSchema
  loginForm?: LoginSchema
  profile?: ProfileSchema
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
