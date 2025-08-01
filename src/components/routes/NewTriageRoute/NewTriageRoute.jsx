import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import './NewTriageRoute.css'

const NewTriageRoute = () => {
  const appContext = useContext(AppContext)
  const navigate = useNavigate()
  
  const initialFormState = {
    name: ''
  }
  const [formState, setFormState] = useState(initialFormState)

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newTriage = appContext.postTriage(formState)

    setFormState(initialFormState)

    navigate(`/triage/${newTriage.id}`)
  }

  const handleChange = (evt) => {
    const target = evt.target
    const newFormState = {...formState, [target.name]: target.value}
    setFormState(newFormState)
  }
  
  return (
    <div className='NewTriageRoute'>
      <h1>Create New Triage</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input 
          type='text'
          name='name'
          id='name'
          value={formState.name}
          onChange={(evt) => handleChange(evt)}
          required
        />

        <button>Create</button>
      </form>
    </div>
  )
}

export default NewTriageRoute
