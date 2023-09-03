import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import Text, { TextTheme } from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Some title',
    text: 'Some text some text some text some text'
  }
}

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Some title',
    text: 'Some text some text some text some text'
  }
}

export const Title: Story = {
  args: {
    title: 'Some title'
  }
}

export const Typography: Story = {
  args: {
    text: 'Some text some text some text some text'
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Some title',
    text: 'Some text some text some text some text'
  }
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorDark: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Some title',
    text: 'Some text some text some text some text'
  }
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TitleDark: Story = {
  args: {
    title: 'Some title'
  }
}
TitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TypographyDark: Story = {
  args: {
    text: 'Some text some text some text some text'
  }
}
TypographyDark.decorators = [ThemeDecorator(Theme.DARK)]
