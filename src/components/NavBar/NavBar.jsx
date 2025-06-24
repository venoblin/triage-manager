import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to='/' className='logo'>Triage Manager</Link>

      <div className='btns-wrap'>
        <Link to='/triage/new' className='btn'>New Triage</Link>
      </div>
    </nav>
  )
}

export default NavBar
