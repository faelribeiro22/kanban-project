import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type InputTextFieldProps = {
  label?: string
  labelFor?: string
  error?: string
  // eslint-disable-next-line no-unused-vars
  onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const InputTextField = ({
  label,
  labelFor = '',
  error = '',
  onInput,
  ...props
}: InputTextFieldProps) => {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }
  return (
    <S.Wrapper error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input type="text" value={value} onChange={onChange} {...props} />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default InputTextField
