import Counter from './Counter';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

describe('Counter', () => {
  test('render counter', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('increment', async () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    await userEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('decrement', async () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    await userEvent.click(screen.getByTestId('decrement'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
