import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContext'
import DeviceCard from '../DeviceCard/DeviceCard'
import DevicePaths from '../DevicePaths/DevicePaths'
import './DeviceEditor.css'

const DeviceEditor = (props) => {
  const appContext = useContext(AppContext)
  const navigate = useNavigate()
  
  const portFormInitial = {
    port: ''
  }
  const [portFormState, setPortFormState] = useState(portFormInitial)
  const [selectedDevice, setSelectedDevice] = useState(null)
  const [selectedPath, setSelectedPath] = useState(null)

  const handlePortSubmit = () => {
    appContext.postPath(props.triage, selectedDevice, portFormState)
    setPortFormState(portFormInitial)
  }

  const addDeviceHandler = () => {
    navigate(`new`)
  }
  
  return (
    <div className='DeviceEditor'>
      <div className='triage-head'>
        <button onClick={addDeviceHandler}>Add Device</button>
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
              
              <form onSubmit={handlePortSubmit}>
                <label htmlFor='port'>Port</label>
                <input 
                  type='text'
                  name='port'
                  id='port'
                  value={portFormState.port}
                  onChange={(evt) => handleChange(evt, portFormState, setPortFormState)}
                  required
                />
                <button>Create Path</button>
              </form>

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
