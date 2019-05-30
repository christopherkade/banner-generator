import React from "react"
import styled from "styled-components"

import { Input } from "components/Atoms/Input"

const Wrapper = styled.div`
  display: flex;
`

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
`

const Label = styled.label`
  font-weight: 300;
  margin-bottom: 0.2rem;
  font-size: 0.75rem;
`

const InputWrapper = ({ values, setters }) => {
  const { bgColor, title, titleColor } = values
  const { setBgColor, setTitle, setTitleColor } = setters

  return (
    <Wrapper>
      <InputBlock>
        <Label>Title</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </InputBlock>
      <InputBlock>
        <Label>Background color</Label>
        <Input value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      </InputBlock>
      <InputBlock>
        <Label>Title Color</Label>
        <Input value={titleColor} onChange={(e) => setTitleColor(e.target.value)} />
      </InputBlock>
    </Wrapper>
  )
}

export default InputWrapper
