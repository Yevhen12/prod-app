import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { AppRoutes } from '@/shared/const/router'

const AboutPage: React.FC = memo(() => {
  const { t } = useTranslation(AppRoutes.ABOUT)
  return (
    <Page>
      {t('about')}
      fdfd
      dsdsfdfdf
      fdfdf
    </Page>
  )
})

AboutPage.displayName = 'AboutPage'

export default AboutPage
