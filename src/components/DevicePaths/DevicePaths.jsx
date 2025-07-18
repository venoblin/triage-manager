import PathCard from '../PathCard/PathCard'
import './DevicePaths.css'

const DevicePaths = (props) => {
  
  return (
    <div className='DevicePaths'>
      {props.device.paths.map((path, idx) => (
        <PathCard 
          key={path.id} 
          position={idx} 
          triage={props.triage} 
          device={props.device}
          path={path}
          selectedPath={props.selectedPath}
          setSelectedPath={props.setSelectedPath}
          isEditMode={props.isEditMode}
        />
      ))}
    </div>
  )
}

export default DevicePaths
