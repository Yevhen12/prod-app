import { Button, ButtonTheme } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  test('render correct text', () => {
    const { getByText } = render(<Button>Test</Button>)
    expect(getByText('Test')).toBeInTheDocument()
  })

  test('with clear variant', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
