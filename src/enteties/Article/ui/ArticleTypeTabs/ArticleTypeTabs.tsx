import { ArticleType } from '../../model/consts/articleConsts'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs'
import cls from './ArticleTypeTabs.module.scss'

interface ArticleTypeTabsProps {
  type: ArticleType
  onChangeTab: (tab: TabItem) => void
}

const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({ type, onChangeTab }) => {
  const { t } = useTranslation()

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('allArticles')
    },
    {
      value: ArticleType.IT,
      content: t('it')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('science')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('economics')
    }
  ], [t])

  return (
    <Tabs
      className={cls.tabs}
      tabs={typeTabs}
      value={type}
      onTabClick={onChangeTab}
    />
  )
}

export default ArticleTypeTabs
