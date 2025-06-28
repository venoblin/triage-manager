import PathCard from '../PathCard/PathCard'
import './DevicePaths.css'

const DevicePaths = (props) => {
  return (
    <div className='DevicePaths'>
      {props.device.paths.map((path, idx) => (
        <PathCard 
          key={idx} 
          position={idx} 
          triage={props.triage} 
          path={path}
          isEditMode={props.isEditMode}
        />
      ))}
    </div>
  )
}

export default DevicePaths
