import { UserRole } from '@/enteties/User'
import { RouteProps } from 'react-router-dom'

export type RouteAppProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
