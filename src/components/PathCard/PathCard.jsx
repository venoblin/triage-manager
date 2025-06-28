import './PathCard.css'

const PathCard = (props) => {
  const isSelected = props.selectedPath && props.selectedPath.id === props.path.id
  const isEditMode = props.isEditMode === true

  const selectPath = () => {
    props.setSelectedPath(props.path)
  }

  return (
    <div className={`PathCard ${isEditMode && 'edit-mode'}`}>
      <div>
        <p className='position'>{props.position + 1}</p>
        {isEditMode && !isSelected && (
          <button onClick={selectPath}>Edit</button>
        )}
      </div>
      
      <div className={`hops ${isSelected && 'selected'}`}>
        {isSelected && (
          <form>
            <input
              type='text'
              name='hop'
              id='hop'
              required
            />
            <button>Add</button>
          </form>
        )}
        
        {props.path.length > 0 ? (
          <div>
            <p>Paths</p>
          </div>
        ) : (
          (!isSelected && (
            <p>There are no hops!</p>
          ))
        )}
      </div>
    </div>
  )
}

export default PathCard
