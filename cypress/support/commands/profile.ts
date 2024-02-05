import { User } from "../../../src/enteties/User"

export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click()
  cy.getByTestId('ProfileCard.Firstname').clear().type(firstname)
  cy.getByTestId('ProfileCard.Surname').clear().type(lastname)
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request<User>({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'test' },
    body: {
      "id": "4",
      "first": "ulbi tv",
      "lastname": "asf",
      "age": 465,
      "currency": "RUB",
      "country": "Russia",
      "city": "Moscow",
      "username": "ulbi tv",
      "avatar": "https://images.unsplash.com/photo-1702627587052-c0d39b978d29?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<User>
      resetProfile(profileId: string): Chainable<typeof cy.get>
    }
  }
}