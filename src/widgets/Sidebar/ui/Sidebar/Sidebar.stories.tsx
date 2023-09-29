import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import Sidebar from './Sidebar'

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
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
