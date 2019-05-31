import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Input } from "components/Input"

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
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

const RowLabel = styled.label`
  font-weight: 300;
  margin-right: 0.2rem;
  font-size: 0.75rem;
`

const InputWrapper = ({ values, setters }) => {
  const { bgColor, title, titleSize, titleColor, hasBorder, borderColor } = values
  const { setBgColor, setTitle, setTitleSize, setTitleColor, setHasBorder, setBorderColor } = setters

  return (
    <Wrapper>
      <InputBlock>
        <Label>Title</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </InputBlock>
      <InputBlock>
        <Label>Title size (in <code>rem</code>)</Label>
        <Input value={titleSize} type="number" min="1" onChange={(e) => setTitleSize(e.target.value)} />
      </InputBlock>
      <InputBlock>
        <Label>Background color</Label>
        <Input value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      </InputBlock>
      <InputBlock>
        <Label>Title color</Label>
        <Input value={titleColor} onChange={(e) => setTitleColor(e.target.value)} />
      </InputBlock>
      <InputBlock>
        <Label>Border color</Label>
        <Input value={borderColor} onChange={(e) => setBorderColor(e.target.value)} />
      </InputBlock>
      <InputBlock isRow={true}>
        <RowLabel>Borders</RowLabel>
        <Input type="checkbox" value={hasBorder} checked={hasBorder} onChange={(e) => setHasBorder(e.target.checked)} />
      </InputBlock>
    </Wrapper>
  )
}

InputWrapper.propTypes = {
  values: PropTypes.shape({
    bgColor: PropTypes.string,
    title: PropTypes.string,
    titleSize: PropTypes.string,
    titleColor: PropTypes.string,
    hasBorder: PropTypes.bool,
    borderColor: PropTypes.string
  }).isRequired,
  setters: PropTypes.shape({
    setBgColor: PropTypes.func,
    setTitle: PropTypes.func,
    setTitleSize: PropTypes.func,
    setTitleColor: PropTypes.func,
    setHasBorder: PropTypes.func,
    setBorderColor: PropTypes.func
  }).isRequired
}


export default InputWrapper
