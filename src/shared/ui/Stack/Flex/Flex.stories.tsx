import type { Meta, StoryObj } from '@storybook/react'
import Flex from './Flex'

const meta = {
  title: 'shared/Flex',
  component: Flex,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const Row: Story = {
  args: {
    direction: 'row',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>forth</div>
      </>
    )
  }
}

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>forth</div>
      </>
    )
  }
}

export const RowGap4: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>forth</div>
      </>
    )
  }
}

export const RowGap8: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>forth</div>
      </>
    )
  }
}

export const RowGap16: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>forth</div>
      </>
    )
  }
}

export const RowGap32: Story = {
  args: {
    gap: '32',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>forth</div>
      </>
    )
  }
}
