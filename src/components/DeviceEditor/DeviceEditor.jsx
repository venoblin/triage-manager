import { useState } from 'react'
import DeviceCard from '../DeviceCard/DeviceCard'
import './DeviceEditor.css'

const DeviceEditor = (props) => {
  const initialFormState = {
    hostName: ''
  }
  const [formState, setFormState] = useState(initialFormState)

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

  const handleCreatePath = () => {
    appContext.generatePath(props.triage.id, props.device.id)
  }
  
  return (
    <div className='DeviceEditor'>
      <div className='device-selector'>
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
        {props.triage.devices && props.triage.devices.length ? (
          props.triage.devices.map((device, idx) => (
            <DeviceCard triage={props.triage} device={device} key={idx} />
          ))
        ) : (
          <p>No devices!</p>
        )}
      </div>

      <div className='device-editor'>
        <button onClick={handleCreatePath}>Create Path</button>
      </div>
    </div>
  )
}

export default DeviceEditor
