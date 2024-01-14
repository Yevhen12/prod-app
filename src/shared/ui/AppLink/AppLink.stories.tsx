import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  },
  decorators: [RouterDecorator]
} as Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Test'
  }
}

export const Primary: Story = {
  args: {
    children: 'Test',
    theme: AppLinkTheme.PRIMARY
  }
}

export const Secondary: Story = {
  args: {
    children: 'Test',
    theme: AppLinkTheme.SECONDARY
  }
}

export const PrimaryDark: Story = {
  args: {
    children: 'Test',
    theme: AppLinkTheme.PRIMARY
  }
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
  args: {
    children: 'Test',
    theme: AppLinkTheme.SECONDARY
  }
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
