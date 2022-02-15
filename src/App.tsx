import React, { useCallback, useReducer, useRef } from 'react'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoTemplate from './components/TodoTemplate'

export interface todo {
  id: number
  text: string
  checked: boolean
}

interface todoAction {
  type: 'INSERT' | 'REMOVE' | 'TOGGLE'
  todo?: todo
  id?: number
}

const createBulkTodos = () => {
  const array = []
  for (let i = 1; i <= 2500; ++i) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }
  return array
}

const todoReducer = (todos: todo[], action: todoAction) => {
  switch (action.type) {
    case 'INSERT':
      return action.todo ? todos.concat(action.todo) : todos
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id)
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      )
  }
}

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
  const nextId = useRef<number>(2501)

  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    dispatch({ type: 'INSERT', todo })
    nextId.current += 1
  }, [])

  const onRemove = useCallback((id: number) => {
    dispatch({ type: 'REMOVE', id })
  }, [])

  const onToggle = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE', id })
  }, [])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )
}

export default App
