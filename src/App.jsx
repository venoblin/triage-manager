import { Route, Routes } from 'react-router-dom'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewTriageRoute from './components/routes/NewTriageRoute/NewTriageRoute'
import TriageRoute from './components/routes/TriageRoute/TriageRoute'
import './styles/App.css'

const App = () => {
  
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<HomeRoute />} />
          <Route path='/triage/new' element={<NewTriageRoute />} />
          <Route path='/triage/:id' element={<TriageRoute />} />
        </Routes>
      </main>
      
    </>
  )
}

export default App
