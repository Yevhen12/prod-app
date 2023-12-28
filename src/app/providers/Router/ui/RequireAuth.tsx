import { getUserAuthData, UserRole } from '@/enteties/User'
import { getAllRoles } from '@/enteties/User/model/selectors/roleSelectors'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

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
    return <Navigate to={RoutePath.main} replace />
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} replace />
  }

  return children
}

export default RequireAuth
