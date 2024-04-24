import React from 'react'

const Header = (props:any) => {
  return (
    <header className='Header'>
      <h2>{props.title}</h2>
    </header>
  )
}

export default Header
