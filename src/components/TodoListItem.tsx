import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import { todo } from '../App'
import { Item, Checkbox, Text, Remove } from './styles/TodoListItem'

interface Props {
  todo: todo
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoListItem: React.FC<Props> = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo
  return (
    <Item>
      <Checkbox checked={checked} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text checked={checked}>{text}</Text>
      </Checkbox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </Item>
  )
}

export default TodoListItem
