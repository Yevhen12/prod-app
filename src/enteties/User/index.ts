import { userSlice, userActions } from './model/slice/userSlice'
import { UserSchema, User } from './model/types/user'
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'

export {
  userActions,
  userSlice,
  type UserSchema,
  type User,
  getUserAuthData
}
