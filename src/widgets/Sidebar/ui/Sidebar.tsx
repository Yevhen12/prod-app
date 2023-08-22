import { type FC, useState } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import HomeIcon from 'shared/assets/icons/home.svg'
import OutlineListIcon from 'shared/assets/icons/outline-list.svg'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  const toggleSidebar = (): void => {
    setCollapsed(prev => !prev)
  }
  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}
      data-testid="sidebar"
    >
      <Button
        className={cls.collapsedBtn}
        data-testid="toggle"
        onClick={toggleSidebar}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.XL}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.links}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
        >
          <HomeIcon width={20} className={cls.icon} />
          <span className={cls.link}>Main</span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
        >
          <HomeIcon width={20} className={cls.icon} />
          <span className={cls.link}>About</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <LangSwitcher className={cls.langSwitcher} short={collapsed} />
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Sidebar
