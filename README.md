## Run project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start server + frontend project in dev
```

----

## Scripts

- `npm run start` - Launches the frontend project on the webpack dev server.
- `npm run start:vite` - Launches the frontend project on Vite.
- `npm run start:dev` - Launches the frontend project on the webpack dev server with backend.
- `npm run start:dev:vite` -  Launches the frontend project on Vite with backend.
- `npm run start:dev:server` - Launches the backend server.
- `npm run build:prod` - Builds the project in production mode.
- `npm run build:dev` -  Builds the project in development mode (not minimized).
- `npm run lint:ts` - Checks TypeScript files with the linter.
- `npm run lint:ts:fix` - Fixes TypeScript files with the linter.
- `npm run lint:scss` - Checks SCSS files with the style linter.
- `npm run lint:scss:fix` - Fixes SCSS files with the style linter.
- `npm run test:unit` - Runs unit tests with Jest.
- `npm run test:ui` - Runs snapshot tests with Loki.
- `npm run test:ui:ok` - Confirms new snapshots.
- `npm run test:ui:ci` - Runs snapshot tests in CI.
- `npm run test:ui:report` - Generates a full report for snapshot tests.
- `npm run test:ui:json` - Generates a JSON report for snapshot tests.
- `npm run test:ui:html` - Generates an HTML report for snapshot tests.
- `npm run storybook` - Launches Storybook.
- `npm run storybook:build` - Builds the Storybook.
- `npm run prepare` - Pre-commit hooks.
- `npm run generate:slice` - Script for generating FSD slices.

----

## Project architecture

The project is written in accordance with the Feature Sliced Design methodology.

Link to the documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library for working with translations.
Translation files are stored in public/locales.

For comfortable work, I recommend installing a plugin for WebStorm/VSCode.

Documentation i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project employs four types of tests:
1) Regular unit tests with Jest - `npm run test:unit`
2) Component tests using React Testing Library -`npm run test:unit`
3) Snapshot testing with Loki `npm run test:ui`
4) End-to-End (e2e) testing with Cypress `npm run test:e2e`

Details - [testing documentstion](/docs/tests.md)

----

## Linters

The project uses ESLint to check TypeScript code and Stylelint to check style files.

Also, for strict control of the main architectural principles 
a custom ESLint plugin *eslint-plugin-prod-proj-plugin*,
which contains 3 rules:
1) path-checker - prohibits the use of absolute imports within a single module.
2) layer-imports - checks the correctness of layer usage from the perspective of FSD 
(for example, widgets cannot be used in features and entities).
3) public-api-imports - allows imports from other modules only from the public API. Has auto-fix capability.



##### Run linters
- `npm run lint:ts` - Checking TypeScript files with a linter.
- `npm run lint:ts:fix` - Fix TypeScript files with a linter.
- `npm run lint:scss` - Checking styles files with a linter.
- `npm run lint:scss:fix` - Fix styles files with a linter.

----
## Storybook

In the project, story cases are described for each component.
Server requests are mocked using the storybook-addon-mock.

A file with story cases is created next to the component with the extension .stories.tsx.

Run storybook:
- `npm run storybook`

Details: [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Project configuration

For development project contains 2 builders
1. Webpack - ./config/build
2. vite - vite.config.ts

Both builders are adapted for the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - testing configuration
- /config/storybook - storybook configuration

Folder `scripts` contains different scripts for reafactoring\simplifications writing code\generation reports ets.

----

## CI pipeline and pre commit hooks

Github actions configurations is placed in /.github/workflows.
In CI, all types of tests, project and Storybook builds, and linting are run.

In pre-commit hooks, we check the project with linters, the configuration is in /.husky.

----

### Working with data

Interaction with data is carried out using Redux Toolkit. 
Whenever possible, reusable entities should be normalized using the EntityAdapter.

Server requests are using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous reducer loading (to avoid pulling them into the common bundle), the following approach is used:
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
