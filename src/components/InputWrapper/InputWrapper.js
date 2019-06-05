import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { ContentInput } from "components/InputWrapper/ContentInput"
import { ColorInput } from "components/InputWrapper/ColorInput"
import { SizeInput } from "components/InputWrapper/SizeInput"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Detail = styled.details`
  margin-left: 1rem;
`

const Summary = styled.summary`
  text-align: left;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: transparent;
  }
`

const InputWrapper = ({ values, setters }) => {
  const { bgColor, title, titleSize, titleColor, borderColor, borderSize } = values
  const { setBgColor, setTitle, setTitleSize, setTitleColor, setBorderColor, setBorderSize } = setters

  return (
    <Wrapper>
      <Detail open>
        <Summary>Content</Summary>
        <ContentInput title={title} setTitle={setTitle} />
      </Detail>
      <Detail>
        <Summary>Colors</Summary>
        <ColorInput
          bgColor={bgColor} setBgColor={setBgColor}
          titleColor={titleColor} setTitleColor={setTitleColor}
          borderColor={borderColor} setBorderColor={setBorderColor}
        />
      </Detail>
      <Detail>
        <Summary>Sizes</Summary>
        <SizeInput titleSize={titleSize} borderSize={borderSize} setTitleSize={setTitleSize} setBorderSize={setBorderSize} />
      </Detail>
    </Wrapper>
  )
}

InputWrapper.propTypes = {
  values: PropTypes.shape({
    bgColor: PropTypes.string,
    title: PropTypes.string,
    titleSize: PropTypes.string,
    titleColor: PropTypes.string,
    borderColor: PropTypes.string,
    hasBorder: PropTypes.bool
  }).isRequired,
  setters: PropTypes.shape({
    setBgColor: PropTypes.func,
    setTitle: PropTypes.func,
    setTitleSize: PropTypes.func,
    setTitleColor: PropTypes.func,
    setBorderColor: PropTypes.func,
    setHasBorder: PropTypes.func
  }).isRequired
}


export default InputWrapper
