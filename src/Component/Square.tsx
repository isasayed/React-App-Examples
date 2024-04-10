import React from 'react'

const Square = (props:any) => {
  return (
    <section 
        className = "color-div"
        style={{background:props.color}} >
        <span>{props.color}</span>
        <span>{props.hexColor ? props.hexColor : ""}</span>
    </section>
  )
}

export default Square
