import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
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
Primary.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'sdsdsd',
      password: 'sdfsfs',
      isLoading: false,
      error: null
    }
  })
]

export const Dark: Story = {
  args: {
    isOpen: true
  }
}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: 'sdsdsd',
      password: 'sdfsfs',
      isLoading: false,
      error: null
    }
  })
]
