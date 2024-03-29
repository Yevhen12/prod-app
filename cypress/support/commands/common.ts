import { User } from '../../../src/enteties/User';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (
  username: string = 'testuser',
  password: string = '123',
): Cypress.Chainable<User> => {
  return cy
    .request<User>({
      method: 'POST',
      url: `http://localhost:8000/login`,
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
      return body;
    });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): Chainable<typeof cy.get>;
    }
  }
}
