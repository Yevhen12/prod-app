import { User } from '@/enteties/User';
import { rtkApi } from '@/shared/api/rtkApi';
import { JsonSettings } from '../model/types/jsonSettings';

interface SetJsonSettingsArg {
  userId: string;
  jsonSettings: JsonSettings;
}

export const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
      query: ({ userId, jsonSettings }) => ({
        url: '/users/' + userId,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
    getUserById: build.query<User, string>({
      query: (userId) => ({
        url: '/users/' + userId,
        method: 'GET',
      }),
    }),
  }),
});

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;

export const getUserByIdQuery = userApi.endpoints.getUserById.initiate;
