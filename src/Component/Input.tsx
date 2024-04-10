import React from 'react'

const Input = (props:any) => {
  return (
    <input
        type = "text"
        placeholder = 'color name'
        value = {props.color}
        onChange = {(e) => 
            props.setcolor(e.target.value)} />
  )
}

export default Input
