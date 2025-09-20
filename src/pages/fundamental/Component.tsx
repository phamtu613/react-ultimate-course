
/*
# how many way component re-render?
- state changes
- props changes
- parent component render -> child component re-render
- force re-render (key change)
*/

import React from "react"

function StatefullComponent() {
  console.log('StatefullComponent: ')
  return (
    <div>this is child component</div>
  )
}

function Component() {
  const [count, setCount] = React.useState(1);

  // user click => () => {} => execute function
  // function updateCount(number: number) {
  //   console.log('updateCount: ', number)
  // }

  // abc(1)(2)(3) => 3
  /* curry function
    function abc(a: number) {
      return (b: number => {
        return (c: number => {
          return a + b + c
        }
      }
    }
  */

  // curry function, closure function
  function updateCount(number: number) {
    return () => {
      console.log('updateCount: ', number)
    }
  }

  function updateCount2(event, number) {
   console.log('updateCount2: ', event, number)
  }; // memory B

  console.log('Component: ')
  return (
    <div>
      <h1>Component</h1>
      Count: {count} <br />

      <StatefullComponent key={count} />
      {/* <button onClick={() => {
        updateCount(10)
      }}>Update count</button>  */}
      <button onClick={updateCount(10)}>Update count</button>

      <button onClick={e => updateCount2(e, 10)}>Update count 2</button>
      
    </div>
  )
}

export default Component