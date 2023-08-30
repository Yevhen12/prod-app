import { getCounterValue } from './getCounterValue'
import { StateSchema } from 'app/providers/StoreProvider'
import type { DeepPartial } from '@reduxjs/toolkit'

describe('getCounterValue', () => {
  test('should return correct counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    }
    expect(getCounterValue(state as StateSchema)).toBe(10)
  })
})
