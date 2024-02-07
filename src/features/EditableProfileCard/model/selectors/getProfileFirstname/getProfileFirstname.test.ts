import { getProfileFirstname } from './getProfileFirstname';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileError', () => {
  test('should return correct error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: 'test',
        },
      },
    };
    const expectedValue = 'test';
    expect(getProfileFirstname(state as StateSchema)).toEqual(expectedValue);
  });
});
