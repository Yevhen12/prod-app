import { UserRole } from '@/enteties/User';
import {
  getRouteAbout,
  getRouteAdmin,
  // getRouteProfile,
} from '@/shared/const/router';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';

describe('App router should display correct pages', () => {
  test('Page should be rendered', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });
  test('Not Found page should be rendered', async () => {
    renderComponent(<AppRouter />, {
      route: '/dsdsdnsdhsjdsd',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });
  // test('Should be redirected to Main Page', async () => {
  //   renderComponent(<AppRouter />, {
  //     route: getRouteProfile('1'),
  //   });

  //   const page = await screen.findByTestId('MainPage');
  //   expect(page).toBeInTheDocument();
  // });
  // test('Should be redirected to Main Page', async () => {
  //   renderComponent(<AppRouter />, {
  //     route: getRouteProfile('1'),
  //     initialState: { user: { _mounted: true, authData: { id: '1' } } },
  //   });

  //   const page = await screen.findByTestId('ProfilePage');
  //   expect(page).toBeInTheDocument();
  // });
  test('should render Forbidden Page. User does not have allowed role', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _mounted: true, authData: { id: '1', roles: [UserRole.USER] } },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });
  test('should render Admin Page. User has allowed role', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _mounted: true,
          authData: { id: '1', roles: [UserRole.ADMIN] },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
