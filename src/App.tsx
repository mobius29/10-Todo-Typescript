import React from 'react'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoTemplate from './components/TodoTemplate'

const App: React.FC = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  )
}

export default App
