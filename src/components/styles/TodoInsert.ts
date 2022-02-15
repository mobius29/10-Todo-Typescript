import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  background: #495057;
`

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1;
  &::placeholder {
    color: #dee2e6;
  }
`

export const Button = styled.button`
  background: #868e96;
  color: white;
  padding: 0 1rem 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`
