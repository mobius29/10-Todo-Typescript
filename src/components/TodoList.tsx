import TodoListItem from './TodoListItem'
import styled from 'styled-components'
import React from 'react'

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`

const TodoList: React.FC = () => {
  return (
    <List>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </List>
  )
}

export default TodoList
