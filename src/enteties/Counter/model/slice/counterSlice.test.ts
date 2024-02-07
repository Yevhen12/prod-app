/* eslint-disable prod-proj-plugin/public-api-imports */
import { CounterShema } from './../types/counterSchema';
import {
  counterReducer,
  counterActions,
} from '@/enteties/Counter/model/slice/counterSlice';

describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterShema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: 9,
    });
  });
  test('increment', () => {
    const state: CounterShema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment)).toEqual({
      value: 11,
    });
  });
  test('without state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    });
  });
});
