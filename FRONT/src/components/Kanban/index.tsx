import Column, { Lista } from 'components/Column'
import { UserTokenContext } from 'components/Main'
import { useContext } from 'react'
import { useTasksColumns } from './hooks/useTasksColumns'
import * as S from './styles'

export type Task = {
  id: number
  titulo: string
  conteudo: string
  lista: Lista
}

export type KanbanProps = {
  tasks: Task[]
}

const Kanban = ({ tasks }: KanbanProps) => {
  const userToken = useContext(UserTokenContext)
  console.log('eita', userToken)
  const { todo, doing, done } = useTasksColumns(tasks)
  return (
    <S.Wrapper>
      <Column cards={todo.tasks} title={todo.titulo} />
      <Column cards={doing.tasks} title={doing.titulo} />
      <Column cards={done.tasks} title={done.titulo} />
    </S.Wrapper>
  )
}
export default Kanban
