import './DevicePaths.css'

const DevicePaths = (props) => {
  return (
    <div className='DevicePaths'>
      {props.device.paths.map((path, idx) => (
        <p className='path' key={idx}>{`${idx + 1}`}</p>
      ))}
    </div>
  )
}

export default DevicePaths
