import { Theme } from '@/app/providers/ThemeProvider'
import type { Preview } from '@storybook/react'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
// import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { SuspenceDecorator } from '@/shared/config/storybook/SuspenceDecorator'
// import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    SuspenceDecorator
    // RouterDecorator
    // TranslationDecorator
  ]
}

export default preview
