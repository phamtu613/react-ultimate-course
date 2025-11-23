import { setLoading } from '@/redux/product.actions'
import type { IRootState } from '@/types/redux'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


/*
1. optimize performance react
- prevent component render unnecessary (performance hook)
- lazy load module
- code splitting
- virtual scroll/list

2. optimize performance web
- lighthouse
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Speed Index

memo 
- prevent component re-render unnecessary
- component just re-render when props changes
- It takes 2 arguments: one for React Component, one for custom compare (option).  
(component, () => {
  return prevD != nextD
})
- Higher order-component.
- Shallow comparison.

useCallback
- Returns  a memorized callback.
- Callback function will re-runs if one of the dependencies has changed.
- Every callback function should be memoized to prevent useless re-rendering of child components that use the callback function” is the reasoning of his teammates.

useMemo
- Returns  a memorized value.
-re-runs if one of the dependencies has changed.

component re-render
- state
- props
- parent component re-render

prevent component re-render
- memo
- use useCallback when component receive function


parent component
person = {
  a: xx,
  b: xx,
  c: xx,
  d: xx,
  e: xx
}

child component
<Child person={person} /> (even through child use memo),

Q: child component just re-render when d, e change. How? use parameter 2 of memo - is custom function
*/

// const customEqual = (prevProps: any, nextProps: any) => {
//   return prevProps.firstName !== nextProps.firstName;
// }

const Child = React.memo(({ person }: any) => {
  console.log('child component', person)
  return (
    <div>this is Child component person</div>
  )
}) 

function PerformanceHook() {
  const isLoading = useSelector((state: IRootState) => state.product.isLoading);
  const dispatch = useDispatch();

  const [person, setPerson] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    age: 20
  }); // non-primitive - compare reference
  const [count, setCount] = React.useState(0); // primitive - compare value
  const [carts, setCarts] = React.useState([
    { id: 1, name: 'iphone', price: 1000, quanlity: 1 },
    { id: 1, name: 'samsung', price: 600, quanlity: 2 },
    { id: 1, name: 'book', price: 200, quanlity: 5 }
  ])

  function updatePerson () {
    // setPerson(prevState => ({
    //   ...prevState,
    // }))

    // setPerson(prevState => {
    //   return {
    //     ...prevState,
    //   }
    // })

    const newPerson = { ...person, firstName: 'tony' + Date.now() };
    setPerson(newPerson)
  }

  // re-create every component render
  // function updateTimestamp() {}
  // case 1: use to memories function when an memo component receive function 
  const updateTimestamp = React.useCallback(() => {}, [count]); // memory A

  // case 2: use memories function in dependency useEffect
  React.useEffect(() => {
    console.log('side effect performance hook');
    updateTimestamp();
  }, [updateTimestamp]);

  const totalPrice = React.useMemo(() => {
    console.log('totalPrice')
    return carts.reduce((acc, curr) => {
      acc += curr.price * curr.quanlity
      return acc
    }, 0);
  }, [carts])

  console.log('PerformanceHook: ', person)

  function fetchProduct() {
    dispatch(setLoading(true))
  }

  return (
    <div>
      <h1>PerformanceHook</h1>
      Count: {count} <br />
      Total price:  {totalPrice}$ <br />
      <button type="button" onClick={() => setCount(prevState => prevState + 1)}>Update Count</button>
      <button type="button" onClick={() => updatePerson()}>Update Person</button> <br />

      <br />
       <button type="button" onClick={fetchProduct}>
        {isLoading ? 'Loading ...' : 'Get Product'}
      </button> 

      <Child 
        person={person}
        updateTimestamp={updateTimestamp}
      />
    </div>
  )
}

export default PerformanceHook;