import React from 'react'

function Input({ ...restProps }) {
  return (
    <input type="text" {...restProps} />
  )
}

export default Input