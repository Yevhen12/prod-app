import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, ReactElement } from 'react';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  toolbar?: ReactElement;
  sidebar: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({
  className = '',
  header,
  content,
  toolbar,
  sidebar,
}) => {
  return (
    <div className={classNames(cls.mainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.content}>{content}</div>
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
};

export default MainLayout;
