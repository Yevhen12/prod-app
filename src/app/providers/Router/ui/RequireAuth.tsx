import { getUserAuthData } from 'enteties/User'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: JSX.Element
}

const RequireAuth = ({ children }: RequireAuthProps): JSX.Element => {
  const authUser = useSelector(getUserAuthData)

  if (!authUser) {
    return <Navigate to={RoutePath.main} replace />
  }
  return children
}

export default RequireAuth
