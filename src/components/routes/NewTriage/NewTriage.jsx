import { useState } from 'react'
import './NewTriage.css'

const NewTriage = () => {
  const [formState, setFormState] = useState({
    name: ''
  })

  const handleChange = (evt) => {
    console.log(evt)
  }
  
  return (
    <div className='NewTriage'>
      <form>
        <label htmlFor='name'>Name</label>
        <input 
          type='text'
          name='name'
          id='name'
          onChange={(evt) => handleChange(evt)}
        />

        <button>Create</button>
      </form>
    </div>
  )
}

export default NewTriage
