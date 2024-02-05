describe('User seeing list of articles', () => {
  beforeEach(() => {
      cy.login().then((data) => {
          cy.visit('articles');
      });
  });
  it('articles successfully launched', () => {
      cy.getByTestId('ArticleList').should('exist');
      cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
