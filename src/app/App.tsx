import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/Router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import React, { Suspense, useEffect } from 'react';
import { PageLoader } from '@/widgets/PageLoader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './providers/StoreProvider';
import { getUserMounted, initAuthData } from '@/enteties/User';
import './styles/index.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { ToggleFeatures } from '@/shared/features/ToggleFeatures/ToggleFeatures';
import { MainLayout } from '@/shared/layouts';

const App: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const isMounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  const prootectedTheme = theme ?? '';

  if (!isMounted) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div id="app" className={classNames('app', {}, [prootectedTheme])}>
          <Suspense fallback={<PageLoader />}>
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div
          id="app"
          className={classNames('app_redesigned', {}, [prootectedTheme])}
        >
          <Suspense fallback={<PageLoader />}>
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={<div>dsdsdsdsds</div>}
            />
          </Suspense>
        </div>
      }
    />
  );
};

export default App;
