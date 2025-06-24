import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import './TriageRoute.css'

const TriageRoute = () => {
  const appContext = useContext(AppContext)
  const {id} = useParams()

  const [triage, setTriage] = useState()
  

  const getTriage = () => {
    setTriage(appContext.getTriage(id))
  }

  useEffect(() => {
    getTriage()
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
