import { getLoginError } from './getLoginError';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginError', () => {
  test('should render correct error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error occur',
        password: '',
        username: '',
        isLoading: false,
      },
    };

    expect(getLoginError(state as StateSchema)).toBe('error occur');
  });
});
