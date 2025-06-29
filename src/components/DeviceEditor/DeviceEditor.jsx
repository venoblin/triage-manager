import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import DeviceCard from '../DeviceCard/DeviceCard'
import DevicePaths from '../DevicePaths/DevicePaths'
import './DeviceEditor.css'

const DeviceEditor = (props) => {
  const appContext = useContext(AppContext)
  
  const deviceFormInitial = {
    hostName: ''
  }
  const portFormInitial = {
    port: ''
  }
  const [deviceFormState, setDeviceFormState] = useState(deviceFormInitial)
  const [portFormState, setPortFormState] = useState(portFormInitial)
  const [selectedDevice, setSelectedDevice] = useState(null)
  const [selectedPath, setSelectedPath] = useState(null)

  const handleDeviceSubmit = (evt) => {
    evt.preventDefault()

    appContext.postDevice(props.triage, formState)

    setDeviceFormState(deviceFormInitial)
  }

  const handlePortSubmit = (evt) => {
    evt.preventDefault()

    console.log(portFormState)
    // appContext.postPath(props.triage, selectedDevice)


    setPortFormState(portFormInitial)
  }

  const handleChange = (evt, formState, setFormState) => {
    const target = evt.target
    const newFormState = {...formState, [target.name]: target.value}
    setFormState(newFormState)
  }
  
  return (
    <div className='DeviceEditor'>
      <div className='triage-head'>
        <form onSubmit={handleDeviceSubmit}>
          <label htmlFor='hostName'>Hostname</label>
          <input 
            type='text'
            name='hostName'
            id='hostName'
            value={deviceFormState.hostName}
            onChange={(evt) => handleChange(evt, deviceFormState, setDeviceFormState)}
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
