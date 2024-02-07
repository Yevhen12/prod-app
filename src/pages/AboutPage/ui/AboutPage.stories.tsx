import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import AboutPage from './AboutPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'page/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [RouterDecorator],
} as Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
