import { createContext, useState } from 'react'
import Nav from '../components/NavBar/NavBar'

export const LayoutContext = createContext()

export const LayoutProvider = (props) => {
  const [SubBarComponent, setSubBarComponent] = useState(null)
  
  const setSubBar = (component) => {
    setSubBarComponent(component)
  }

  const NavBar = () => {
    return Nav({props: {SubBarComponent}})
  }

  return (
    <LayoutContext.Provider value={{
      NavBar,
      setSubBar
    }}>
      {props.children}
    </LayoutContext.Provider>
  )
}