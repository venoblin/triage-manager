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

  const findItem = (item) => {
    const updatedTriages = [...triages]
    
    for (let t of updatedTriages) {
      if (t.id === item.id) {
        for (let d of t.devices) {
          if (d.id === item.id) {
            for (let p of d.paths) {
              if (p.id === item.id) {
                p.hops.push({
                  ...createdHop,
                  pos: p.hops.length
                })

                break
              }
            }
            break
          }
        }
        break
      }
    }
  }

  const postTriage = (payload) => {
    const createdTriage = {
      ...payload, 
      ...triageTemplate,
      pos: triages.length
    }
    const updatedTriages = [...triages, createdTriage]
    
    refreshTriages(updatedTriages)

    return createdTriage
  }

  const postDevice = (triage, payload) => {
    const createdDevice = {
      ...payload, 
      ...deviceTemplate,
      pos: triage.devices.length
    }
    const updatedTriages = [...triages]

    for (let i = 0; i < updatedTriages.length; i++) {

      if (updatedTriages[i].id === triage.id) {
        updatedTriages[i].devices.push(createdDevice)
        break
      }
    }

    refreshTriages(updatedTriages)
  }

  const postPath = (triage, device, payload) => {
    const createdPath = {...pathTemplate}
    const updatedTriages = [...triages]

    for (let i = 0; i < updatedTriages.length; i++) {
      if (updatedTriages[i].id === triage.id) {
        for (let j = 0; j < updatedTriages[i].devices.length; j++) {
          const d = updatedTriages[i].devices[j]
          
          if (d.id === device.id) {
            d.paths.push({
              ...createdPath,
              ...payload, 
              pos: d.paths.length,
            })
            
            break
          }
        }
        break
      }
    }

    refreshTriages(updatedTriages)
  }

  const postHop = (triage, device, path, payload) => {
    const createdHop = {...payload, ...hopTemplate}
    const updatedTriages = [...triages]

    for (let t of updatedTriages) {
      if (t.id === triage.id) {
        for (let d of t.devices) {
          if (d.id === device.id) {
            for (let p of d.paths) {
              if (p.id === path.id) {
                p.hops.push({
                  ...createdHop,
                  pos: p.hops.length
                })

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

  const postDestination = (triage, device, path, payload) => {
    const updatedTriages = [...triages]
    const found = updatedTriages[triage.pos].devices[device.pos].paths[path.pos]

    if (found.id === path.id) {
      found.destination = {...payload}
    } else {
      for (let t of updatedTriages) {
        if (t.id === triage.id) {
          for (let d of t.devices) {
            if (d.id === device.id) {
              for (let p of d.paths) {
                if (p.id === path.id) {
                  p.destination = {...payload}

                  break
                }
              }
              break
            }
          }
          break
        }
      }
    }
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
      postHop,
      postDestination
    }}>
      {props.children}
    </AppContext.Provider>
  )
}