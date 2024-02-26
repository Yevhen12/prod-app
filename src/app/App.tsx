import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/Router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import React, { Suspense, useEffect } from 'react';
import { PageLoader } from '@/widgets/PageLoader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './providers/StoreProvider';
import {
  userActions,
  getUserMounted,
  useJsonSettingsByKey,
} from '@/enteties/User';
import './styles/index.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme';

const App: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const isMounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  const prootectedTheme = theme ?? '';

  const themeFromSettings = useJsonSettingsByKey('theme');
  const isFirstVisit = useJsonSettingsByKey('isFirstVisit');

  console.log('themeFromSettings', themeFromSettings);
  console.log('isFirstVisit', isFirstVisit);

  return (
    <div id="app" className={classNames('app', {}, [prootectedTheme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isMounted ? <AppRouter /> : null}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
