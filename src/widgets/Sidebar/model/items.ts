import HomeIcon from '@/shared/assets/icons/home.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticleIcon from '@/shared/assets/icons/articles.svg'
import { getRouteAbout, getRouteArticles, getRouteMain, RoutePath } from '@/shared/const/router'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: getRouteMain(),
    text: 'Main',
    Icon: HomeIcon
  },
  {
    path: getRouteAbout(),
    text: 'About',
    Icon: HomeIcon
  },
  {
    path: RoutePath.profile,
    text: 'Profile',
    Icon: ProfileIcon,
    authOnly: true
  },
  {
    path: getRouteArticles(),
    text: 'Articles',
    Icon: ArticleIcon,
    authOnly: true
  }
]
