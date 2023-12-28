import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AppRoutes } from '@/shared/config/routeConfig/routeConfig'
import Input from '@/shared/ui/Input/Input'
import { Listbox } from '@/shared/ui/Popups'
import { HStack } from '@/shared/ui/Stack'
import Page from '@/widgets/Page/ui/Page'

// interface Props {}

const MainPage: React.FC = memo(() => {
  const { t } = useTranslation(AppRoutes.MAIN)
  const [value, setValue] = useState<string>()

  const onChange = (val: string) => {
    setValue(val)
  }

  return (
    <Page>
      {t('main')}
      <Input
        value={value}
        onChange={onChange}
        placeholder="Type text"
      />
      <div>twtttd</div>
      <div>twtttd</div>
      <HStack>
        <div>twtttd</div>
        <Listbox
          defaultValue='some value'
          onChange={(value: string) => { }}
          value={undefined}
          items={[
            { value: 'test1', content: 'test1' },
            { value: 'test2', content: 'test2', disabled: true },
            { value: 'test3', content: 'test3', disabled: false }
          ]}
        />
      </HStack>
      <div>twtttd</div>
      <div>twtttd</div>
      <div>twtttd</div>
    </Page>
  )
})

MainPage.displayName = 'MainPage'

export default MainPage
