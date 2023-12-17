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
  }
} as Meta<typeof Listbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
