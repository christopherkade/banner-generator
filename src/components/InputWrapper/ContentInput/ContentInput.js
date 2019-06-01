import React from "react"
import styled from "styled-components"

import { Input } from "components/Input"

const InputBlock = styled.div`
  display: flex;
  flex-direction: ${ (props) => props.isRow ? "row" : "column"};
  align-items: ${ (props) => props.isRow ? "center" : "flex-start"};
  justify-content: center;
  margin: 1rem;

  @media (max-width: 769px) {
    width: 100%;
    align-items: center;
  }
`

const Label = styled.label`
  font-weight: 300;
  margin-bottom: 0.2rem;
  font-size: 0.75rem;
`

const ContentInput = ({ title, setTitle }) => {
  return (
    <InputBlock>
      <Label>Title</Label>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
    </InputBlock>
  )
}

export default ContentInput
