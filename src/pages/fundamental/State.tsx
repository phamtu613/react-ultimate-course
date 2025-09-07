import React from 'react'

/*
first render: render UI with initial state
next render: render UI with new state

useState react hook is replace object, not merge object (setState class component)
objectA = { a: 1, b: 2 }

*/

function State() {
  const [timestamp, setTimestamp] = React.useState(Date.now())
  const [count, setCount] = React.useState(1);
  const [message, setMessage] = React.useState({
    name: 'tony',
    key: 'error'
  }); // memory A

  function updateTimeStamp() {
    setCount(1)
    // setTimestamp(Date.now());
  }

  function updateMessage() {
    // message.name = 'Tony' + Date.now(); // mutate object // memory A
    // setMessage(message); // memory A

    // const newMessage = {
    //   ...message, // copy all properties
    //   name: 'tony' + Date.now()
    // }
    // setMessage(newMessage)

    // updater function (callback function)
    // syntax: arrow function or traditional function
    setMessage(prevState => {
      console.log('prevState: ', prevState)
      return {
        ...prevState,
        name: 'tony' + Date.now()
      }
    })
  }

  console.log('State render', {
    message
  })

  return (
    <div>
      <h1>State</h1>

      Timestamp: {timestamp} <br />
      Count: {count} <br />
      Key Message: {message.key} <br />
      Name Message: {message.name} <br />


      <button type="button" onClick={updateTimeStamp}>Increment</button> { ' ' }
      <button type="button" onClick={updateMessage}>Message</button>
    </div>
  )
}

export default State