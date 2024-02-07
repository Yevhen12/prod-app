import { getLoginLoading } from './getLoginLoading';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginLoading', () => {
  test('should render status laoding', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error occur',
        password: '',
        username: '',
        isLoading: true,
      },
    };

    expect(getLoginLoading(state as StateSchema)).toBe(true);
  });
});
