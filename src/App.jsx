import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import './styles/App.css'

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomeRoute />} />
      </Routes>
    </>
  )
}

export default App
