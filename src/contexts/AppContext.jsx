import { createContext, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { setStorageItem, getStorageItem } from '../utils/localStorage'


export const AppContext = createContext()

export const AppProvider = (props) => {
  const [triages, setTriages] = useState([])

  const postTriage = (payload) => {
    const createdTriage = {...payload, id: uuid()}
    const updatedTriages = [...triages, createdTriage]
    
    setTriages(updatedTriages)
    setStorageItem('triages', updatedTriages)

    return createdTriage
  }

  const getTriage = (id) => {
    const foundTriage = triages.find(t => t.id === id)
    
    if (!foundTriage) return null

    return foundTriage
  }

  useEffect(() => {
    const storageTriages = getStorageItem('triages')
    if (storageTriages) setTriages(storageTriages)
  }, [])
  
  return (
    <AppContext.Provider value={{
      triages, 
      postTriage,
      getTriage
    }}>
      {props.children}
    </AppContext.Provider>
  )
}