import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './PathCard.css'

const PathCard = (props) => {
  const appContext = useContext(AppContext)
  
  const isSelected = props.selectedPath && props.selectedPath.id === props.path.id
  const isEditMode = props.isEditMode === true
  const classes = `PathCard ${isEditMode ? 'edit-mode' : ''} ${isSelected ? 'selected' : ''}`

  const portFormInitial = {
    port: props.path.port
  }
  const hopFormInitial = {
    hopName: '',
  }
  const destFormInitial = {
    destHostName: '',
    port: ''
  }
  const type = {
    HOP: 'hop',
    DEST: 'dest',
    PORT: 'port'
  }
  const [portFormState, setPortFormState] = useState(portFormInitial)
  const [hopFormState, setHopFormState] = useState(hopFormInitial)
  const [destFormState, setDestFormState] = useState(destFormInitial)
  const [formType, setFormType] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (formType === type.HOP) {
      appContext.postHop(
        props.triage, 
        props.device, 
        props.selectedPath, 
        hopFormState
      )
    } else if (formType === type.DEST) {
      appContext.postDestination(
        props.triage, 
        props.device, 
        props.selectedPath, 
        destFormState
      )
    } 
    
    setHopFormState(hopFormInitial)
    setDestFormState(destFormInitial)
  }

  const handleChange = (evt, formState, setFormState) => {
    const target = evt.target
    const newFormState = {...formState, [target.name]: target.value}
    setFormState(newFormState)
  }

  const handleFormSwitch = (formType) => {
    setFormType(formType)
  }

  const cancelHandler = () => {
    props.setSelectedPath(null)
    setFormType('')
  }

  const selectPath = () => {
    props.setSelectedPath(props.path)
  }

  return (
    <div className={classes}>
      <div className='path-wrap'>
        <div className='port-wrap'>
          <h3>Port</h3>
          
          {isEditMode && isSelected &&
            <button onClick={() => handleFormSwitch(type.PORT)}>Edit Port</button>
          }

          <p className='position'>{props.path.port}</p>

          {isEditMode && !isSelected && (
            <div className='path-inputs'>
              <button onClick={selectPath}>Edit Path</button>
              <button>Delete Path</button>
            </div>
          )}
        </div>
        
        <div className={`hops-wrap`}>
          <h3>Hops</h3>
          {isEditMode && isSelected &&
            <button onClick={() => handleFormSwitch(type.HOP)}>Add Hop</button>
          }
          
          <div className='hops'>
            {props.path.hops.length > 0 ? (
              (props.path.hops.map((hop, idx) => (
                <div key={hop.id} className='hop'>
                  {isEditMode && isSelected &&
                    <div className='hop-inputs'>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  }
                  <p>
                    {`${hop.hopName}${idx !== props.path.hops.length - 1 ? ' ->' : ''}`}
                  </p>
                </div>
              )))
            ) : (
              <p>There are no hops!</p>
            )}
          </div>
        </div>

        <div className='destination-wrap'>
          <h3>Destination</h3>
          {isEditMode && isSelected &&
            <button onClick={() => handleFormSwitch(type.DEST)}>
              {props.path.destination !== null ? 'Edit ' : 'Add '}Destination
            </button>
          }
          
          {props.path.destination !== null ? (
            <div className='destination'>
              {isEditMode && isSelected &&
                <div className='port-inputs'>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              }
              
              <p>{props.path.destination.destHostName}</p>
              <p>{props.path.destination.port}</p>
            </div>
          ) : (
            <p>There is no destination!</p>
          )}
        </div>
      </div>

      {isSelected && isEditMode && (
        <div>
          {formType !== '' && (
            <form onSubmit={handleSubmit}>
              {formType === type.PORT && 
                <div>
                  <label htmlFor='port'>Port</label>
                  <input
                    type='text'
                    name='port'
                    id='port'
                    value={portFormState.port}
                    onChange={(evt) => handleChange(evt, portFormState, setPortFormState)}
                    required
                  />
                </div>
              }
              
              {formType === type.HOP && 
                <div>
                  <label htmlFor='hopName'>Hop</label>
                  <input
                    type='text'
                    name='hopName'
                    id='hopName'
                    value={hopFormState.hopName}
                    onChange={(evt) => handleChange(evt, hopFormState, setHopFormState)}
                    required
                  />
                </div>
              }

              {formType === type.DEST && 
                <div>
                  <label htmlFor='destHostName'>Destination</label>
                  <input
                    type='text'
                    name='destHostName'
                    id='destHostName'
                    value={destFormState.destHostName}
                    onChange={(evt) => handleChange(evt, destFormState, setDestFormState)}
                    required
                  />

                  <label htmlFor='port'>Port</label>
                  <input
                    type='text'
                    name='port'
                    id='port'
                    value={destFormState.port}
                    onChange={(evt) => handleChange(evt, destFormState, setDestFormState)}
                    required
                  />
                </div>
              }
              <button>Add</button>
            </form>
          )}
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      )}
    </div>
  )
}

export default PathCard
