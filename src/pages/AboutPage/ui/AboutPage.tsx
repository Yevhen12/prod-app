import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppRoutes } from 'shared/config/routeConfig/routeConfig'
import Page from 'widgets/Page/Page'

const AboutPage: React.FC = memo(() => {
  const { t } = useTranslation(AppRoutes.ABOUT)
  return (
    <Page>
      {t('about')}
    </Page>
  )
})

AboutPage.displayName = 'AboutPage'

export default AboutPage
