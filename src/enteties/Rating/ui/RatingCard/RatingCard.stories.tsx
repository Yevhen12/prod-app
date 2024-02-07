import type { Meta, StoryObj } from '@storybook/react';
import RatingCard from './RatingCard';

const meta = {
  title: 'shared/RatingCard',
  component: RatingCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
