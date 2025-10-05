import React from 'react'
import Button from '../../components/atoms/Button';

/*
autobatching state update
*/

function StateHook() {
  const [count, setCount] = React.useState(0);

  function updateCount() {
    // auto batching state update
    setCount(count + 1); // 1
    setCount(count + 2); // 2
    setCount(count + 3); // 3

    // react: updater function
    // js: callback function (syntax: arrow function)
    // setCount(prevState => prevState + 1);
    // setCount(prevState => prevState + 2);
    // setCount(prevState => prevState + 3);
  }
  // closure function

  return (
    <div>
      <h1>StateHook</h1>

      <br />
      Count: {count} <br />

      <Button onClick={updateCount}>Update Count</Button>
    </div>
  )
}

export default StateHook