import React from "react"
import styled from "styled-components"
import { CompactPicker } from "react-color"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

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

const ColorInput = ({ bgColor, setBgColor, titleColor, setTitleColor, borderColor, setBorderColor }) => {
  const handleBgColorChange = ({ hex }) => {
    setBgColor(hex)
    document.body.style.setProperty('--border-color', hex)
  }

  return (
    <Wrapper>
      <InputBlock>
        <Label>Background color</Label>
        <CompactPicker
          triangle="hide"
          color={bgColor}
          onChangeComplete={(color) => handleBgColorChange(color)}
        />
      </InputBlock>
      <InputBlock>
        <Label>Title color</Label>
        <CompactPicker
          triangle="hide"
          color={titleColor}
          onChangeComplete={(color) => setTitleColor(color.hex)}
        />
      </InputBlock>
      <InputBlock>
        <Label>Border color</Label>
        <CompactPicker
          triangle="hide"
          color={borderColor}
          onChangeComplete={(color) => setBorderColor(color.hex)}
        />
      </InputBlock>
    </Wrapper>
  )
}

export default ColorInput
