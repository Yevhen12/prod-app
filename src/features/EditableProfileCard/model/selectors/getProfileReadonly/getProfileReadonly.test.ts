import { getProfileReadonly } from './getProfileReadonly';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileError', () => {
  test('should return correct isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    const expectedValue = true;
    expect(getProfileReadonly(state as StateSchema)).toEqual(expectedValue);
  });

  test('without data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    const expectedValue = false;
    expect(getProfileReadonly(state as StateSchema)).toEqual(expectedValue);
  });
});
