import React from 'react';
import Button from '../atoms/Button'
import Input from '../atoms/Input'


interface TodoFormProps {
  updateTodos: (title: string) => void
}

function TodoForm({ updateTodos }: TodoFormProps) {
  const [title, setTitle] = React.useState('');

  function updateTitle(title: string) {
    setTitle(title);
  }

  return (
   <>
      Todo: <Input onChange={e => updateTitle(e.target.value)} />
      <Button onClick={() => updateTodos(title)}>Submit</Button>
   </>
  )
}

export default TodoForm