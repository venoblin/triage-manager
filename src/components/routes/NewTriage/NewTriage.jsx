import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import './NewTriage.css'

const NewTriage = () => {
  const appContext = useContext(AppContext)
  const navigate = useNavigate()
  
  const initialFormState = {
    name: ''
  }
  const [formState, setFormState] = useState(initialFormState)

  const handleSubmit = (evt) => {
    evt.preventDefault()

    appContext.addTriage(formState)

    setFormState(initialFormState)

    navigate('/')
  }

  const handleChange = (evt) => {
    const target = evt.target
    const newFormState = {...formState, [target.name]: target.value}
    setFormState(newFormState)
  }
  
  return (
    <div className='NewTriage'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input 
          type='text'
          name='name'
          id='name'
          value={formState.name}
          onChange={(evt) => handleChange(evt)}
        />

        <button>Create</button>
      </form>
    </div>
  )
}

export default NewTriage
