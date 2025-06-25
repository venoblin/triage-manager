import DevicePaths from '../DevicePaths/DevicePaths'
import './DeviceCard.css'

const DeviceCard = (props) => {

  const selectDevice = () => {
    props.setSelectedDevice(props.device)
  }

  return (
    <div className={`DeviceCard ${props.selectedDevice && props.selectedDevice.id === props.device.id ? 'selected' : ''}`}>
      <h2>{props.device.hostName}</h2>

      <button onClick={selectDevice}>Edit</button>

      {props.device.paths.length ? (
        <DevicePaths device={props.device} />
      ) : (
        <p>There are no paths!</p>
      )}
    </div>
  )
}

export default DeviceCard
