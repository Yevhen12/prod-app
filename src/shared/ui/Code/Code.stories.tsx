import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import Code from './Code'

const meta = {
  title: 'shared/Code',
  component: Code,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: `
    import type { Meta, StoryObj } from '@storybook/react'
    import { Theme } from 'app/providers/ThemeProvider'
    import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
    import Code from './Code'
    
    const meta = {
      title: 'shared/Code',
      component: Code,
      parameters: {
        layout: 'centered'
      },
      tags: ['autodocs'],
      argTypes: {
        backgroundColor: { control: 'color' }
      }
    } as Meta<typeof Code>
`
  }
}

export const Dark: Story = {
  args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
