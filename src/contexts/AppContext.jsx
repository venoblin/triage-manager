import { createContext, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { setStorageItem, getStorageItem } from '../utils/localStorage'


export const AppContext = createContext()

export const AppProvider = (props) => {
  const [triages, setTriages] = useState([])

  const refreshTriages = (updatedTriages) => {
    setTriages(updatedTriages)
    setStorageItem('triages', updatedTriages)
  }

  const postTriage = (payload) => {
    const createdTriage = {...payload, id: uuid(), devices: []}
    const updatedTriages = [...triages, createdTriage]
    
    refreshTriages(updatedTriages)

    return createdTriage
  }

  const postDevice = (triageId, payload) => {
    const updatedTriages = [...triages]

    for (let i = 0; i < updatedTriages.length; i++) {
      if (updatedTriages[i].id === triageId) {
        updatedTriages[i].devices.push({...payload, paths: [], destination: null})
      }
    }

    refreshTriages(updatedTriages)
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
      getTriage,
      postDevice
    }}>
      {props.children}
    </AppContext.Provider>
  )
}