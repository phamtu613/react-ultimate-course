import { useAppContext } from '@/contexts/AppContext';
import React from 'react'

/*
- show list product
- pagination

- first load -> component first render UI -> show UI with initial state
- call api -> get product -> set state -> component re-render with new state (useEffect)

*/

function TonyEffectHook() {
  const [todos, setTodos] = React.useState<any>([]);
  const [title, setTitle] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const { updateUser } = useAppContext();
  // const [fullName, setFullName] = React.useState('');

  const fullName = firstName + lastName;

  React.useEffect(() => {
    async function fetchTodos() {
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=2`);
        const json = await data.json();
        setTodos(json);
      } catch {
      }
    }
    fetchTodos();
  }, [page]);

  // React.useEffect(() => {
  //   setFullName(firstName + lastName)
  // }, [firstName, lastName]);


  function onPrevPage() {
    // if (page === 1) return; // return early
    // setPage(prev => prev - 1)
    setPage(prev => {
      if(prev === 1) return 1;
      return prev - 1;
    })
  }

  function onAddTodo() {
    // const newTodo = {
    //   userId: Date.now(),
    //   id: Date.now(), 
    //   title,
    //   completed: false
    // }
    // setTodos(prevState => [...prevState, newTodo])
    setTodos((prevState: any) => {
      const newTodo = {
        userId: Date.now(),
        id: Date.now(), 
        title,
        completed: false
      }
      return [...prevState, newTodo]
    })

    // just demo set user in Appcontext
    const newUser = {
      id: Date.now(),
      firstName: 'tony',
      lastName: 'nguyen',
      email: 'tony@gmail.com'
    }
    updateUser(newUser)
  }

  return (
    <div>
      <h1>Demo TonyEffectHook</h1>
      Todo: <input type="text" onChange={e => setTitle(e.target.value)} />
      <button type="button" onClick={onAddTodo}>Add Todo</button>
      {todos.map((todo: any)=> (
        <div key={todo.id}>
          Title: {todo.title}
        </div>
      ))}

      <button type="button" onClick={onPrevPage}>Prev Page</button>
      <span>{page}</span>
      <button type="button" onClick={() => setPage(prev => prev + 1)}>Next Page</button>
      <br />
      <br />
      <h3><b>First Name & Last Name</b></h3>
      <input type="text" onChange={e => setFirstName(e.target.value)} />
      <input type="text" onChange={e => setLastName(e.target.value)} />
      <button type="button">Get Full Name</button> 
      <br />
      Full Name: 
      {fullName}
      {/* {firstName + lastName} */}

   
      
    </div>
  )
}

export default TonyEffectHook