/* eslint-disable indent */
import { AppDispatch } from '@/app/providers/StoreProvider'
import { getIsUserAdmin, getIsUserManager, getUserAuthData, userActions } from '@/enteties/User'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { classNames } from '@/shared/lib/classNames/classNames'
import Avatar from '@/shared/ui/Avatar/Avatar'
import { Dropdown } from '@/shared/ui/Popups'

interface AvatarDropdownProps {
  className?: string
}

const AvatarDropdown: FC<AvatarDropdownProps> = ({ className = '' }) => {
  const { t } = useTranslation()

  const dispatch = useDispatch<AppDispatch>()
  const isAdmin = useSelector(getIsUserAdmin)
  const isManager = useSelector(getIsUserManager)
  const authData = useSelector(getUserAuthData)

  const isAdminPanelAvailable = isAdmin || isManager

  const onLogOut = useCallback(() => {
    dispatch(userActions.logOut())
  }, [dispatch])

  if (!authData) {
    return null
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction='bottom_left'
      items={[
        ...(isAdminPanelAvailable
          ? [{
              content: t('admin'),
              href: RoutePath.admin_panel
            }]
          : []),
        {
          content: t('profile'),
          href: RoutePath.profile + authData.id
        },
        {
          content: t('signOut'),
          onClick: onLogOut
        }
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  )
}

export default AvatarDropdown
