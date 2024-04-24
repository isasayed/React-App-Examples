import { Link } from 'react-router-dom'

const Nav = (props:any) => {
  return (
    <nav className="Nav">
      <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>search blog</label>
        <input 
          id='search'
          type="text"
          placeholder='Search Blog'
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)} />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Post">Post</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
