import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import CommentCard from './CommentCard';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'enteties/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [RouterDecorator],
} as Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
