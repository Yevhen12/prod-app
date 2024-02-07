import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Button } from '../../../Button/Button';
import Dropdown from './Dropdown';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'Test 1',
      },
      {
        content: 'Test 2',
      },
      {
        content: 'Test 3',
      },
    ],
  },
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
