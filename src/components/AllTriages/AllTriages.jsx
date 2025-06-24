import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContext'
import './AllTriages.css'

const AllTriages = () => {
  const appContext = useContext(AppContext)
  
  return (
    <div className='AllTriages'>
      {appContext.triages.length ? (
        appContext.triages.map((triage, i) => (
          <div className='triage-card' key={i}>
            <Link to={`/triage/${triage.id}`}>{triage.name}</Link>
          </div>
        ))
      ) : (
        <p>You have no triages.</p>
      )}
    </div>
  )
}

export default AllTriages
