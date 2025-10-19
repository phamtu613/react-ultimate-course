import { useAppContext } from '@/contexts/AppContext';
import { X } from 'lucide-react';
import React from 'react'

/*
useEffect
- Perform side effects from a function component after the function component renders.  (data fetching, subscriptions …)
- You can use more than a single effect in a component.
Important: React runs the effects after every render - including the first render.

clean up function - use to clean, clear side effect (clearTimeout, clearInterval, remove event listener ...)
- Clean up runs after the component re-render or unmounts.
- Important:
  - ‘Clean up’ is invoked whenever the component is being re-render (include unmount)
  - ‘Clean up’ not run in first render
  - ‘Clean up’ run before side effect (in re-render)
*/

function EffectHook() {
  const [todos, setTodos] = React.useState([]);
  const [count, setCount] = React.useState(1); 
  const { user } = useAppContext();

  console.log('================== user context ===========: ', user)

  React.useEffect(() => {
    console.log('useEffect with no dependency');
    // call api -> update new state -> component re-render
    return () => {
      console.log('cleanup useEffect with no dependency');
    }
  });// effect alway run in lifecycle component (first render, next render, unmount)

  React.useEffect(() => {
    console.log('useEffect with empty dependency');
    // call api -> update new state -> component re-render
    // async function fetchTodos() {
    //   try {
    //     const data = await fetch('https://jsonplaceholder.typicode.com/todos?_page1=&_limit=2');
    //     const json = await data.json();
    //     setTodos(json);
    //   } catch {
    //   }
    // }
    // fetchTodos();
    
    return () => {
      console.log('cleanup useEffect with empty dependency');
    }
  }, []); // effect only run once time when component first render (not run re-render)

  // effect hook
  React.useEffect(() => {
    const timer = setTimeout(() => {
      console.log('useEffect with values dependency with timer')
    }, 1000);
    console.log('useEffect with values dependency');
    // call api -> update new state -> component re-render

    return () => {
      clearTimeout(timer);
      console.log('cleanup useEffect with values dependency');
    }
  }, [count]); // effect will just re-run when values changes (apply for next render)


  // layout effect hook
  React.useLayoutEffect(() => {
    const timer = setTimeout(() => {
      console.log('useLayoutEffect with values dependency with timer')
    }, 1000);
    console.log('useLayoutEffect with values dependency');
    // call api -> update new state -> component re-render

    return () => {
      clearTimeout(timer);
      console.log('cleanup useLayoutEffect with values dependency');
    }
  }, [count]); // effect will just re-run when values changes (apply for next render)



  console.log('--------------EffectHook commited DOM')   
  return (
    <div>
      <h1>EffectHook</h1>
      Count: {count} <br />
      <button type="button" onClick={() => setCount(count + 1)}>Update Count</button> <br />
      <h3>List Todo</h3>
      {todos.map((todo: any)=> (
        <div key={todo.id}>
          Title: {todo.title}
        </div>
      ))}

      <br />
      <div>
        <div className='boxEffect box1'>Box 1</div>
        <div className='boxEffect box2'>Box 2</div>
      </div>
    </div>
  )
}

export default EffectHook