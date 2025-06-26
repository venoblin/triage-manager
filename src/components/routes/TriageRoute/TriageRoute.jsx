import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import { LayoutContext } from '../../../contexts/LayoutContext'
import DeviceEditor from '../../DeviceEditor/DeviceEditor'
import './TriageRoute.css'

const TriageRoute = () => {
  const appContext = useContext(AppContext)
  const layoutContext = useContext(LayoutContext)
  const {id} = useParams()
  
  const initialFormState = {
    hostName: ''
  }
  const [formState, setFormState] = useState(initialFormState)
  const [triage, setTriage] = useState()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    appContext.postDevice(triage.id, formState)

    setFormState(initialFormState)
  }

  const handleChange = (evt) => {
    const target = evt.target
    const newFormState = {...formState, [target.name]: target.value}
    setFormState(newFormState)
  }
  
  const populateTriage = () => {
    setTriage(appContext.getTriage(id))
  }

  const addSubBar = () => {
    layoutContext.addSubBar(
      <div className='triage-head'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='hostName'>Hostname</label>
          <input 
            type='text'
            name='hostName'
            id='hostName'
            value={formState.hostName}
            onChange={(evt) => handleChange(evt)}
          />
          <button>Add Device</button>
        </form>
      </div>
    )
  }

  useEffect(() => {
    populateTriage()
    addSubBar()
  }, [appContext])

  return (
    <div className='TriageRoute'>
      {triage ? (
        <div className='triage-wrap'>

          <DeviceEditor triage={triage} />
          
        </div>
      ) : (
        <h1>{`No triage found!`}</h1>
      )}
    </div>
  )
}

export default TriageRoute
