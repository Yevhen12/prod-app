import { selectByTestId } from "../../helpers/selectByTestId"

let profileId: string;
describe('User logging in and open Profile page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then((data) => {
      profileId = data.id
      cy.visit('profile/' + data.id)
    })
  })
  afterEach(() => {
    cy.resetProfile(profileId)
  })
  it('Profile successfully loaded', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'ulbi tv')
  })
  it('Profile successfully updated', () => {
    cy.updateProfile('new', 'lastname')
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'new')
    cy.getByTestId('ProfileCard.Surname').should('have.value', 'lastname')
  })
})