import './DeviceCard.css'

const DeviceCard = (props) => {

  const selectDevice = () => {
    props.setSelectedDevice(props.device)
  }

  return (
    <div className='DeviceCard'>
      <h2>{props.device.hostName}</h2>

      <button onClick={selectDevice}>Edit</button>

      <div className='paths-wrap'>
        {props.device.paths.length ? (
          (props.device.paths.map((path, idx) => (
            <p className='path' key={idx}>{`${idx + 1}`}</p>
          )))
        ) : (
          <p>There are no paths!</p>
        )}
      </div>
    </div>
  )
}

export default DeviceCard
