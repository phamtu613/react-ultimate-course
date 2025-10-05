import Typography from '../atoms/Typography'
import Button from '../atoms/Button'
import type { Todo } from '../../pages/fundamental/LiftingStateUp'

interface TodoItemProps {
  todoItem: Todo,
  deleteTodo: (id: number) => void
}

function TodoItem({ todoItem, deleteTodo }: TodoItemProps) {
  return (
    <div>
      <Typography>
        Title {todoItem.title}
      </Typography>
      <Button onClick={() => deleteTodo(todoItem.id)}>Delete</Button>
    </div>
  )
}

export default TodoItem