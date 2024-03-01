import { type FC, useState, useMemo, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme, ButtonSize } from '@/shared/ui/Button/Button';
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { sidebarItemsList } from '../../model/items';
import cls from './Sidebar.module.scss';
import SidebarItem from '../SidebarItem/SidebarItem';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import { ToggleFeatures } from '@/shared/features/ToggleFeatures/ToggleFeatures';
import { AppLogo } from '@/shared/ui/AppLogo';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const toggleSidebar = (): void => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <aside
          className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
            className ?? '',
          ])}
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
          <VStack role="navigation" gap="8" align="start" className={cls.links}>
            {itemsList}
          </VStack>
          <div className={cls.switchers}>
            <LangSwitcher className={cls.langSwitcher} short={collapsed} />
            <ThemeSwitcher />
          </div>
        </aside>
      }
      on={
        <aside
          className={classNames(
            cls.sidebarRedesigned,
            { [cls.collapsed]: collapsed },
            [className ?? ''],
          )}
          data-testid="sidebar"
        >
          <AppLogo className={cls.appLogo} />
          fddfdfdffdfdfd
        </aside>
      }
    />
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
