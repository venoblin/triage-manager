import { Link } from 'react-router-dom'
import { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [subBar, setSubBar] = useState(null)
  
  return (
    <nav className='NavBar'>
      <div className='main-bar'>
        <Link to='/' className='logo'>Triage Manager</Link>
      </div>

      {subBar && <subBar />}
    </nav>
  )
}

export default NavBar
