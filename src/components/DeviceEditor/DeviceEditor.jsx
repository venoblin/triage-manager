import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import DevicePaths from '../DevicePaths/DevicePaths'
import DeviceCard from '../DeviceCard/DeviceCard'
import './DeviceEditor.css'

const DeviceEditor = (props) => {
  const appContext = useContext(AppContext)
  
  const [selectedDevice, setSelectedDevice] = useState(null)

  const handleCreatePath = () => {
    if (selectedDevice) {
      appContext.generatePath(props.triage.id, selectedDevice.id)
    }
  }
  
  return (
    <div className='DeviceEditor'>
      <div className='device-selector'>
        {props.triage.devices && props.triage.devices.length ? (
          props.triage.devices.map((device, idx) => (
            <DeviceCard 
              triage={props.triage} 
              device={device} 
              key={idx}
              selectedDevice={selectedDevice}
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
          <p className='no-selected-device'>No selected device!</p>
        )}
      </div>
    </div>
  )
}

export default DeviceEditor
