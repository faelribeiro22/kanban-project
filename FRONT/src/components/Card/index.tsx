import {
  NavigateBefore,
  NavigateNext,
  RemoveRedEye,
  Edit
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import * as S from './styles'

export type CardProps = {
  title: string
  description: string
}

const Card = ({ title, description }: CardProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Info>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <div>
            <Button
              icon={<RemoveRedEye />}
              title="Ver card"
              size="small"
              minimal
            />
            <Button icon={<Edit />} title="Editar card" size="small" minimal />
          </div>
        </S.TitleWrapper>
        <S.ContentDescription>
          <ReactMarkdown>{description}</ReactMarkdown>
        </S.ContentDescription>
      </S.Info>
    </S.Content>
    <S.WrapperButton>
      <Button icon={<NavigateBefore />} size="small" />
      <Button icon={<NavigateNext />} size="small" />
    </S.WrapperButton>
  </S.Wrapper>
)
export default Card
