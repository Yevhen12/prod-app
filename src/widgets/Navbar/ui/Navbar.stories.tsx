import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'sdsdsd',
      password: 'sdfsfs',
      isLoading: false,
      error: null,
    },
  }),
];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: 'sdsdsd',
      password: 'sdfsfs',
      isLoading: false,
      error: null,
    },
  }),
];
