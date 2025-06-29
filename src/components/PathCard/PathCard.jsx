import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './PathCard.css'

const PathCard = (props) => {
  const appContext = useContext(AppContext)
  
  const isSelected = props.selectedPath && props.selectedPath.id === props.path.id
  const isEditMode = props.isEditMode === true

  const hopFormInitial = {
    hopName: '',
  }
  const destFormInitial = {
    destHostName: '',
    port: ''
  }
  const [hopFormState, setHopFormState] = useState(hopFormInitial)
  const [destFormState, setDestFormState] = useState(destFormInitial)
  const [formType, setFormType] = useState('hop')

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (formType === 'hop') {
      appContext.postHop(
        props.triage, 
        props.device, 
        props.selectedPath, 
        {hopName: hopFormState.hopName}
      )
    } else if (formType === 'destination') {
      console.log(destFormState)
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

  const selectPath = () => {
    props.setSelectedPath(props.path)
  }

  return (
    <div className={`PathCard ${isEditMode && 'edit-mode'}`}>

      <div className='path-wrap'>
        <div>
          <p className='position'>{props.path.port}</p>
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
        <div>
          <div className='form-switcher'>
            <button 
              onClick={() => handleFormSwitch('hop')} 
              className={`hop-btn${formType === 'hop' ? ' active' : ''}`}
            >
                Hop
            </button>

            <button 
              onClick={() => handleFormSwitch('destination')} 
              className={`destination-btn${formType === 'destination' ? ' active' : ''}`}
            >
              Destination
            </button>
          </div>

            <form onSubmit={handleSubmit}>
              {formType === 'hop' && 
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

              {formType === 'destination' && 
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
          
        </div>
      )}
    </div>
  )
}

export default PathCard
