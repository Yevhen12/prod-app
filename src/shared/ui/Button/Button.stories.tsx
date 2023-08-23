import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'

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

export const BackgroundTheme: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const ClearInvertedTheme: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.CLEAR_INVERTED
  }
}

export const SquareSmall: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const SqureLarge: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const SquareXLarge: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const Small: Story = {
  args: {
    children: 'Test',
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const Large: Story = {
  args: {
    children: 'Test',
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const XLarge: Story = {
  args: {
    children: 'Test',
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}
