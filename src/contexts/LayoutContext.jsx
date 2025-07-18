import { createContext, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'

export const LayoutContext = createContext()

export const LayoutProvider = (props) => {
  const [subBar, setSubBar] = useState(null)
  
  const addSubBar = (component) => {
    setSubBar(component)
  }

  return (
    <LayoutContext.Provider value={{
      addSubBar
    }}>
      <NavBar subBar={subBar} />

      {props.children}
    </LayoutContext.Provider>
  )
}