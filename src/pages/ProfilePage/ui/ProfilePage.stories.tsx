import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Country } from 'enteties/Country'
import { Currency } from 'enteties/Currency'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

const meta = {
  title: 'page/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  },
  decorators: [(Story) => (
    <MemoryRouter initialEntries={['/profile/1']}>
      <Routes>
        <Route path="/profile/:id" element={<Story />} />
      </Routes>
    </MemoryRouter>)]
} as Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'Yevhen',
      lastname: 'Lys',
      age: '20',
      currency: Currency.UA,
      country: Country.England,
      city: 'Lviv',
      username: 'neylen',
      avatar: 'https://images.unsplash.com/photo-1694845482698-accfce9310f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
    }
  }
})]

export const Dark: Story = {
  args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      first: 'Yevhen',
      lastname: 'Lys',
      age: '20',
      currency: Currency.UA,
      country: Country.England,
      city: 'Lviv',
      username: 'neylen',
      avatar: 'https://images.unsplash.com/photo-1694845482698-accfce9310f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
    }
  }
})]
