import { useParams, Routes, Route } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import DeviceEditor from '../../DeviceEditor/DeviceEditor'
import NewDeviceRoute from '../triage-routes/NewDeviceRoute/NewDeviceRoute'
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
        <div>
          <h1>{triage.name}</h1>
          
          <Routes>
            <Route path='/' element={<DeviceEditor triage={triage} />} />
            <Route path='/new' element={<NewDeviceRoute triage={triage} />} />
          </Routes>
        </div>
      ) : (
        <h1>{`No triage found!`}</h1>
      )}
    </div>
  )
}

export default TriageRoute
