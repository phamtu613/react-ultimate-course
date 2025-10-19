import React, { type ChangeEvent, type RefObject } from 'react'


/*
- useRef store information that not reset during component re-render
- access DOM element

useRef + forwardRef + useImperativeHandle

call api: rate limit, debounce
*/

const Product = React.forwardRef((_, ref) => {
  const [isShowTimestap, setIsShowTimestap] = React.useState(true);

  React.useImperativeHandle(ref, () => {
    return {
      isShowTimestap,
      toggleShowTimestamp
    }
  })

  function toggleShowTimestamp() {
    setIsShowTimestap(prevState => !prevState)
  }

  return (
    <div>
      ToogleTimeStamp: {isShowTimestap ? 'true' : 'false'}
    </div>
  )
})

interface InputProps {
  firstName: string,
  onChangeFirstName: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = React.forwardRef((_, ref) => {
  const [firstName, setFirstName] = React.useState('');

  React.useImperativeHandle(ref, () => {
    return {
      firstName
    }
  })

  function onChangeFirstName(event: ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value)
  } 

  return (
    <input type="text" value={firstName} onChange={onChangeFirstName} />
  )
})

function RefHook() {
  const [timestamp, setTimestamp] = React.useState(Date.now());
  let countRef = React.useRef(0);
  const divRef = React.useRef<HTMLDivElement | null>(null);
  const isSkipFirstRenderRef = React.useRef(true);
  const productRef = React.useRef<any>(null);
  const inputRef = React.useRef<any>(null);

  React.useEffect(() => {
    if(isSkipFirstRenderRef.current) {
      isSkipFirstRenderRef.current = false;
      return;
    }
    console.log('ref hook side effect'); // don't run first render
  })

  function updateTimestamp() {
    console.log("divRef: ", divRef,)
    countRef.current = countRef.current + 1;
    setTimestamp(Date.now());
  }

  function toggleTimestamp() {
    console.log('productRef: ', productRef)
    productRef.current.toggleShowTimestamp()
  }


  function onSubmit() {
    console.log('firstName: ', inputRef.current.firstName)
  }

  console.log('RefHook: ', countRef.current)
  return (
    <div>
      <h1>RefHook</h1>
      Timestamp: {timestamp} <br />
      Count: {countRef.current} <br />
      <div ref={divRef}></div> <br />
      <Product ref={productRef} /> <br />
      <Input ref={inputRef} /> <br />
      <button type="button" onClick={toggleTimestamp}>Toggle timestamp</button>
      <button type="button" onClick={updateTimestamp}>Update timestamp</button>
      <button type="button" onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default RefHook