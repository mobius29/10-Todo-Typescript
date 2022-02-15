import TodoListItem from './TodoListItem'
import React from 'react'
import { todo } from '../App'
import { List } from './styles/TodoList'

interface Props {
  todos: todo[]
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoList: React.FC<Props> = ({ todos, onRemove, onToggle }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoListItem todo={todo} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </List>
  )
}

export default TodoList
