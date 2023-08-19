import { StoryFn } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div style={{ width: '100%' }} className={`app ${theme}`}>
    <Story />
  </div>
)
