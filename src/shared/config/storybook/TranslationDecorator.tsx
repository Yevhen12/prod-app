import { StoryFn } from '@storybook/react'
import i18n from '../i18n/i18n'
import { I18nextProvider } from 'react-i18next'
import { Suspense } from 'react'

// eslint-disable-next-line react/display-name
export const TranslationDecorator = (Story: StoryFn) => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="">
      <Story />
    </Suspense>
  </I18nextProvider>

)
