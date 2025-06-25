import { Link } from 'react-router-dom'
import { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [SubBarComponent, setSubBarComponent] = useState(null)
  
  return (
    <nav className='NavBar'>
      <div className='main-bar'>
        <Link to='/' className='logo'>Triage Manager</Link>
      </div>

      {SubBarComponent && (
        <div className='sub-bar'>
          {SubBarComponent}
        </div>
      )}
    </nav>
  )
}

export default NavBar
