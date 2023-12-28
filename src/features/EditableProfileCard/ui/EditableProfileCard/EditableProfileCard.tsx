import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCard.module.scss'
import { memo, useCallback } from 'react'
import { Country } from '@/enteties/Country'
import { Currency } from '@/enteties/Currency'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import Text, { TextAlign, TextTheme } from '@/shared/ui/Text/Text'
import { ProfileCard } from '@/enteties/Profile'
import { ProfileValidateError } from '@/enteties/Profile/model/types/ProfileValidateError'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileEror'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateError'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader'
import { VStack } from '@/shared/ui/Stack'

const reducers: ReducersList = {
  profile: profileReducer
}

interface EditableProfileCardProps {
  className?: string
  id: string
}

const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className = '', id } = props
  const dispatch = useAppDispatch()
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileLoading)
  const readonly = useSelector(getProfileReadonly)
  const form = useSelector(getProfileForm)
  const validateErrors = useSelector(getProfileValidateErrors)
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
      <VStack gap='8' max className={classNames(cls.editableProfileCard, {}, [className])}>
        <EditableProfileCardHeader />
        {validateErrors?.length && validateErrors?.map(err => (
          <Text
            align={TextAlign.LEFT}
            key={err}
            theme={TextTheme.ERROR}
            title={validateErrorsTranslation[err]}
            data-testid={'EditableProfileCard.Error'}
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
      </VStack>
    </DynamicModuleLoader>
  )
})

EditableProfileCard.displayName = 'EditableProfileCard'

export default EditableProfileCard
