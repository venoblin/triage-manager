import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import DevicePaths from '../DevicePaths/DevicePaths'
import DeviceCard from '../DeviceCard/DeviceCard'
import './DeviceEditor.css'

const DeviceEditor = (props) => {
  const appContext = useContext(AppContext)
  
  const initialFormState = {
    hostName: ''
  }
  const [formState, setFormState] = useState(initialFormState)
  const [selectedDevice, setSelectedDevice] = useState(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()

    appContext.postDevice(props.triage.id, formState)

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
            <DeviceCard 
              triage={props.triage} 
              device={device} 
              key={idx}
              setSelectedDevice={setSelectedDevice}
            />
          ))
        ) : (
          <p>No devices!</p>
        )}
      </div>

      <div className='device-editor'>
        {selectedDevice ? (
          <div className='editor'>
            <h2>{selectedDevice.hostName}</h2>
            
            <div className='device-paths'>
              <DevicePaths device={selectedDevice} />
            </div>
            <button onClick={handleCreatePath}>Create Path</button>
          </div>
        ) : (
          <p>No selected device!</p>
        )}
      </div>
    </div>
  )
}

export default DeviceEditor
