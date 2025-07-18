import { Route, Routes } from 'react-router-dom'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewTriageRoute from './components/routes/NewTriageRoute/NewTriageRoute'
import TriageRoute from './components/routes/TriageRoute/TriageRoute'
import NewDeviceRoute from './components/routes/TriageRoute/TriageRoute'
import './styles/App.css'

const App = () => {
  
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<HomeRoute />} />
          <Route path='/new' element={<NewTriageRoute />} />
          <Route path='/triage/:id' element={<TriageRoute />} />
          <Route path='/triage/:id/new' element={<NewDeviceRoute />} />
        </Routes>
      </main>
      
    </>
  )
}

export default App
