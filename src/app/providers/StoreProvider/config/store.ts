import { rtkApi } from './../../../../shared/api/rtkApi'
import { StateSchema } from './StateSchema'
import { AnyAction, CombinedState, configureStore, Reducer, ReducersMapObject, ThunkMiddleware } from '@reduxjs/toolkit'
import { counterReducer } from 'enteties/Counter/model/slice/counterSlice'
import { userReducer } from 'enteties/User/model/slice/userSlice'
import { scrollReducer } from 'features/ScrollRestoration'
import { createReducerManager } from './reducerManager'
import { api } from 'shared/api/api'

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    scroll: scrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
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
          api
        }
      }
    }).concat(rtkApi.middleware) as unknown as [ThunkMiddleware<StateSchema, AnyAction, undefined>]
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
