import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import Tabs from './Tabs';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    argTypes: { onClick: { action: 'onClick' } },
  },
} as Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tabs: [
      {
        value: 'test1',
        content: 'test1',
      },
      {
        value: 'test2',
        content: 'test2',
      },
      {
        value: 'test3',
        content: 'test3',
      },
    ],
    value: 'test2',
    onTabClick: () => console.log('onTabClicked'),
  },
};

export const Dark: Story = {
  args: {
    tabs: [
      {
        value: 'test1',
        content: 'test1',
      },
      {
        value: 'test2',
        content: 'test2',
      },
      {
        value: 'test3',
        content: 'test3',
      },
    ],
    value: 'test2',
    onTabClick: () => console.log('onTabClicked'),
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
