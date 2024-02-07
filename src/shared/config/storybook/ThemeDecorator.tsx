import { Theme } from '@/shared/const/theme';
import { StoryFn } from '@storybook/react';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  (
    <div id="app" style={{ width: '100%' }} className={`app ${theme}`}>
      <Story />
    </div>
  );
