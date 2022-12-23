import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import InputTextField from '.'

describe('<InputTextField />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <InputTextField
        labelFor="largura"
        label="Largura da parede"
        placeholder="Largura da parede"
        id="largura"
      />
    )
    expect(screen.getByPlaceholderText('Largura da parede')).toBeInTheDocument()

    expect(screen.getByLabelText('Largura da parede')).toBeInTheDocument()
  })

  it('should render error text message and label not show', () => {
    renderWithTheme(
      <InputTextField placeholder="Largura da parede" error="Error" />
    )

    expect(screen.getByText(/error/i)).toBeInTheDocument()
    expect(screen.getByText(/error/i)).toHaveStyleRule('color', '#FF6347')
    expect(screen.queryByLabelText('Largura')).not.toBeInTheDocument()
  })

  it('should call function with typing in the text field', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <InputTextField placeholder="Largura da parede" onInput={onInput} />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    await userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })
})
