import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './AllTriages.css'

const AllTriages = () => {
  const appContext = useContext(AppContext)
  
  return (
    <div className='AllTriages'>
      {appContext.triages.length ? (
        appContext.triages.map((triage, i) => {
          <div className='triage-card' key={i}>
            <p>{triage.name}</p>
          </div>
        })
      ) : (
        <p>You have no triages.</p>
      )}
    </div>
  )
}

export default AllTriages
