import Sidebar from '../../ui/Sidebar/Sidebar'
import { screen, fireEvent } from '@testing-library/react'
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent'

describe('Sidebar', () => {
  test('render sidebar', () => {
    renderComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toglle should work correct', () => {
    renderComponent(<Sidebar />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('collapsed')
    const btn = screen.getByTestId('toggle')
    fireEvent.click(btn)
    expect(sidebar).not.toHaveClass('collapsed')
    expect(screen.getByTestId('toggle')).toBeInTheDocument()
  })
})
