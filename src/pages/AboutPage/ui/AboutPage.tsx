import { useTranslation } from 'react-i18next'
import { AppRoutes } from 'shared/config/routeConfig/routeConfig'

const AboutPage: React.FC = () => {
  const { t } = useTranslation(AppRoutes.ABOUT)
  return (
    <div>
      {t('about')}
    </div>
  )
}

export default AboutPage
