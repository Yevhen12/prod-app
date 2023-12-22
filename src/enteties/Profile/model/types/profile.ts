import { Currency } from 'enteties/Currency'
import { Country } from 'enteties/Country'

export interface Profile {
  id?: string
  first?: string
  lastname?: string
  age?: string
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}
