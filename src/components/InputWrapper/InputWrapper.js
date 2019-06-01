import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { ContentInput } from "components/InputWrapper/ContentInput"
import { ColorInput } from "components/InputWrapper/ColorInput"
import { SizeInput } from "components/InputWrapper/SizeInput"
import { MiscInput } from "components/InputWrapper/MiscInput"

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const InputWrapper = ({ values, setters }) => {
  const { bgColor, title, titleSize, titleColor, hasBorder } = values
  const { setBgColor, setTitle, setTitleSize, setTitleColor, setHasBorder } = setters

  return (
    <Wrapper>
      <ContentInput title={title} setTitle={setTitle} />
      <ColorInput
        bgColor={bgColor} setBgColor={setBgColor}
        titleColor={titleColor} setTitleColor={setTitleColor}
      />
      <SizeInput titleSize={titleSize} setTitleSize={setTitleSize} />
      <MiscInput hasBorder={hasBorder} setHasBorder={setHasBorder} />
    </Wrapper>
  )
}

InputWrapper.propTypes = {
  values: PropTypes.shape({
    bgColor: PropTypes.string,
    title: PropTypes.string,
    titleSize: PropTypes.string,
    titleColor: PropTypes.string,
    hasBorder: PropTypes.bool
  }).isRequired,
  setters: PropTypes.shape({
    setBgColor: PropTypes.func,
    setTitle: PropTypes.func,
    setTitleSize: PropTypes.func,
    setTitleColor: PropTypes.func,
    setHasBorder: PropTypes.func
  }).isRequired
}


export default InputWrapper
