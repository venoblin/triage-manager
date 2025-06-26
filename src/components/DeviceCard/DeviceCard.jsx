import { useState } from 'react'
import DevicePaths from '../DevicePaths/DevicePaths'
import './DeviceCard.css'

const DeviceCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const selectDevice = () => {
    props.setSelectedDevice(props.device)
  }

  const toggleExpanded = () => {
    setIsExpanded((currState) => !currState)
  }

  return (
    <div className={`DeviceCard ${props.selectedDevice && props.selectedDevice.id === props.device.id ? 'selected' : ''}`}>
      <button onClick={toggleExpanded}>Expand</button>
      
      <h2>{props.device.hostName}</h2>

      <button onClick={selectDevice}>Edit</button>

      {props.device.paths.length ? (
        isExpanded ? (
          <DevicePaths device={props.device} />
        ) : (
          <p className='count'>{`${props.device.paths.length} paths`}</p>
        )
      ) : (
        <p>There are no paths!</p>
      )}
    </div>
  )
}

export default DeviceCard
