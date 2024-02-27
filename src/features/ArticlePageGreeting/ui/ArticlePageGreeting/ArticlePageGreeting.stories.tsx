import type { Meta, StoryObj } from '@storybook/react';
import ArticlePageGreeting from './ArticlePageGreeting';

const meta = {
  title: 'features/ArticlePageGreeting',
  component: ArticlePageGreeting,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlePageGreeting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
