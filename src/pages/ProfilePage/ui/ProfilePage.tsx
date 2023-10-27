import {
  fetchProfileData,
  profileReducer,
  ProfileCard,
  getProfileLoading,
  getProfileError,
  profileActions,
  getProfileReadonly,
  getProfileForm,
  getProfileValidateErrors,
  ProfileValidateError
} from 'enteties/Profile'
import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Currency } from 'enteties/Currency'
import { Country } from 'enteties/Country'
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useParams } from 'react-router-dom'

export interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileLoading)
  const readonly = useSelector(getProfileReadonly)
  const form = useSelector(getProfileForm)
  const validateErrors = useSelector(getProfileValidateErrors)
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  const validateErrorsTranslation = {
    [ProfileValidateError.INCORRECT_AGE]: t('errorIncorectAge'),
    [ProfileValidateError.INCORRECT_COUNTRY]: t('errorIncorectCountry'),
    [ProfileValidateError.INCORRECT_USER_DATA]: t('errorIncorectUserData'),
    [ProfileValidateError.NO_DATA]: t('errorNoData')
  }

  useInitialEffect(() => {
    void dispatch(fetchProfileData(id))
  })

  const onChangeFirstname = useCallback((val: string) => {
    dispatch(profileActions.updateProfile({ first: val }))
  }, [dispatch])

  const onChangeLastname = useCallback((val: string) => {
    dispatch(profileActions.updateProfile({ lastname: val }))
  }, [dispatch])

  const onChangeAge = useCallback((val: string) => {
    dispatch(profileActions.updateProfile({ age: val }))
  }, [dispatch])

  const onChangeCity = useCallback((val: string) => {
    dispatch(profileActions.updateProfile({ city: val }))
  }, [dispatch])

  const onChangeUsername = useCallback((val: string) => {
    dispatch(profileActions.updateProfile({ username: val }))
  }, [dispatch])

  const onChangeAvatar = useCallback((val: string) => {
    dispatch(profileActions.updateProfile({ avatar: val }))
  }, [dispatch])

  const onChangeCurrency = useCallback((val: Currency) => {
    dispatch(profileActions.updateProfile({ currency: val }))
  }, [dispatch])

  const onChangeCountry = useCallback((val: Country) => {
    dispatch(profileActions.updateProfile({ country: val }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map(err => (
          <Text
            align={TextAlign.LEFT}
            key={err}
            theme={TextTheme.ERROR}
            title={validateErrorsTranslation[err]}
          />
        ))}
        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
