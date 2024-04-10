const Header = (props:any) => {
  return (
    <header>
        <h1 className='heading'>{props.title}</h1>
        <p className='hello-message'>Hello {props.name} 👋</p>
    </header>
  )
}

export default Header
