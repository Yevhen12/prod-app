import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import AdminPanelPage from './AdminPanelPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
  title: 'page/AdminPanelPage',
  component: AdminPanelPage,
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
} as Meta<typeof AdminPanelPage>

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
