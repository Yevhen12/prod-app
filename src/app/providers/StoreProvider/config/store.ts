import { StateSchema } from './StateSchema'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'enteties/Counter/model/slice/counterSlice'
import { userReducer } from 'enteties/User/model/slice/userSlice'
import { loginReducer } from 'features/AuthByUsername'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

const AppDispatchValue = createReduxStore().dispatch
export type AppDispatch = typeof AppDispatchValue
