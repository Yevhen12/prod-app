import { StateSchema } from './StateSchema'
import { AnyAction, CombinedState, configureStore, Reducer, ReducersMapObject, ThunkMiddleware } from '@reduxjs/toolkit'
import { counterReducer } from 'enteties/Counter/model/slice/counterSlice'
import { userReducer } from 'enteties/User/model/slice/userSlice'
import { createReducerManager } from './reducerManager'
import { api } from 'shared/api/api'
import { NavigateFunction } from 'react-router-dom'

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    ...asyncReducers
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          navigate
        }
      }
    }) as unknown as [ThunkMiddleware<StateSchema, AnyAction, undefined>]
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
