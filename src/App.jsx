import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewTriage from './components/routes/NewTriage/NewTriage'
import './styles/App.css'

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/new' element={<NewTriage />} />
      </Routes>
    </>
  )
}

export default App
