import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to='/' className='logo'>Triage Manager</Link>
    </nav>
  )
}

export default NavBar
