import { type FC, useState, useMemo, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { sidebarItemsList } from 'widgets/Sidebar/model/items'
import cls from './Sidebar.module.scss'
import SidebarItem from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  const toggleSidebar = (): void => {
    setCollapsed(prev => !prev)
  }

  const itemsList = useMemo(() => sidebarItemsList.map(item => (
    <SidebarItem
      key={item.path}
      item={item}
      collapsed={collapsed}
    />
  )), [collapsed])
  return (
    <menu
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
        {itemsList}
      </div>
      <div className={cls.switchers}>
        <LangSwitcher className={cls.langSwitcher} short={collapsed} />
        <ThemeSwitcher />
      </div>
    </menu>
  )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar
