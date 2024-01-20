import { userSlice, userActions, userReducer } from './model/slice/userSlice'
import { UserSchema, User } from './model/types/user'
import { UserRole } from './model/consts/userConsts'
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
import { getIsUserAdmin, getIsUserManager, getAllRoles } from './model/selectors/roleSelectors'
import { getUserMounted } from './model/selectors/getUserMounted/getUserModunted'

export {
  userActions,
  userReducer,
  userSlice,
  type UserSchema,
  type User,
  getUserAuthData,
  UserRole,
  getIsUserAdmin,
  getIsUserManager,
  getUserMounted,
  getAllRoles
}
