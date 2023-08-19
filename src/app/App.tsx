import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import React, { Suspense } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import './styles/index.scss'

const App: React.FC = () => {
  const { theme } = useTheme()

  const prootectedTheme = theme ?? ''
  
  return (
    <div className={classNames('app', {}, [prootectedTheme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
