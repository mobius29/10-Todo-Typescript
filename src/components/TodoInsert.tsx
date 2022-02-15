import React, { useCallback, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { Form, Input, Button } from './styles/TodoInsert'

interface Props {
  onInsert: (text: string) => void
}

const TodoInsert: React.FC<Props> = ({ onInsert }) => {
  const [value, setValue] = useState('')

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      onInsert(value)
      setValue('')

      e.preventDefault()
    },
    [onInsert, value]
  )

  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <Button type="submit">
        <MdAdd />
      </Button>
    </Form>
  )
}

export default TodoInsert
