import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';

const meta = {
  title: 'shared/ArticleRating',
  component: ArticleRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
