import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
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
      <button
        data-testid="toggle"
        onClick={toggleSidebar}
      >
        Toggle
      </button>
      <div className={cls.switchers}>
        <LangSwitcher className={cls.langSwitcher} />
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Sidebar
