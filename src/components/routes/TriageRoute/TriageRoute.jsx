import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import './TriageRoute.css'

const TriageRoute = () => {
  const appContext = useContext(AppContext)
  const {id} = useParams()
  
  const initialFormState = {
    hostName: ''
  }
  const [formState, setFormState] = useState(initialFormState)
  const [triage, setTriage] = useState()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    appContext.postDevice(triage.id, formState)

    setFormState(initialFormState)
  }

  const handleChange = (evt) => {
    const target = evt.target
    const newFormState = {...formState, [target.name]: target.value}
    setFormState(newFormState)
  }
  
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
          <h1>{triage.name}</h1>

          {triage.devices && triage.devices.length ? (
            triage.devices.map((device, idx) => (
              <div className='device-card' key={idx}>
                <p>{device.hostName}</p>
              </div>
            ))
          ) : (
            <p>No devices!</p>
          )}

          <form onSubmit={handleSubmit}>
            <label htmlFor='hostName'>Hostname</label>
            <input 
              type='text'
              name='hostName'
              id='hostName'
              value={formState.hostName}
              onChange={(evt) => handleChange(evt)}
            />

            <button>Add Device</button>
          </form>
        </div>
      ) : (
        <h1>{`No triage found!`}</h1>
      )}
    </div>
  )
}

export default TriageRoute
