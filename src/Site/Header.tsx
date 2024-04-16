import React from 'react'

const Header = (props:any) => {
  return (
    <header>
      <h2>{props.title}</h2>
      <button
        onClick={() => props.setRequestUrl('users')}>
        Users
      </button>
      <button
        onClick={() => props.setRequestUrl('posts')}>
        Posts
      </button>
      <button
        onClick={() => props.setRequestUrl('comments')}>
        Comments
      </button>
    </header>
  )
}

export default Header
