import { StoryFn } from '@storybook/react'

export const PortalDecorator = (Story: StoryFn) => <div className="v-app"><Story /></div>
