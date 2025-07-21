import { useContext, useState } from 'react'
import { AppContext } from '../../../../contexts/AppContext'
import DeviceCard from '../../../DeviceCard/DeviceCard'
import DevicePaths from '../../../DevicePaths/DevicePaths'
import './DeviceEditorRoute.css'
import { Link } from 'react-router-dom'

const DeviceEditorRoute = (props) => {
  const appContext = useContext(AppContext)
  
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

  return (
    <div className='DeviceEditorRoute'>
      <div className='triage-head'>
        <Link className='btn' to={'new'} state={{triage: props.triage}}>Add Device</Link>
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

export default DeviceEditorRoute
