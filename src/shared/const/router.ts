export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLES = 'articles',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ARTICLES_DETAILS = 'articles_details',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticlesNew = () => '/articles/new';
export const getRouteArticlesEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteArticlesDetails = (id: string) => `/articles/${id}`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: getRouteMain(),
  [AppRoutes.ABOUT]: getRouteAbout(),
  [AppRoutes.PROFILE]: getRouteProfile(':id'),
  [AppRoutes.ARTICLES]: getRouteArticles(),
  [AppRoutes.ARTICLE_CREATE]: getRouteArticlesNew(),
  [AppRoutes.ARTICLE_EDIT]: getRouteArticlesEdit(':id'),
  [AppRoutes.ARTICLES_DETAILS]: getRouteArticlesDetails(':id'),
  [AppRoutes.ADMIN_PANEL]: getRouteAdmin(),
  [AppRoutes.FORBIDDEN]: getRouteForbidden(),

  [AppRoutes.NOT_FOUND]: getRouteNotFound(),
};
