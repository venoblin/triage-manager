import { useState } from 'react'
import DevicePaths from '../DevicePaths/DevicePaths'
import './DeviceCard.css'

const DeviceCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const isSelected = props.selectedDevice && props.selectedDevice.id === props.device.id

  const selectDevice = () => {
    props.setSelectedDevice(props.device)
    window.scrollTo(0, 0)
  }

  const toggleExpanded = () => {
    setIsExpanded((currState) => !currState)
  }

  return (
    <div className={`DeviceCard ${isSelected ? 'selected' : ''}`}>
      {props.device.paths.length > 0 && !isSelected && (
        <button onClick={toggleExpanded}>Expand</button>
      )}
      
      <h2>{props.device.hostName}</h2>

      {!isSelected && (
        <button onClick={selectDevice}>Edit</button>
      )}

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
