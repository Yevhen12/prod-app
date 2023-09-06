import { Reducer } from '@reduxjs/toolkit'
import { AppDispatch, ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export type ReducersTypeEntry = [StateSchemaKey, Reducer]

const DynamicModuleLoader: FC<PropsWithChildren<DynamicModuleLoaderProps>> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersTypeEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((name: StateSchemaKey) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default DynamicModuleLoader
