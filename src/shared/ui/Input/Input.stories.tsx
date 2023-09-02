import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import Input from './Input'

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Type text',
    value: 'Yevhen'
  }
}

export const Dark: Story = {
  args: {
    placeholder: 'Type text',
    value: 'Yevhen'
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
