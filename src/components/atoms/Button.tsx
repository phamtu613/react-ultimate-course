import React from 'react'
import style from './button.module.css';

function Button({ ...restProps }) {
  return (
    <button className={style.button} {...restProps}>button</button>
  )
}

export default Button