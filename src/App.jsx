import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewTriageRoute from './components/routes/NewTriageRoute/NewTriageRoute'
import TriageRoute from './components/routes/TriageRoute/TriageRoute'
import './styles/App.css'

function App() {

  return (
    <>
      <NavBar />

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
