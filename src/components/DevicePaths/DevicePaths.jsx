import { useState } from 'react'
import PathCard from '../PathCard/PathCard'
import './DevicePaths.css'

const DevicePaths = (props) => {
  const [selectedPath, setSelectedPath] = useState(null)
  
  return (
    <div className='DevicePaths'>
      {props.device.paths.map((path, idx) => (
        <PathCard 
          key={path.id} 
          position={idx} 
          triage={props.triage} 
          path={path}
          selectedPath={selectedPath}
          setSelectedPath={setSelectedPath}
          isEditMode={props.isEditMode}
        />
      ))}
    </div>
  )
}

export default DevicePaths
