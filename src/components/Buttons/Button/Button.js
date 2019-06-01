import styled from "styled-components"

const Button = styled.button`
  padding: 0.1875rem 1rem;
  background-color: #cfd7ff;
  font-size: 1rem;
  border: 0.125rem solid black;
  border-radius: 0.1875rem;
  margin: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: transparent;
  }
`

export default Button
