import { getProfileForm } from './getProfileForm';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/enteties/Currency';
import { Country } from '@/enteties/Country';

describe('getProfileData', () => {
  test('should return correct profile data', () => {
    const profileData = {
      first: 'test',
      lastname: 'test',
      age: '12',
      currency: Currency.UA,
      country: Country.England,
      city: 'Lviv',
      username: 'neylen',
      avatar: 'testUrl',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: profileData,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(profileData);
  });
});
