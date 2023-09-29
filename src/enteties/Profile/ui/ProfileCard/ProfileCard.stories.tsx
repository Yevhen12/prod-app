import type { Meta, StoryObj } from '@storybook/react'
import { Country } from 'enteties/Country'
import { Currency } from 'enteties/Currency'
import ProfileCard from './ProfileCard'

const meta = {
  title: 'enteties/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: {
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
}

export const PrimaryWithError: Story = {
  args: {
    error: 'Some error occur'
  }
}

export const PrimaryWithLoading: Story = {
  args: {
    isLoading: true
  }
}
