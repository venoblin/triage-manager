import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { onSubmit, onChange } from '../../../../utils/form'
import { AppContext } from '../../../../contexts/AppContext'
import './NewDeviceRoute.css'

const NewDeviceRoute = (props) => {
  const appContext = useContext(AppContext)
  const navigate = useNavigate()
  
  const deviceFormInitial = {
    hostName: ''
  }
  const [deviceFormState, setDeviceFormState] = useState(deviceFormInitial)
  
  const handleDeviceSubmit = () => {
    appContext.postDevice(props.triage, deviceFormState)
    setDeviceFormState(deviceFormInitial)
    navigate(`/${props.triage.id}`)
  }
  
  return (
    <div className='NewDeviceRoute'>
      <h2>Add Device</h2>

      <form onSubmit={(evt) => onSubmit(evt, handleDeviceSubmit)}>
        <label htmlFor='hostName'>Hostname</label>
        <input 
          type='text'
          name='hostName'
          id='hostName'
          value={deviceFormState.hostName}
          onChange={(evt) => onChange(evt, deviceFormState, setDeviceFormState)}
          required
        />
        <button>Add Device</button>
      </form>
    </div>
  )
}

export default NewDeviceRoute
