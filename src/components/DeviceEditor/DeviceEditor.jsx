import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import DeviceCard from '../DeviceCard/DeviceCard'
import DevicePaths from '../DevicePaths/DevicePaths'
import './DeviceEditor.css'

const DeviceEditor = (props) => {
  const appContext = useContext(AppContext)
  
  const initialFormState = {
    hostName: ''
  }
  const [formState, setFormState] = useState(initialFormState)
  const [selectedDevice, setSelectedDevice] = useState(null)
  const [selectedPath, setSelectedPath] = useState(null)

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
    if (selectedDevice) {
      appContext.generatePath(props.triage.id, selectedDevice.id)
    }
  }
  
  return (
    <div className='DeviceEditor'>
      <div className='triage-head'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='hostName'>Hostname</label>
          <input 
            type='text'
            name='hostName'
            id='hostName'
            value={formState.hostName}
            onChange={(evt) => handleChange(evt)}
            required
          />
          <button>Add Device</button>
        </form>
      </div>
      
      <div className='device-editor-wrap'>
        <div className='device-selector'>
          {props.triage.devices && props.triage.devices.length ? (
            props.triage.devices.map((device, idx) => (
              <DeviceCard 
                triage={props.triage} 
                device={device} 
                key={device.id}
                selectedDevice={selectedDevice}
                setSelectedDevice={setSelectedDevice}
                setSelectedPath={setSelectedPath}
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
              
              <button onClick={handleCreatePath}>Create Path</button>
              
              <DevicePaths 
                device={selectedDevice} 
                triage={props.triage}
                isEditMode={true}
                selectedPath={selectedPath}
                setSelectedPath={setSelectedPath} 
              />
            </div>
          ) : (
            <p className='no-selected-device'>No selected device!</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DeviceEditor
