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

const RowLabel = styled.label`
  font-weight: 300;
  margin-right: 0.2rem;
  font-size: 0.7zrem;
`

const MiscInput = ({ hasBorder, setHasBorder }) => {
  return (
    <>
      <InputBlock isRow={true}>
        <RowLabel>Borders</RowLabel>
        <Input type="checkbox" value={hasBorder} checked={hasBorder} onChange={(e) => setHasBorder(e.target.checked)} />
      </InputBlock>
    </>
  )
}

export default MiscInput
