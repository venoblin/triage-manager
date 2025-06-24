const storageGetItem = (key) => {
  return JSON.parse(window.localStorage.getItem(key))
}

const storageSetItem = (key, item) => {
  window.localStorage.setItem(key, JSON.stringify(item))
}
