import './PathCard.css'

const PathCard = (props) => {
  return (
    <div className={`PathCard ${props.isEditMode === true && 'edit-mode'}`}>
      <div>
        <p className='position'>{props.position + 1}</p>
        {props.isEditMode === true && (
          <button>Edit</button>
        )}
      </div>
      

      <div className='hops'></div>
    </div>
  )
}

export default PathCard
