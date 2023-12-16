import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'enteties/Profile'
import { getUserAuthData } from 'enteties/User'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import HStack from 'shared/ui/Stack/HStack/HStack'
import Text from 'shared/ui/Text/Text'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const readOnly = useSelector(getProfileReadonly)
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)

  const canEdit = authData?.id === profileData?.id

  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(async () => {
    await dispatch(updateProfileData(profileData?.id))
  }, [dispatch, profileData?.id])

  return (
    <HStack justify='between' max>
      <Text title={t('profile')} />
      {canEdit && (
        readOnly
          ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
            >
              {t('edit')}
            </Button>
            // eslint-disable-next-line @typescript-eslint/indent
          )
          : (
            <HStack gap='8'>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCancel}
              >
                {t('cancel')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onSave}
              >
                {t('save')}
              </Button>
            </HStack>
            // eslint-disable-next-line @typescript-eslint/indent
          )
      )}

    </HStack>
  )
}

export default ProfilePageHeader
