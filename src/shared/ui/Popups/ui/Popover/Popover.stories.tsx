import type { Meta, StoryObj } from '@storybook/react'
import Popover from './Popover'

const meta = {
  title: 'shared/Popover',
  component: Popover,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [
    Story => <div style={{ padding: '100px' }}><Story /></div>
  ]
} as Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const TopLeft: Story = {
  args: {}
}

export const TopRight: Story = {
  args: {}
}

export const BottomLeft: Story = {
  args: {}
}

export const BottomRight: Story = {
  args: {}
}
