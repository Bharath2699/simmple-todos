// Write your code here
import './index.css'

const TodoItem = props => {
  const {todolistDetails, deleteDetails} = props
  const {title, id} = todolistDetails

  const ondelete = () => {
    deleteDetails(id)
  }

  return (
    <li className="listItem">
      <p className="textcontent">{title}</p>
      <button type="button" className="deletebutton" onClick={ondelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
