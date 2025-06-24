import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import './TriageRoute.css'

const TriageRoute = () => {
  const [triage, setTriage] = useState()
  
  const appContext = useContext(AppContext)
  const {id} = useParams()

  useEffect(() => {
    setTriage(appContext.triages[id])
  }, [])

  return (
    <div className='TriageRoute'>
      {triage ? (
        <h1>{triage.name}</h1>
      ) : (
        <p>{`No triage found`}</p>
      )}
    </div>
  )
}

export default TriageRoute
