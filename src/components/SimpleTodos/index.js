import {Component} from 'react'
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
  state = {todolist: initialTodosList}

  deleteDetails = id => {
    const {todolist} = this.state
    const filteredTodolist = todolist.filter(eachlist => eachlist.id !== id)
    this.setState({todolist: filteredTodolist})
  }

  render() {
    const {todolist} = this.state
    return (
      <div className="overall-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
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
