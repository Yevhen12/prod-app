import { getUserAuthData } from 'enteties/User'
import React, { memo, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'

const AppRouter: React.FC = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = Object.values(routeConfig).filter(({ path, element, authOnly }) => {
    if (authOnly && !isAuth) {
      return false
    }
    return true
  })

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
