import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import LoginForm from './LoginForm'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryWithError: Story = {
  args: {}
}
PrimaryWithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'sdsdsd',
      password: 'sdfsfs',
      isLoading: false,
      error: 'Erororeroeoroero'
    }
  })
]

export const Primary: Story = {
  args: {}
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
  args: {}
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
