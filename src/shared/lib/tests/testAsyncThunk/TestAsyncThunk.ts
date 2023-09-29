import { StateSchema } from 'app/providers/StoreProvider'
import { AsyncThunkAction } from '@reduxjs/toolkit'
// import axios, { AxiosStatic } from 'axios'

type actionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

// TODO: when figure out how to fix extra types add api here
// jest.mock('axios')

// const mockedAxios = jest.mocked(axios, { shallow: false })

export class TestAsynkThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: actionCreatorType<Return, Arg, RejectedValue>
  // api: jest.MockedFunctionDeep<AxiosStatic>
  // navigate: jest.MockedFn<any>

  constructor (
    actionCreator: actionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>
  ) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)
    // this.api = mockedAxios
    // this.navigate = jest.fn()
  }

  async callThunk (arg?: Arg) {
    const action = this.actionCreator(arg as Arg)
    const result = await action(this.dispatch, this.getState, undefined)

    return result
  }
}
