import TodoListItem from './TodoListItem'
import React, { useCallback } from 'react'
import { todo } from '../App'
import { List } from 'react-virtualized'

interface Props {
  todos: todo[]
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoList: React.FC<Props> = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, style }) => {
      const todo = todos[index]
      return (
        <TodoListItem
          todo={todo}
          style={style}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      )
    },
    [todos, onRemove, onToggle]
  )

  return (
    <List
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  )
}

export default React.memo(TodoList)
