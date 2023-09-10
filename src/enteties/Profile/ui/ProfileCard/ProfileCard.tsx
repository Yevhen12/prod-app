import { getProfileData } from 'enteties/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'enteties/Profile/model/selectors/getProfileError/getProfileEror'
import { getProfileLoading } from 'enteties/Profile/model/selectors/getProfileLoading/getProfileLoading'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import Text from 'shared/ui/Text/Text'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileLoading)

  return (
    <div className={classNames(cls.profileCard, {}, [className ?? ''])}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('yourName')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('yourSurname')}
          className={cls.input}
        />
      </div>
    </div>
  )
}

export default ProfileCard
