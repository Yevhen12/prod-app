import type { Meta, StoryObj } from '@storybook/react';
import { Article } from '@/enteties/Article';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import ArticleRecommendationsList from './ArticleRecommendationsList';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [RouterDecorator],
} as Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: {
    id: '1',
    username: 'admin',
  },
  blocks: [],
  type: [],
  title: '',
  subtitle: '',
};

export const Primary: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },
};
Primary.decorators = [StoreDecorator({})];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
