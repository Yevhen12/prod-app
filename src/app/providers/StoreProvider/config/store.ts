import { StateSchema } from './StateSchema'
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'enteties/Counter/model/slice/counterSlice'

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
