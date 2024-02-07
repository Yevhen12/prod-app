import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import EditableProfileCard from './EditableProfileCard';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
Primary.decorators = [StoreDecorator({})];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
