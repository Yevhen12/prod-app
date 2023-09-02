import { CounterShema } from 'enteties/Counter'
import { UserSchema } from 'enteties/User'

export interface StateSchema {
  counter: CounterShema
  user: UserSchema
}
