import { Profile, ProfileSchema } from './model/types/profile'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
import ProfileCard from './ui/ProfileCard/ProfileCard'
import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { getProfileError } from './model/selectors/getProfileError/getProfileEror'
import { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading'
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm'
import { updateProfileData } from './model/services/updateProfileData/updateProfileData'

export {
  type Profile,
  type ProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
  getProfileData,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
  getProfileForm,
  updateProfileData
}
