import { CounterShema } from 'enteties/Counter'
import { UserSchema } from 'enteties/User'
import { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterShema
  user: UserSchema
  loginForm?: LoginSchema
}
