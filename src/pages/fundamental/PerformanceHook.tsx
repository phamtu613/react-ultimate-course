import React from 'react'


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
- receive 2 params: (component, () => {
  return prevD != nextD
})

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

Q: child component just re-render when d, e change. How?
*/

function Child({ person }: any) {
  console.log('child component', person)
  return (
    <div>Child component person</div>
  )
}

function PerformanceHook() {
  const [person, setPerson] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    age: 20
  })

  console.log('PerformanceHook: ', person)
  return (
    <div>
      <h1>PerformanceHook</h1>

      <Child person={person}/>
    </div>
  )
}

export default PerformanceHook;