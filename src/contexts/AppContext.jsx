import { createContext, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { setStorageItem, getStorageItem } from '../utils/localStorage'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [triages, setTriages] = useState([])

  const triageTemplate = {
    id: uuid(), 
    devices: []
  }
  const deviceTemplate = {
    id: uuid(), 
    paths: []
  }
  const pathTemplate = {
    id: uuid(), 
    hops: [],
    destination: null
  }
  const hopTemplate = {
    id: uuid()
  }

  const refreshTriages = (updatedTriages) => {
    setTriages(updatedTriages)
    setStorageItem('triages', updatedTriages)
  }

  const postTriage = (payload) => {
    const createdTriage = {...payload, ...triageTemplate}
    const updatedTriages = [...triages, createdTriage]
    
    refreshTriages(updatedTriages)

    return createdTriage
  }

  const postDevice = (triageId, payload) => {
    const createdDevice = {...payload, ...deviceTemplate}
    const updatedTriages = [...triages]

    for (let i = 0; i < updatedTriages.length; i++) {

      if (updatedTriages[i].id === triageId) {
        updatedTriages[i].devices.push(createdDevice)
        break
      }
    }

    refreshTriages(updatedTriages)
  }

  const postPath = (triageId, deviceId) => {
    const updatedTriages = [...triages]

    for (let i = 0; i < updatedTriages.length; i++) {
      if (updatedTriages[i].id === triageId) {
        for (let j = 0; j < updatedTriages[i].devices.length; j++) {
          const device = updatedTriages[i].devices[j]
          
          if (device.id === deviceId) {
            device.paths.push({
              ...pathTemplate, 
              position: device.paths.length,
            })
            
            break
          }
        }
        break
      }
    }

    refreshTriages(updatedTriages)
  }

  const postHop = (triageId, deviceId, pathId, payload) => {
    const createdHop = {...payload, ...hopTemplate}
    const updatedTriages = [...triages]

    for (let triage of updatedTriages) {
      if (triage.id === triageId) {
        for (let device of triage.devices) {
          if (device.id === deviceId) {
            for (let path of device.paths) {
              if (path.id === pathId) {
                path.hops.push(createdHop)

                break
              }
            }
            break
          }
        }
        break
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
      postDevice,
      postPath,
      postHop
    }}>
      {props.children}
    </AppContext.Provider>
  )
}