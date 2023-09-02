import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import LoginModal from './LoginModal'

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isOpen: true
  }
}

export const Dark: Story = {
  args: {
    isOpen: true
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
