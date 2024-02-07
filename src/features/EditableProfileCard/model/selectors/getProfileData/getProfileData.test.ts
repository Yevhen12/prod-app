import { getProfileData } from './getProfileData';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/enteties/Country';
import { Currency } from '@/enteties/Currency';

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
        data: profileData,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });
});
