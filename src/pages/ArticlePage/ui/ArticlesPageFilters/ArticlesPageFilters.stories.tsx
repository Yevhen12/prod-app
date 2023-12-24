import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import ArticlesPageFilters from './ArticlesPageFilters'

const meta = {
  title: 'page/ArticlePage/ArticlesPageFilters',
  component: ArticlesPageFilters,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ArticlesPageFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
Primary.decorators = [StoreDecorator({})]

export const Dark: Story = {
  args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
