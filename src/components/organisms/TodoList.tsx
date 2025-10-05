import type { Todo } from '../../pages/fundamental/LiftingStateUp'
import TodoItem from '../molecules/TodoItem'

interface TodoListProps {
  todos: Todo[],
  deleteTodo: (id: number) => void
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map(todoItem => (
        <li key={todoItem.id}>
          <TodoItem todoItem={todoItem} deleteTodo={deleteTodo} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList