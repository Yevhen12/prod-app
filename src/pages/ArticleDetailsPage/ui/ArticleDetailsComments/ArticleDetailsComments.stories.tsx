import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import ArticleDetailsComments from './ArticleDetailsComments'

const meta = {
  title: 'page/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ArticleDetailsComments>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
Primary.decorators = [StoreDecorator({})]

export const Dark: Story = {
  args: {
    id: '1'
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
