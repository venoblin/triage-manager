import './PathCard.css'

const PathCard = (props) => {
  return (
    <div className='PathCard'>
      {props.position + 1}
    </div>
  )
}

export default PathCard
