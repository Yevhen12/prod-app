import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Test'
  }
}

export const Clear: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.CLEAR
  }
}

export const Secondary: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.OUTLINE
  }
}
