import { Lista } from 'components/Column'
import { Task } from '..'

type taskColumn = {
  titulo: Lista
  tasks: Task[]
}

export function useTasksColumns(tasks: Task[]) {
  const todo: taskColumn = { titulo: 'todo', tasks: [] }
  const doing: taskColumn = { titulo: 'doing', tasks: [] }
  const done: taskColumn = { titulo: 'done', tasks: [] }

  todo.tasks = tasks.filter((task) => task.lista === 'todo')
  doing.tasks = tasks.filter((task) => task.lista === 'doing')
  done.tasks = tasks.filter((task) => task.lista === 'done')

  return {
    todo,
    doing,
    done
  }
}
