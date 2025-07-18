import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {

  return (
    <nav className='NavBar'>
      <div className='main-bar'>
        <Link to='/' className='logo'>Triage Manager</Link>
      </div>

      {props.subBar && (
        <div className='sub-bar'>
          {props.subBar}
        </div>
      )}
    </nav>
  )
}

export default NavBar
