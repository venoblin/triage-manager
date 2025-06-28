import Path from '../Path/Path'
import './DevicePaths.css'

const DevicePaths = (props) => {
  return (
    <div className='DevicePaths'>
      {props.device.paths.map((path, idx) => (
        <Path 
          key={idx} 
          position={idx} 
          triage={props.triage} 
          path={path}
        />
      ))}
    </div>
  )
}

export default DevicePaths
