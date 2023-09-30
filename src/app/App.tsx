import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import React, { Suspense, useEffect } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { Counter } from 'enteties/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from './providers/StoreProvider'
import { userActions } from 'enteties/User'
import { getUserMounted } from 'enteties/User/model/selectors/getUserMounted/getUserModunted'
import './styles/index.scss'

const App: React.FC = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch<AppDispatch>()
  const isMounted = useSelector(getUserMounted)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  const prootectedTheme = theme ?? ''

  return (
    <div id='app' className={classNames('app', {}, [prootectedTheme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <Counter />
          {isMounted ? <AppRouter /> : null}
        </div>
      </Suspense>
    </div>
  )
}

export default App
