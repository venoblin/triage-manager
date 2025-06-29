import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './PathCard.css'

const PathCard = (props) => {
  const appContext = useContext(AppContext)
  
  const isSelected = props.selectedPath && props.selectedPath.id === props.path.id
  const isEditMode = props.isEditMode === true

  const initialFormState = {
    hopName: ''
  }
  const [formState, setFormState] = useState(initialFormState)

  const handleSubmit = (evt) => {
    evt.preventDefault()

    appContext.postHop(props.triage.id, props.device.id, props.selectedPath.id, formState)

    setFormState(initialFormState)
  }

  const handleChange = (evt) => {
    const target = evt.target
    const newFormState = {...formState, [target.name]: target.value}
    setFormState(newFormState)
  }

  const selectPath = () => {
    props.setSelectedPath(props.path)
  }

  return (
    <div className={`PathCard ${isEditMode && 'edit-mode'}`}>

      <div className='path-wrap'>
        <div>
          <p className='position'>{props.position + 1}</p>
          {isEditMode && !isSelected && (
            <button onClick={selectPath}>Edit</button>
          )}
        </div>
        
        <div className={`hops-wrap ${isSelected && 'selected'}`}>
          
          {props.path.hops.length > 0 ? (
            (props.path.hops.map((hop, idx) => (
              <p key={idx} className='hop'>
                {`${hop.hopName}${idx !== props.path.hops.length - 1 ? ' ->' : ''}`}
              </p>
            )))
          ) : (
            (!isSelected && (
              <p>There are no hops!</p>
            ))
          )}
        </div>
      </div>

      {isSelected && isEditMode && (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='hopName'
            id='hopName'
            value={formState.hopName}
            onChange={(evt) => handleChange(evt)}
            required
          />
          <button>Add</button>
        </form>
      )}
    </div>
  )
}

export default PathCard
