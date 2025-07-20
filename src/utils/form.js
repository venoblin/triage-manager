export const onSubmit = (evt, func) => {
  evt.preventDefault()

  func()
}

export const onChange = (evt, formState, setFormState) => {
  const target = evt.target
  const newFormState = { ...formState, [target.name]: target.value }
  setFormState(newFormState)
}
