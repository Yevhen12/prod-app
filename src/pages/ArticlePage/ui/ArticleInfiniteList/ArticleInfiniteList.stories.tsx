import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import ArticleInfiniteList from './ArticleInfiniteList'

const meta = {
  title: 'page/ArticlePage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [RouterDecorator]
} as Meta<typeof ArticleInfiniteList>

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
