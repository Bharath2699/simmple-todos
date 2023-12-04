import {Component} from 'react'
import {v4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todolist: initialTodosList, todo: ''}

  deleteDetails = id => {
    const {todolist} = this.state
    const filteredTodolist = todolist.filter(eachlist => eachlist.id !== id)
    this.setState({todolist: filteredTodolist})
  }

  onChangeInput = event => {
    this.setState({todo: event.target.value})
  }

  onAddTodoItem = event => {
    event.preventDefault()
    const {todo} = this.state

    const newTodo = {
      id: v4(),
      title: todo,
    }
    this.setState(prevState => ({
      todolist: [...prevState.todolist, newTodo],

      todo: '',
    }))
  }

  render() {
    const {todolist, todo} = this.state
    return (
      <div className="overall-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="form-card">
            <form className="todos-addition" onSubmit={this.onAddTodoItem}>
              <input
                type="text"
                className="todo-input"
                onChange={this.onChangeInput}
                value={todo}
                placeholder="Enter the Todos"
              />
              <button type="submit" className="addButton">
                Add
              </button>
            </form>
          </div>
          <ul>
            {todolist.map(eachitem => (
              <TodoItem
                todolistDetails={eachitem}
                key={eachitem.id}
                deleteDetails={this.deleteDetails}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
