import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border-radius: 2px;
    padding: 0.5rem;
    max-width: 30rem;
    min-width: 20rem;
    height: 21rem;
    background-color: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const ContentDescription = styled.div`
  height: 10rem;
  overflow: scroll;
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.darkGray};
    margin-bottom: 0.5rem;
  `}
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
`
