import { EditableProfileCard } from '@/features/EditableProfileCard';
import { TestProvider } from '@/shared/lib/tests/renderComponent/renderComponent';

const USER_ID = '4';

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: {
                id: USER_ID,
              },
            },
          },
        }}
      >
        <EditableProfileCard id={USER_ID} />
      </TestProvider>,
    );
  });
});
