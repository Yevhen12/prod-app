import React, { memo, Suspense, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig, RouteAppProps } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import RequireAuth from './RequireAuth'

const AppRouter: React.FC = () => {
  const renderWithWrapper = useCallback((route: RouteAppProps) => {
    const { path, element, authOnly } = route
    return (
      <Route
        key={path}
        path={path}
        element={authOnly
          ? <RequireAuth>
            <div className='page-wrapper'>{element}</div>
          </RequireAuth>
          : <div className='page-wrapper'>{element}</div>}
      />
    )
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
