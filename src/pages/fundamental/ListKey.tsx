import React from "react"

function ListKey() {
  const [todos] = React.useState([
    { title: 'tony' },
    { title: 'tu' },
    { title: 'tien' },
  ])

  const todosFiltered: any = [];
  todos.forEach((todo: any) => {
    const newItem = (
      <div key={todo.id}>{todo.title}</div>
    )
    todosFiltered.push(newItem)
  })

  console.log('todosFiltered: ', todosFiltered)

  return (
    <div>
      <h1>ListKey</h1>

      {/* {todos.map((todo, index) => (
        <div key={todo.id}>{todo.title}</div>
      ))} */}
     {todosFiltered}
    </div>
  )
}

export default ListKey