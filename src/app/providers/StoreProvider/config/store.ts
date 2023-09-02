import { StateSchema } from './StateSchema'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'enteties/Counter/model/slice/counterSlice'
import { userReducer } from 'enteties/User/model/slice/userSlice'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
