import { useState } from 'react'
import { onSubmit, onChange } from '../../../utils/form'
import './NewDeviceRoute.css'

const NewDeviceRoute = () => {
  const deviceFormInitial = {
    hostName: ''
  }
  const [deviceFormState, setDeviceFormState] = useState(deviceFormInitial)
  
  const handleDeviceSubmit = () => {
    appContext.postDevice(props.triage, deviceFormState)
    setDeviceFormState(deviceFormInitial)
  }
  
  return (
    <div className='NewDeviceRoute'>
      <h2>Add Device</h2>

    </div>
  )
}

export default NewDeviceRoute
