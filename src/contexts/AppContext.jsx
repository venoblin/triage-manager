import { createContext, useState, useEffect } from 'react'
import { setStorageItem, getStorageItem } from '../utils/localStorage'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [triages, setTriages] = useState([])

  const addTriage = (newTriage) => {
    const updatedTriages = [...triages, newTriage]
    
    setTriages(updatedTriages)
    setStorageItem('triages', updatedTriages)
  }

  useEffect(() => {
    const storageTriages = getStorageItem('triages')
    if (storageTriages) setTriages(storageTriages)
  }, [])
  
  return (
    <AppContext.Provider value={{
      triages, 
      addTriage
    }}>
      {props.children}
    </AppContext.Provider>
  )
}