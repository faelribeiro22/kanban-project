import { screen, render } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Card from '.'

describe('<Card />', () => {
  it('should render the heading', () => {
    jest.mock('remark-gfm', () => ({}))
    const { container } = renderWithTheme(
      <Card title="Teste" description="Teste" />
    )
    expect(screen.getByRole('heading', { name: /teste/i })).toBeInTheDocument()
  })
})
