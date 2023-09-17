import { Profile } from '../../model/types/profile'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import Input from 'shared/ui/Input/Input'
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Loader } from 'shared/ui/Loader/Loader'
import cls from './ProfileCard.module.scss'
import { Currency, CurrencySelect } from 'enteties/Currency'
import { Country, CountrySelect } from 'enteties/Country'
import Avatar from 'shared/ui/Avatar/Avatar'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (val: string) => void
  onChangeLastname?: (val: string) => void
  onChangeCity?: (val: string) => void
  onChangeAge?: (val: string) => void
  onChangeUsername?: (val: string) => void
  onChangeAvatar?: (val: string) => void
  onChangeCurrency?: (val: Currency) => void
  onChangeCountry?: (val: Country) => void
}

const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry
}) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, {}, [className ?? '', cls.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className ?? '', cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('errorOccurs')}
          text={error}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.profileCard, {}, [className ?? ''])}>
      <div className={cls.data}>
        <div className={cls.avatarWrapper}>
          {data?.avatar && <Avatar src={data.avatar} alt='avatar' size={100} />}
        </div>
        <Input
          value={data?.first}
          placeholder={t('yourName')}
          className={cls.input}
          onChange={onChangeFirstname}
          readOnly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('yourSurname')}
          className={cls.input}
          onChange={onChangeLastname}
          readOnly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('yourAge')}
          className={cls.input}
          onChange={onChangeAge}
          readOnly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('yourCity')}
          className={cls.input}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('yourUsername')}
          className={cls.input}
          onChange={onChangeUsername}
          readOnly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('yourAvatar')}
          className={cls.input}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  )
}

export default ProfileCard
