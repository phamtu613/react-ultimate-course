import React from "react";

function JSX() {
  const background = 'red';

  const renderButton = (
    <button>button</button>
  )

  return (
    <React.Fragment key={1}>
      <h1
        style={{
          background
        }}
      >
        JSX
      </h1>

      <p>hello jsx</p>

      {renderButton}
    </React.Fragment>
  )
}

export default JSX