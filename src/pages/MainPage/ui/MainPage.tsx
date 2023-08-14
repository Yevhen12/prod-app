import { useTranslation } from 'react-i18next'
import { AppRoutes } from 'shared/config/routeConfig/routeConfig'

// interface Props {}

const MainPage: React.FC = () => {
  const { t } = useTranslation(AppRoutes.MAIN)
  return (
    <div>
      {t('main')}
    </div>
  )
}

export default MainPage
