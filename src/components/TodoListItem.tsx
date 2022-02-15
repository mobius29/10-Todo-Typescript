import React from 'react'
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import { todo } from '../App'
import {
  Virtualized,
  Item,
  Checkbox,
  Text,
  Remove,
} from './styles/TodoListItem'

interface Props {
  todo: todo
  style: any
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoListItem: React.FC<Props> = ({ todo, style, onRemove, onToggle }) => {
  const { id, text, checked } = todo
  return (
    <Virtualized style={style}>
      <Item>
        <Checkbox checked={checked} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <Text checked={checked}>{text}</Text>
        </Checkbox>
        <Remove onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </Remove>
      </Item>
    </Virtualized>
  )
}

export default React.memo(TodoListItem)
