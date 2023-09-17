import { FC, memo } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from 'widgets/Sidebar/model/items'
import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'enteties/User'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)
  if (item.authOnly && !isAuth) {
    return null
  }
  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>

  )
})

SidebarItem.displayName = 'SidebarItem'

export default SidebarItem
