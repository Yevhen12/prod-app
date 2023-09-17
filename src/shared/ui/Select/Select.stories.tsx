import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import Select from './Select'

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Some label',
    options: [
      { value: '1', content: '111111' },
      { value: '2', content: '222222' },
      { value: '3', content: '333333' }
    ]
  }
}

export const Dark: Story = {
  args: {
    label: 'Some label',
    options: [
      { value: '1', content: '111111' },
      { value: '2', content: '222222' },
      { value: '3', content: '333333' }
    ]
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
