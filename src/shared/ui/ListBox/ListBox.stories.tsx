import type { Meta, StoryObj } from '@storybook/react'
import Listbox from './ListBox'

const meta = {
  title: 'shared/Listbox',
  component: Listbox,
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
} as Meta<typeof Listbox>

export default meta
type Story = StoryObj<typeof meta>

export const TopLeft: Story = {
  args: {
    direction: 'top_left',
    value: 'test',
    items: [
      { content: 'test', value: 'test' },
      { content: 'test1', value: 'test1' },
      { content: 'test2', value: 'test2' }
    ]
  }
}

export const TopRight: Story = {
  args: {
    direction: 'top_right',
    value: 'test',
    items: [
      { content: 'test', value: 'test' },
      { content: 'test1', value: 'test1' },
      { content: 'test2', value: 'test2' }
    ]
  }
}

export const BottomLeft: Story = {
  args: {
    direction: 'bottom_left',
    value: 'test',
    items: [
      { content: 'test', value: 'test' },
      { content: 'test1', value: 'test1' },
      { content: 'test2', value: 'test2' }
    ]
  }
}

export const BottomRight: Story = {
  args: {
    direction: 'bottom_right',
    value: 'test',
    items: [
      { content: 'test', value: 'test' },
      { content: 'test1', value: 'test1' },
      { content: 'test2', value: 'test2' }
    ]
  }
}
