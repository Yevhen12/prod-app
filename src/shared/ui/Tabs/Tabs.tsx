import { FC, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Card, { CardTheme } from '../Card/Card'
import cls from './Tabs.module.scss'

export interface TabItem {
  value: string
  content: string
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

const Tabs: FC<TabsProps> = memo(({
  className = '',
  tabs,
  value,
  onTabClick
}: TabsProps) => {
  const renderTabs = useMemo(() => tabs.map((tab) => (
    <Card
      onClick={() => onTabClick(tab)}
      theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
      key={tab.value}
    >
      {tab.content}
    </Card>
  )), [onTabClick, tabs, value])

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {renderTabs}
    </div>
  )
})

Tabs.displayName = 'Tabs'

export default Tabs
