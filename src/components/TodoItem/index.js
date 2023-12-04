// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todolistDetails, deleteDetails} = props
  const {title, id} = todolistDetails
  const [editStatus, setEdit] = useState(false)
  const [editText, setEditText] = useState(title)

  const ondelete = () => {
    deleteDetails(id)
  }

  const onClickEdit = () => {
    setEdit(!editStatus)
  }

  let typeOfButton
  let titleChange = title
  if (editStatus === true) {
    typeOfButton = 'Save'
    const onEnterTodo = event => {
      setEditText(event.target.value)
    }

    titleChange = (
      <input
        type="text"
        className="todo-inputs"
        onChange={onEnterTodo}
        value={editText}
      />
    )
  } else {
    typeOfButton = 'Edit'
    titleChange = editText
  }

  return (
    <li className="listItem">
      <p className="textcontent">{titleChange}</p>
      <div className="button-card">
        <button className="editbutton" type="button" onClick={onClickEdit}>
          {typeOfButton}
        </button>
        <button type="button" className="deletebutton" onClick={ondelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
