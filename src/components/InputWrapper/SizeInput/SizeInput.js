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

const SizeInput = ({ titleSize, borderSize, setTitleSize, setBorderSize }) => {
  return (
    <>
      <InputBlock>
        <Label>Title size (in <code>rem</code>)</Label>
        <Input value={titleSize} type="number" min="1" onChange={(e) => setTitleSize(e.target.value)} />
      </InputBlock>
      <InputBlock>
        <Label>Border size (in <code>px</code>)</Label>
        <Input value={borderSize} type="number" min="0" onChange={(e) => setBorderSize(e.target.value)} />
      </InputBlock>
    </>
  )
}

export default SizeInput
