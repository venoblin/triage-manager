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
      

      <div className={`hops ${isSelected && 'selected'}`}></div>
    </div>
  )
}

export default PathCard
