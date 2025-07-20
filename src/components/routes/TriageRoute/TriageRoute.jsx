import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import DeviceEditor from '../../DeviceEditor/DeviceEditor'
import './TriageRoute.css'

const TriageRoute = () => {
  const appContext = useContext(AppContext)
  const {id} = useParams()
  
  const [triage, setTriage] = useState()

  const populateTriage = () => {
    setTriage(appContext.getTriage(id))
  }

  useEffect(() => {
    populateTriage()
  }, [appContext])

  return (
    <div className='TriageRoute'>
      {triage ? (
        <div className='triage-wrap'>

          <DeviceEditor triage={triage} />
          
        </div>
      ) : (
        <h1>{`No triage found!`}</h1>
      )}
    </div>
  )
}

export default TriageRoute
