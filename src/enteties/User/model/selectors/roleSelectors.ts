import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import { UserRole } from '../consts/userConsts'

export const getAllRoles = (state: StateSchema) => state.user.authData?.roles ?? undefined

export const getIsUserAdmin = createSelector(getAllRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)))
export const getIsUserManager = createSelector(getAllRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)))
