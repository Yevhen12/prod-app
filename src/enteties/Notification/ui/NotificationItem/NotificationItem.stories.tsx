import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import NotificationItem from './NotificationItem';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'enteties/NotificationItem',
  component: NotificationItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
