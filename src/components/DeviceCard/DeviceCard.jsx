import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './DeviceCard.css'

const DeviceCard = (props) => {
  const appContext = useContext(AppContext)
  
  const handleCreatePath = () => {
    appContext.generatePath(props.triage.id, props.device.id)
  }

  return (
    <div className='DeviceCard'>
      <h2>{props.device.hostName}</h2>

      <div className='paths-wrap'>
        {props.device.paths.length ? (
          (props.device.paths.map((path, idx) => (
            <p className='path' key={idx}>{`${idx + 1}`}</p>
          )))
        ) : (
          <p>There are no paths!</p>
        )}
      </div>

      <button onClick={handleCreatePath}>Create Path</button>
    </div>
  )
}

export default DeviceCard
