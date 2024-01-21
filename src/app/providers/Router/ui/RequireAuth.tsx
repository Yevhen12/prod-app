import { getUserAuthData, UserRole, getAllRoles } from '@/enteties/User'
import { getRouteForbidden, getRouteMain } from '@/shared/const/router'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

const RequireAuth = ({ children, roles }: RequireAuthProps): JSX.Element => {
  const authUser = useSelector(getUserAuthData)
  const userRoles = useSelector(getAllRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some((requiredRole) => userRoles?.includes(requiredRole))
  }, [roles, userRoles])

  if (!authUser) {
    return <Navigate to={getRouteMain()} replace />
  }

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteForbidden()} replace />
  }

  return children
}

export default RequireAuth
