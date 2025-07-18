import { Link } from 'react-router-dom'
import AllTriages from '../../AllTriages/AllTriages'
import './HomeRoute.css'

const HomeRoute = () => {
  
  return (
    <div className='HomeRoute'>
      <h1>Home</h1>
      <Link to='/new' className='btn'>New Triage</Link>
      <AllTriages />
    </div>
  )
}

export default HomeRoute
