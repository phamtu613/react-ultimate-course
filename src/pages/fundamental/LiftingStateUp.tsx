import React from 'react';
import TodoList from '../../components/organisms/TodoList'
import TodoForm from '../../components/organisms/TodoForm';

export interface Todo {
  id: number,
  title: string
}

// deep clone / shadow clone
function LiftingStateUp() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  function updateTodos(title: string) {
    const newItem = {
      id: Date.now(),
      title
    }
    const newTodos = [...todos, newItem]
    setTodos(newTodos);
  }

  function deleteTodo(id: number) {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Lifting State Up</h1>

      Quality Todo: 1 <br />
    
      <TodoForm updateTodos={updateTodos} />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default LiftingStateUp