import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import MainPage from './MainPage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'

const meta = {
  title: 'page/MainPage',
  component: MainPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  },
  decorators: [RouterDecorator]
} as Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
Light.decorators = [StoreDecorator({})]

export const Dark: Story = {
  args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
