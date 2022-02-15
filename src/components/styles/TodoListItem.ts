import styled from 'styled-components'

interface checked {
  checked: boolean
}

export const Virtualized = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;
  }

  &:nth-child(even) {
    background: #f8f9fa;
  }
`

export const Item = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`

export const Checkbox = styled.div<checked>`
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  svg {
    font-size: 1.5rem;
    color: ${(props) => props.checked && '#22b8cf'};
  }
`

export const Text = styled.div<checked>`
  margin-left: 0.5rem;
  flex: 1;

  color: ${(props) => props.checked && '#adb5bd'};
  text-decoration: ${(props) => props.checked && 'line-through'};
`

export const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`
