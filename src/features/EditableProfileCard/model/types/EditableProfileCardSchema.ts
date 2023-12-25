import { Profile } from 'enteties/Profile'
import { ProfileValidateError } from '../consts/profileCardConsts'

export interface ProfileSchema {
  data: Profile | undefined
  form: Profile | undefined
  isLoading: boolean
  error: string | undefined
  readonly: boolean
  validateErrors: ProfileValidateError[] | undefined
}
