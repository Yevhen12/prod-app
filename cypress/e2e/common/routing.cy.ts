import { selectByTestId } from "cypress/helpers/selectByTestId"

describe('template spec', () => {
  describe('User is not Logged in', () => {
    it('Open main page', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Open profile page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Open Non-existing page', () => {
      cy.visit('/fdfdfdfdfdwwe')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })
  describe('User is Logged in', () => {
    beforeEach(() => {
      cy.login('admin', '123')
    })
    it('Open profile page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('Open articles page', () => {
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlePage')).should('exist')
    })
  })
})