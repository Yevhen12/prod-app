import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    'storybook-addon-themes',
    // '@storybook/preset-scss',
    // "@storybook/preset-scss",
    // "storybook-css-modules",
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
