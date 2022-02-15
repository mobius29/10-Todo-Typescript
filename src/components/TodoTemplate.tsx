import React from 'react'
import { Template, Title, Content } from './styles/TodoTemplate'

interface Props {
  children?: React.ReactNode
}

const TodoTemplate: React.FC<Props> = ({ children }) => {
  return (
    <Template>
      <Title>일정 관리</Title>
      <Content>{children}</Content>
    </Template>
  )
}

export default TodoTemplate
