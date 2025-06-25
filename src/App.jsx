import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutContext } from './contexts/LayoutContext'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewTriageRoute from './components/routes/NewTriageRoute/NewTriageRoute'
import TriageRoute from './components/routes/TriageRoute/TriageRoute'
import './styles/App.css'

const App = () => {
  const layoutContext = useContext(LayoutContext)

  return (
    <>
      <layoutContext.NavBar />

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
