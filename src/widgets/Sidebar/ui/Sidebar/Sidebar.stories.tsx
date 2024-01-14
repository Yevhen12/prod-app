import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import Sidebar from './Sidebar'
import { Theme } from '@/shared/const/theme'

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [RouterDecorator]
} as Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
Light.decorators = [StoreDecorator({
  user: { authData: {} }
})]
export const Dark: Story = {
  args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: { authData: {} }
})]

export const NoAuth: Story = {
  args: {}
}
NoAuth.decorators = [StoreDecorator({
  user: {
    authData: undefined
  }
})]
