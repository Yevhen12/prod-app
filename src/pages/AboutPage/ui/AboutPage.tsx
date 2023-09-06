import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppRoutes } from 'shared/config/routeConfig/routeConfig'

const AboutPage: React.FC = memo(() => {
  const { t } = useTranslation(AppRoutes.ABOUT)
  return (
    <div>
      {t('about')}
    </div>
  )
})

AboutPage.displayName = 'AboutPage'

export default AboutPage
