import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AppRoutes } from 'shared/config/routeConfig/routeConfig'
import Input from 'shared/ui/Input/Input'

// interface Props {}

const MainPage: React.FC = memo(() => {
  const { t } = useTranslation(AppRoutes.MAIN)
  const [value, setValue] = useState<string>()

  const onChange = (val: string) => {
    setValue(val)
  }

  return (
    <div>
      {t('main')}
      <Input
        value={value}
        onChange={onChange}
        placeholder="Type text"
      />
    </div>
  )
})

MainPage.displayName = 'MainPage'

export default MainPage
