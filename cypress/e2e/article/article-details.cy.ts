let currentArticleId = '';
describe('User opens ArticleDetails Page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      cy.log(JSON.stringify(article));
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it('should see article', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('should see a list of recommendations', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it.skip('should leeave comment', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('should rate', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
