import type { Preview } from '@storybook/react'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
// import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { SuspenceDecorator } from '@/shared/config/storybook/SuspenceDecorator'
import { Theme } from '@/shared/const/theme'
// import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    themes: {
      default: 'dark',
      list: [
        { name: 'dark', class: Theme.DARK, color: '#ffffff' },
        { name: 'light', class: Theme.LIGHT, color: '#000000' },
        { name: 'orange', class: Theme.ORANGE, color: '#ffb005' }
      ]
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
// NOTE: There's no need to ThemeDecorator. 'storybook-addon-themes' can handle it. Futhermoe its even better to use this addon as it prevents us from dofferent bugs.

export default preview
