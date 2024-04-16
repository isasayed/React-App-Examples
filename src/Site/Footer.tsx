import React from 'react'

const Footer = (props:any) => {
  return (
    <footer>
      <span>{props.fetchError}</span>
    </footer>
  )
}

export default Footer
