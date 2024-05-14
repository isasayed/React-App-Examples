import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'

const Header = (props: any) => {
  return (
    <header className='Header'>
      <h2>{props.title}</h2>
      {
        props.width < 768 ? <FaMobileAlt /> :
          props.width < 992 ? <FaTabletAlt /> :
            <FaLaptop />
      }
    </header>
  )
}

export default Header
