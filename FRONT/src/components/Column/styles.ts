import styled, { css } from 'styled-components'
import { Lista } from '.'

type WrapperProps = {
  listTitle: Lista
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, listTitle }) => css`
    ${listTitle !== 'done' &&
    css`
      border-right: 1px solid ${theme.colors.gray};
      padding-right: 5rem;
    `}
  `}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 25rem;
  max-height: 90rem;
  overflow-y: auto;
  overflow-x: hidden;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray};
    text-align: center;
    margin: 0 0.5rem;
  `}
`
