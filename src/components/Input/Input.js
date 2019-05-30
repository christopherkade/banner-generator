import styled from "styled-components"

const Input = styled.input`
  font-weight: 300;
  font-size: 1rem;
  padding: 0.3125rem;
  border-radius: 4px;
  border: 1px solid black;

  &:focus {
    outline: transparent;
    border: 1px solid darkgrey;
  }
`

export default Input
