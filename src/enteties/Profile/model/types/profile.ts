import { Currency } from 'enteties/Currency'
import { Country } from 'enteties/Country'

export interface Profile {
  first?: string
  lastname?: string
  age?: string
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data: Profile | undefined
  form: Profile | undefined
  isLoading: boolean
  error: string | undefined
  readonly: boolean
}
