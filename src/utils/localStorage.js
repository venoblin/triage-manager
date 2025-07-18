export const getStorageItem = (key) => {
  return JSON.parse(window.localStorage.getItem(key))
}

export const setStorageItem = (key, item) => {
  window.localStorage.setItem(key, JSON.stringify(item))
}
