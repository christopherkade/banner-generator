import React from "react"
import styled from "styled-components"
import { TwitterPicker } from "react-color"

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

const ColorInput = ({ bgColor, setBgColor, titleColor, setTitleColor }) => {
  return (
    <Wrapper>
      <InputBlock>
        <Label>Background color</Label>
        <TwitterPicker
          triangle="hide"
          color={bgColor}
          onChangeComplete={(color) => setBgColor(color.hex)}
        />
      </InputBlock>
      <InputBlock>
        <Label>Title color</Label>
        <TwitterPicker
          triangle="hide"
          color={titleColor}
          onChangeComplete={(color) => setTitleColor(color.hex)}
        />
      </InputBlock>
    </Wrapper>
  )
}

export default ColorInput
