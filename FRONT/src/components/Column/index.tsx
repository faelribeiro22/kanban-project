import Card from 'components/Card'
import { Task } from 'components/Kanban'
import * as S from './styles'

export type Lista = 'todo' | 'doing' | 'done'

export type ColumnProps = {
  title: Lista
  cards: Task[]
}

const Column = ({ cards, title }: ColumnProps) => (
  <S.Wrapper listTitle={title}>
    <S.Title>{title}</S.Title>
    {cards.map((card) => (
      <Card
        key={`${card.titulo}-${card.id}`}
        description={card.conteudo}
        title={card.titulo}
      />
    ))}
  </S.Wrapper>
)
export default Column
