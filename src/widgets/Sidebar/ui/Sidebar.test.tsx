import { Sidebar } from 'widgets/Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { screen, fireEvent } from '@testing-library/react'

describe('Sidebar', () => {
  test('render sidebar', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByText('Toggle')).toBeInTheDocument()
  })

  test('toglle should work correct', () => {
    renderWithTranslation(<Sidebar />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('collapsed')
    const btn = screen.getByTestId('toggle')
    fireEvent.click(btn)
    expect(sidebar).not.toHaveClass('collapsed')
    expect(screen.getByText('Toggle')).toBeInTheDocument()
  })
})
